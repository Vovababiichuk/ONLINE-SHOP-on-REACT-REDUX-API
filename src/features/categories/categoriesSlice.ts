import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

interface Category {
	id: number;
	name: string;
	img: string;
}

interface categoriesState {
	list: Category[];
	isLoading: boolean;
	error: string | null;
}

const initialState: categoriesState = {
	list: [],
	isLoading: false,
	error: null,
};

export const fetchGetCategories = createAsyncThunk<Category[], void, { rejectValue: string }>(
	'categories/fetchGetCategories',
	// Declare the type your function argument here:
	async ( _, thunkAPI ) => {
		try {
			const res = await axios.get(`${BASE_URL}/categories`);
			return res.data as Category[];
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue('Error fetching categories');
		}
	}
);

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGetCategories.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(fetchGetCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
			state.list = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchGetCategories.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload || 'Error fetching categories';
		});
	},
});

export default categoriesSlice.reducer;
