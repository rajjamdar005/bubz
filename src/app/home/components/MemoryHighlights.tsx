// app/home/components/MemoryHighlights.tsx
import styles from '../home.module.css';

const memories = [
  {
    id: 1,
    title: "Memory ",
    description: "Description of Memory 1.",
    imageUrl: "/images/memory1.jpg",
  },
  {
    id: 2,
    title: "Memory 2",
    description: "Description of Memory 2.",
    imageUrl: "/images/memory2.jpeg",
  },



];

export default function MemoryHighlights() {
  return (
    <div className={styles.memoryHighlights}>
      <h2 className={styles.sectionTitle}> Caterpillar to Butterfly</h2>
      <div className={styles.memoryGrid}>
        {memories.map((memory) => (
          <div key={memory.id} className={styles.memoryItem}>
            <img src={memory.imageUrl} alt={memory.title} className={styles.memoryImage} />
            <div className={styles.memoryOverlay}>
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}