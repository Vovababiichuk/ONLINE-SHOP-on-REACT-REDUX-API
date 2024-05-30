import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';
import { IProducts } from '../../features/products/productSlice';
import { StarRating } from '../StarRating/StarRating'

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
			<div>
				{isLoading ? (
					<div className={styles.skeleton}>
						<ul className='menuSkeleton'>
							<li className='skeletonItem'></li>
							<li className='skeletonItem'></li>
							<li className='skeletonItem'></li>
							<li className='skeletonItem'></li>
						</ul>
					</div>
				) : (
					<ul className={styles.card}>
						{popularProducts.map(product => (
							<div className={styles.productCardWrap}>
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
												<span className={styles.review}>({product.rating.count} reviews)</span>
											</div>
										</div>
									</Link>
								</li>
							</div>
						))}
					</ul>
				)}
			</div>
		</section>
	);
};
