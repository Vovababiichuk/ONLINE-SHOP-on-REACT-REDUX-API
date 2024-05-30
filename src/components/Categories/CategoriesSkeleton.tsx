import styles from './CategoriesSkeleton.module.css';
export const CategoriesSkeleton = () => {
	return (
		<div className={styles.skeleton}>
			<ul className={styles.cardSkeleton}>
				<li className={styles.skeletonItem}>
					<div className={styles.skeletonImage}></div>
					<div className={styles.skeletonTitle}></div>
				</li>
				<li className={styles.skeletonItem}>
					<div className={styles.skeletonImage}></div>
					<div className={styles.skeletonTitle}></div>
				</li>
				<li className={styles.skeletonItem}>
					<div className={styles.skeletonImage}></div>
					<div className={styles.skeletonTitle}></div>
				</li>
				<li className={styles.skeletonItem}>
					<div className={styles.skeletonImage}></div>
					<div className={styles.skeletonTitle}></div>
				</li>
			</ul>
		</div>
	);
};