import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../assets/images/logo2.svg';
import { CiFacebook } from 'react-icons/ci';
import { CiYoutube } from 'react-icons/ci';
import { IoLogoInstagram } from 'react-icons/io';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt='logo stuff' />
				</Link>
			</div>

			<div className={styles.rights}>
				Developed by{' '}
				<a
					href='https://volodymyrcodepro.site/'
					target='_blank'
					rel='noreferrer'
				>
					VOLODYMYR CODE_PRO
				</a>
			</div>

			<div className={styles.socials}>
				<a href='https://youtube.com' target='_blank' rel='noreferrer'>
					<CiYoutube className={styles.icon} />
				</a>

				<a href='https://facebook.com' target='_blank' rel='noreferrer'>
					<CiFacebook className={styles.icon} />
				</a>

				<a href='https://instagram.com' target='_blank' rel='noreferrer'>
					<IoLogoInstagram className={styles.icon} />
				</a>
			</div>
		</footer>
	);
};
