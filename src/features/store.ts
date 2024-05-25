import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice'

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
	},
	devTools: process.env.NODE_ENV !== 'production', // Вмикаємо DevTools тільки у режимі розробки
})

// Виведемо типи з стору
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Експортуємо типізовані хуки
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;