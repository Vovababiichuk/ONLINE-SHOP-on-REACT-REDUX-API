// import { useSelector } from 'react-redux'
import { Hero } from '../Hero/Hero';
// import { Products } from '../Products/Products';

// interface Products {
// 	title: string;
// 	price: number;
// 	description: string;
// 	images: string[];
// 	amount: number;
// 	products: Products[];
// 	category: { name: string };
// 	style: object;
// 	list: [];
// }

const Home = () => {
	// const { list } = useSelector(({ products }: { products: Products }) => products)

	return (
		<>
			<Hero />
			{/* <Products products={list} amount={5} title='Trending' style={{ marginTop: 0 }}  /> */}
		</>
	);
};

export default Home;
