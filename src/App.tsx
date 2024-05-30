import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import AppRoutes from './components/Routes/AppRoutes';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useEffect } from 'react'
import { fetchGetCategories } from './features/categories/categoriesSlice'
import { useAppDispatch } from './features/store'
import { fetchGetProducts } from './features/products/productSlice'

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchGetCategories());
		dispatch(fetchGetProducts());
	}, [dispatch])

	return (
		<div className='wrapper'>
			<Header />
			<main className='main container'>
				<Sidebar />
				<AppRoutes />
			</main>
			<Footer />
		</div>
	);
}

export default App;
