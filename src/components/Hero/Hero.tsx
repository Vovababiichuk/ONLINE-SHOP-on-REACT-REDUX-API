import styles from './Hero.module.css';
import BG from '../../assets/images/computer.png';

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.title}>BIG SALE 20%</div>
			<div className={styles.product}>
				<div className={styles.text}>
					<div className={styles.subtitle}>the bestseller of 2022 </div>
					<h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
					<button className={styles.button}>Shop Now</button>
				</div>
				<div className={styles.image}>
					<img src={BG} alt='image of computer' />
				</div>
			</div>
		</section>
	);
};
