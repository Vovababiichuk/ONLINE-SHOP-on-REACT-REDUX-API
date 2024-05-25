import { useDispatch } from 'react-redux'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AppRoutes } from './components/Routes/Routes';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useEffect } from 'react'
import { fetchGetCategories } from './features/categories/categoriesSlice'
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchGetCategories());
		console.log( 'fetchGetCategories' )
	}, [dispatch])

	return (
		<div className='wrapper'>
			<Header />
			<main className='main'>
				<Sidebar />
				<AppRoutes />
			</main>
			<Footer />
		</div>
	);
}

export default App;
