import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../assets/images/logo.svg';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react'

export const Footer = () => {
	return (
		<footer className={styles.footerWrap}>
			<div className={styles.footer}>
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
						className={styles.link}
					>
						VOLODYMYR CODE_PRO
					</a>
				</div>
				<div className={styles.socials}>
					<a
						href='#'
						target='_blank'
						rel='noreferrer'
						onClick={e => e.preventDefault()}
					>
						<IconBrandYoutube stroke={1} className={styles.icon} />
					</a>
					<a
						href='#'
						target='_blank'
						rel='noreferrer'
						onClick={e => e.preventDefault()}
					>
						<IconBrandFacebook stroke={1} className={styles.icon} />
					</a>
					<a
						href='#'
						target='_blank'
						rel='noreferrer'
						onClick={e => e.preventDefault()}
					>
						<IconBrandInstagram stroke={1} className={styles.icon} />
					</a>
				</div>
			</div>
		</footer>
	);
};
