import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../assets/images/logo.svg';
import AVATAR from '../../assets/images/avatar.svg';
import { FaSearch, FaRegHeart } from 'react-icons/fa';
import { ShoppingBag } from 'lucide-react';
export const Header = () => {
	return (
		<header className={styles.header}>

			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt='logo stuff' />
				</Link>
			</div>

			<div className={styles.user}>
				<div className={styles.avatar}>
					<img className={styles.avatarImg} src={AVATAR} alt='avatar' />
				</div>
				<div className={styles.username}>Guest</div>
			</div>

			<div className={styles.info}>
				<form className={styles.form}>
					<div className={styles.icon}>
						<FaSearch className={styles.iconSearch} />
					</div>
					<div className={styles.input}>
						<input
							type='search'
							name='search'
							placeholder='Search products...'
							autoComplete='off'
							onChange={() => {}}
							value=''
						/>
					</div>
					{false && <div className={styles.box}></div>}
				</form>
			</div>

			<div className={styles.account}>
				<Link to={ROUTES.HOME} className={styles.favorites}>
					<FaRegHeart className={styles.icon} />
				</Link>
				<Link to={ROUTES.CART} className={styles.cart}>
					<ShoppingBag className={styles.icon} />
					<span className={styles.count}>2</span>
				</Link>
			</div>

		</header>
	);
};
