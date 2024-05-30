import { useSelector } from 'react-redux'
import styles from './Categories.module.css';
import { Link } from 'react-router-dom'
import { CategoriesSkeleton } from './CategoriesSkeleton'

type RootState = {
	categories: {
		list: string[];
		isLoading: boolean;
	};
};

// const categoryImages = {
//   electronics: 'https://example.com/electronics.jpg',
//   jewelery: 'https://example.com/jewelery.jpg',
//   "men's clothing": 'https://example.com/mens_clothing.jpg',
//   "women's clothing": 'https://example.com/womens_clothing.jpg'
// };


export const Categories = ({ title }: { title: string }) => {
	const { list, isLoading } = useSelector(
		({ categories }: RootState) => categories
	);

	return (
		<section className={styles.categories}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.categoryWrap}>
				{isLoading ? (
					<CategoriesSkeleton />
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
