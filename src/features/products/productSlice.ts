
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export interface IProducts {
	id: number;
	title: string;
	category: string;
	price: number;
	description: string;
	image: string;
	rating: {
		count: number;
		rate: number;
	}
}

interface categoriesState {
	list: IProducts[];
	isLoading: boolean;
	error: string | null;
}

const initialState: categoriesState = {
	list: [],
	// filtered: [],
	// related: [],
	isLoading: false,
	error: null,
};

export const fetchGetProducts = createAsyncThunk<IProducts[], void, { rejectValue: string }>(
	'products/fetchGetProducts',
	async ( _, thunkAPI ) => {
		try {
			const res = await axios.get(`${BASE_URL}`);
			console.log(res.data)
			return res.data as IProducts[];
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue('Error fetching categories');
		}
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGetProducts.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(fetchGetProducts.fulfilled, (state, action: PayloadAction<IProducts[]>) => {
			state.list = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchGetProducts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload || 'Error fetching categories';
		});
	},
});


export default productsSlice.reducer;