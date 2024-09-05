// app/home/components/BirthdayWishes.tsx
import styles from '../Home.module.css';

const birthdayWishes = [
  {
    id: 1,
    message: "Happy birthday, to my one and only daughter. Our Blessings are with you always.",
    author: "dad",
  },
  {
    id: 2,
    message: "Happiest Birthday to one of the bear of the trio! 🧸",
    author: "rommies",
  },
  {
    id: 3,
    message: "Cheers to another fabulous year of life!!!",
    author: "shwaty🐣",
  },
  // Add more birthday wishes as needed
];

export default function BirthdayWishes() {
  return (
    <div className={styles.birthdayWishes}>
      <h2 className={styles.sectionTitle}>Birthday Wishes</h2>
      <div className={styles.wishesContainer}>
        {birthdayWishes.map((wish) => (
          <div key={wish.id} className={styles.wishCard}>
            <p className={styles.wishMessage}>{wish.message}</p>
            <p className={styles.wishAuthor}>- {wish.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
