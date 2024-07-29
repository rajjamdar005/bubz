// app/home/components/BirthdayWishes.tsx
import styles from '../home.module.css';

const birthdayWishes = [
  {
    id: 1,
    message: "Happy birthday! Wishing you an amazing day.",
    author: "John Doe",
  },
  {
    id: 2,
    message: "Cheers to another year around the sun! Have a blast.",
    author: "Jane Smith",
  },
  {
    id: 3,
    message: "Wishing you all the best on your special day. Enjoy!",
    author: "Bob Johnson",
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