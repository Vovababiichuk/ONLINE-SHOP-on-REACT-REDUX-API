import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';
import { IProducts } from '../../features/products/productSlice';
import { StarRating } from '../StarRating/StarRating';
import { ProductsSkeleton } from './ProductsSkeleton'

type RootState = {
	products: {
		list: IProducts[];
		isLoading: boolean;
	};
};

export const Products = () => {
	const { list, isLoading } = useSelector(
		({ products }: RootState) => products
	);

	const filterProducts = () => {
		return list.filter(el => el.rating.rate > 4).slice(0, 5);
	};

	const popularProducts = filterProducts();

	return (
		<section className={styles.products}>
			<h2 className={styles.title}>Trending</h2>
			<div className={styles.cardWrap}>
				{isLoading ? (
					<ProductsSkeleton />
				) : (
					<ul className={styles.card}>
						{popularProducts.map(product => (
							<div key={product.id} className={styles.productCardWrap}>
								<li className={styles.productItem}>
									<Link to={`/${product.id}`} className={styles.productLink}>
										<div className={styles.productImageWrap}>
											<img
												src={product.image}
												alt={product.title}
												className={styles.productImage}
											/>
										</div>
										<div className={styles.productInfo}>
											<h3 className={styles.productTitle}>{product.title}</h3>
											<p className={styles.productCategory}>
												{product.category}
											</p>
											<p className={styles.productPrice}>${product.price}</p>
											<div className={styles.productRating}>
												<StarRating rating={product.rating.rate} />
												<span className={styles.review}>
													({product.rating.count} reviews)
												</span>
											</div>
										</div>
									</Link>
								</li>
							</div>
						))}
					</ul>
				)}
			</div>
			<button className={styles.button + ' ' + styles.buttonProducts}>
				Shop Now
			</button>
		</section>
	);
};
