
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
	filtered: IProducts[];
	// related: IProducts[];
	isLoading: boolean;
	error: string | null;
}

const initialState: categoriesState = {
	list: [],
	filtered: [],
	// related: [],
	isLoading: false,
	error: null,
};

export const fetchGetProducts = createAsyncThunk<IProducts[], void, { rejectValue: string }>(
	'products/fetchGetProducts',
	async ( _, thunkAPI ) => {
		try {
			const res = await axios.get(`${BASE_URL}`);
			return res.data as IProducts[];
		} catch (err) {
			return thunkAPI.rejectWithValue('Error fetching categories');
		}
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filterByPrice: (state, action: PayloadAction<number>) => {
			state.filtered = state.list.filter((product) => product.price < action.payload);
		}
	},
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

export const { filterByPrice } = productsSlice.actions;
export default productsSlice.reducer;