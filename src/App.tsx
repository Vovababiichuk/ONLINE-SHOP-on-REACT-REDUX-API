import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AppRoutes } from './components/Routes/Routes';
import { Sidebar } from './components/Sidebar/Sidebar';
function App() {
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
