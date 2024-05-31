import { Banner } from '../Banner/Banner';
import { Categories } from '../Categories/Categories';
import { Hero } from '../Hero/Hero';
import { Products } from '../Products/Products';
import { ProductsLess } from '../ProductsLess/ProductsLess'

const Home = () => {

	return (
		<>
			<Hero />
			<Products title='Trending' />
			<Categories title='Worth seeing' />
			<Banner />
			<ProductsLess title='Less than 100$' />
		</>
	);
};

export default Home;
