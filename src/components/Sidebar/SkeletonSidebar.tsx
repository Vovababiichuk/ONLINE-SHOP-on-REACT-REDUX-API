import styles from './SkeletonSidebar.module.css';

export const SkeletonSidebar = () => {
	return (
		<div className={styles.skeleton}>
			<ul className={styles.menuSkeleton}>
				<li className={styles.skeletonItem}></li>
				<li className={styles.skeletonItem}></li>
				<li className={styles.skeletonItem}></li>
				<li className={styles.skeletonItem}></li>
			</ul>
		</div>
	);
};
