import { configureStore } from '@reduxjs/toolkit';
// Імпортуємо редюсер для категорій
import categoriesSlice from './categories/categoriesSlice';

// Створюємо та конфігуруємо Redux Store
export const store = configureStore({
	reducer: {
		// Додаємо редюсер для категорій до основного редюсера
		categories: categoriesSlice,
	},
	// Вмикаємо Redux DevTools тільки у режимі розробки
	devTools: process.env.NODE_ENV !== 'production',
});

// Виводимо тип диспетчера з store
export type AppDispatch = typeof store.dispatch;
// Виводимо тип кореневого стану з store
export type RootState = ReturnType<typeof store.getState>;

// Імпортуємо необхідні хуки з react-redux
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// Створюємо типізований хук для диспетчера
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Створюємо типізований хук для селектора стану
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
