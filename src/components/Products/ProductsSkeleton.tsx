import styles from './ProductsSkeleton.module.css';
export const ProductsSkeleton = () => {
	return (
		<div className={styles.skeleton}>
			<ul className={styles.cardSkeleton}>
				<li className={styles.skeletonItem}>
					<div className={styles.skeletonImage}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonCategory}></div>
					<div className={styles.skeletonPrice}></div>
					<div className={styles.skeletonRating}></div>
				</li>
				<li className={styles.skeletonItem}>
					<div className={styles.skeletonImage}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonCategory}></div>
					<div className={styles.skeletonPrice}></div>
					<div className={styles.skeletonRating}></div>
				</li>
				<li className={styles.skeletonItem}>
					<div className={styles.skeletonImage}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonCategory}></div>
					<div className={styles.skeletonPrice}></div>
					<div className={styles.skeletonRating}></div>
				</li>
				<li className={styles.skeletonItem}>
					<div className={styles.skeletonImage}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonCategory}></div>
					<div className={styles.skeletonPrice}></div>
					<div className={styles.skeletonRating}></div>
				</li>
				<li className={styles.skeletonItem}>
					<div className={styles.skeletonImage}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonTitle}></div>
					<div className={styles.skeletonCategory}></div>
					<div className={styles.skeletonPrice}></div>
					<div className={styles.skeletonRating}></div>
				</li>
			</ul>
		</div>
	);
};
