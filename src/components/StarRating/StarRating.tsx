import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from './StarRating.module.css';

interface StarRatingProps {
	rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (rating >= i) {
			stars.push(<FaStar key={i} className={styles.star} />);
		} else if (rating >= i - 0.5) {
			stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
		} else {
			stars.push(<FaRegStar key={i} className={styles.star} />);
		}
	}
	return <div className={styles.starRating}>{stars}</div>;
};