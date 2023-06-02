import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


axios.defaults.baseURL = 'https://63fe033719f41bb9f6593271.mockapi.io';

export const getAllUsers = createAsyncThunk('users/fetchAll',
async (_, thunkAPI) => {
    try {
        const responce = await axios.get('/users');
        return responce.data;
    } catch (error) {
        toast.error('Something was wrong!');
        return thunkAPI.rejectWithValue(error);          
    }
});

export const addUser = createAsyncThunk(
    'contacts/addUser',
    async ({ user, tweets, followers, avatar }, thunkAPI) => {
      try {
        const response = await axios.post('/users', { user, tweets, followers, avatar });
        toast.info(`${response.data.user} add to base`);
        return response.data;
      } catch (error) {
        toast.error('Something was wrong!');
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/users/${id}`);
            toast.info(`${response.data.user} removed from base`);
        } catch (error) {
            toast.error('Something was wrong!');
            return thunkAPI.rejectWithValue(error);
        }
    }
  )