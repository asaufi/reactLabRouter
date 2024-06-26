// src/components/SensorCard.jsx
import styles from './SensorCard.module.css';

const SensorCard = ({ name, value }) => (
    <div className={styles.card}>
        <h2>{name}</h2>
        <p>{value}</p>
    </div>
);

export default SensorCard;
