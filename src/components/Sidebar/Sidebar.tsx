import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { useSelector } from 'react-redux';

interface Category {
	id: number;
	name: string;
	image: string;
	createdAt: string;
	updatedAt: string;
}

interface CategoriesState {
	list: Category[];
	isLoading: boolean;
}

interface RootState {
	categories: CategoriesState;
}

export const Sidebar = () => {
	const { list, isLoading } = useSelector(({ categories }: RootState) => categories);

	if (isLoading) {
		return <div className={styles.loading}>Loading...</div>;
	}

	const filterCategories = (categories: Category[]): Category[] => {
		return categories.filter(category => !category.name.includes('Testing'));
	};

	const filteredList = filterCategories(list);

	return (
		<section className={styles.sidebar}>
			<h2 className={styles.title}>Categories</h2>
			<nav>
				<ul className={styles.menu}>
					{filteredList.slice(0, 5).map(({ id, name }) => (
						<NavLink
						className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
						to={`/categories/${id}`} key={id}>
							<li>{name}</li>
						</NavLink>
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


