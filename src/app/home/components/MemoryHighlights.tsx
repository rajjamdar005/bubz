// app/home/components/MemoryHighlights.tsx
import styles from '../Home.module.css';
import Image from 'next/image'; // Import Image from next/image

const memories = [
  {
    id: 1,
    imageUrl: "/images/memm.png",
    alt: "Caterpillar transformation memory", // Add meaningful alt text
  },
  {
    id: 2,
    imageUrl: "/images/memory2.jpeg",
    alt: "Butterfly emergence memory", // Add meaningful alt text
  },
];

export default function MemoryHighlights() {
  return (
    <div className={styles.memoryHighlights}>
      <h2 className={styles.sectionTitle}>Caterpillar to Butterfly</h2>
      <div className={styles.memoryGrid}>
        {memories.map((memory) => (
          <div key={memory.id} className={styles.memoryItem}>
            <Image 
              src={memory.imageUrl} 
              alt={memory.alt} // Use the alt text from the array
              className={styles.memoryImage} 
              width={500} // Specify the width
              height={300} // Specify the height
            />
            <div className={styles.memoryOverlay}>
              {/* Overlay content can go here if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
