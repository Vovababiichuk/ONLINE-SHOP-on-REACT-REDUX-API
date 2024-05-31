import { Banner } from '../Banner/Banner'
import { Categories } from '../Categories/Categories'
import { Hero } from '../Hero/Hero';
import { Products } from '../Products/Products'


const Home = () => {

	return (
		<>
			<Hero />
			<Products title='Trending'/>
			<Categories title='Worth seeing'/>
			<Banner />
		</>
	);
};

export default Home;
