import { useSelector } from 'react-redux'
import styles from './Categories.module.css';
import { Link } from 'react-router-dom'
import { CategoriesSkeleton } from './CategoriesSkeleton'
import ELECTRO from '../../assets/images/categories/electro.jpg'
import JEWELERY from '../../assets/images/categories/jewelery.jpg'
import MEN_CLOTHING from '../../assets/images/categories/mens-clothing.jpg'
import WOMEN_CLOTHING from '../../assets/images/categories/women-clothing.jpg'

type RootState = {
	categories: {
		list: string[];
		isLoading: boolean;
	};
};

const categoryImages: Record<string, string> = {
  electronics: ELECTRO,
  jewelery: JEWELERY,
  "men's clothing": MEN_CLOTHING,
  "women's clothing": WOMEN_CLOTHING
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
					<CategoriesSkeleton />
				) : (
					<ul className={styles.category}>
						{list.map(category => (
							<div key={category} className={styles.categoryWrap}>
								<li className={styles.categoryItem}>
									<Link to={`/categories/${category}`} className={styles.productLink}>
										<div className={styles.categoryImageWrap}>
											<img
												src={categoryImages[category]}
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
