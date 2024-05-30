import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { useSelector } from 'react-redux';
import { SkeletonSidebar } from './SkeletonSidebar'

type RootState = {
	categories: {
		list: string[];
		isLoading: boolean;
	};
};

export const Sidebar = () => {
	const { list, isLoading } = useSelector(
		({ categories }: RootState) => categories
	);

	return (
		<section className={styles.sidebar}>
			<h2 className={styles.title}>Categories</h2>
			<nav>
				{isLoading ? (
					<SkeletonSidebar />
				) : (
					<ul className={styles.menu}>
						{list.map((category) => (
							<li key={category}>
								<NavLink
									className={({ isActive }) =>
										`${styles.link} ${isActive ? styles.active : ''}`
									}
									to={`/categories/${category}`}
								>
									{category}
								</NavLink>
							</li>
						))}
					</ul>
				)}
			</nav>
			<div className={styles.sidebarFooter}>
				<a onClick={(e) => e.preventDefault()} href='#' target='_blank' className={styles.link}>
					Help
				</a>
				<a onClick={(e) => e.preventDefault()} href='#' target='_blank' className={styles.link}>
					Terms & Conditions
				</a>
			</div>
		</section>
	);
};
