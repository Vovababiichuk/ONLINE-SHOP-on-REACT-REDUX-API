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

const categoryImages: Record<string, string> = {
  electronics: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5941571022b7bae7255eadea82977496.jpg?imageView2/2/w/800/q/70/format/webp',
  jewelery: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5fee3503001bb661a68a91001bd5270e.jpg?imageView2/2/w/800/q/70/format/webp',
  "men's clothing": 'https://img.kwcdn.com/product/fancy/decf20ac-b8a7-4509-b5ed-f961f858b54e.jpg?imageView2/2/w/800/q/70/format/webp',
  "women's clothing": 'https://img.kwcdn.com/product/fancy/90909ca0-a69d-4a6a-9bf7-c1ca99ae5ce8.jpg?imageView2/2/w/800/q/70/format/webp',
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
