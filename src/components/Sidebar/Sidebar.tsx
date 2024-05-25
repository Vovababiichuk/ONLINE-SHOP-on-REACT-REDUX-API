import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css';
// import { ROUTES } from '../../utils/routes'
export const Sidebar = () => {
	return (
		<section className={styles.sidebar}>
			<h2 className={styles.title}>Categories</h2>
			<nav>
				<ul className={styles.menu}>
					<NavLink to={`/categories/${1}`}>
						Link
					</NavLink>
				</ul>
			</nav>
			<div className={styles.sidebarFooter}>
				<a href="/help" target='_blank' className={styles.link}>Help</a>
				<a href="/terms" target='_blank' className={styles.link}>Terms & Conditions</a>
			</div>
		</section>
	);
};
