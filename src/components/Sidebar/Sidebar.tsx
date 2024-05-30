import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { useSelector } from 'react-redux';

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

	console.log(list);

	if (isLoading) {
		return <div className={styles.loading}>Loading...</div>;
	}

	return (
		<section className={styles.sidebar}>
			<h2 className={styles.title}>Categories</h2>
			<nav>
				<ul className={styles.menu}>
					{list.map((category, id) => (
						<li key={id}>
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
			</nav>
			<div className={styles.sidebarFooter}>
				<a href='/help' target='_blank' className={styles.link}>
					Help
				</a>
				<a href='/terms' target='_blank' className={styles.link}>
					Terms & Conditions
				</a>
			</div>
		</section>
	);
};
