// app/home/components/MemoryHighlights.tsx
import styles from '../home.module.css';

const memories = [
  {
    id: 1,
    
    imageUrl: "/images/memm.png",
  },
  {
    id: 2,
    
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
            <img src={memory.imageUrl}  className={styles.memoryImage} />
            <div className={styles.memoryOverlay}>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}