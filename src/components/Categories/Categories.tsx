import { useSelector } from 'react-redux'
import styles from './Categories.module.css';
import { ProductsSkeleton } from '../Products/ProductsSkeleton'
import { Link } from 'react-router-dom'

type RootState = {
	categories: {
		list: string[];
		isLoading: boolean;
	};
};

export const Categories = ({ title }: { title: string }) => {
	const { list, isLoading } = useSelector(
		({ categories }: RootState) => categories
	);

	return (
		<section className={styles.categories}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.categoryWrap}>
				{isLoading ? (
					<ProductsSkeleton />
				) : (
					<ul className={styles.category}>
						{list.map(category => (
							<div key={category} className={styles.categoryWrap}>
								<li className={styles.categoryItem}>
									<Link to={`/categories/${category}`} className={styles.productLink}>
										<div className={styles.categoryImageWrap}>
											<img
												src='https://i.imgur.com/ZANVnHE.jpeg'
												alt={category}
												className={styles.categoryImage}
											/>
										</div>
										<div className={styles.categoryInfo}>
											<span className={styles.categoryName}>
												{category}
											</span>
										</div>
									</Link>
								</li>
							</div>
						))}
					</ul>
				)}
			</div>
		</section>
	)
}
