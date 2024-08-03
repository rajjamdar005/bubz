import React from 'react';
import styles from './journey.module.css';

interface JourneyPhase {
  title: string;
  description: string;
  imageUrl: string;
  actionText: string;
  actionLink: string;
}

const journeyPhases: JourneyPhase[] = [
  {
    title: 'The Beginning',
    description: 'Our journey started with a spark of excitement and curiosity.',
    imageUrl: "/images/beg.jpeg",
    actionText: 'Read More',
    actionLink: '/journey/phase-1'
  },
  {
    title: 'The walk',
    description: 'Steps taken, memories made.',
    imageUrl: '/images/walk.jpeg',
    actionText: 'Read More',
    actionLink: '/journey/phase-2'
  },
 
  {
    title: 'strangers',
    description: 'The ache of absence, a constant reminder of what once was.',
    imageUrl: "/images/stranger.jpeg",
    actionText: 'Read More',
    actionLink: '/journey/phase-3'
  },

  {
    title: 'treks',
    description: 'Hiking highs and heartfelt vibes.',
    imageUrl: "/images/trek.jpg",
    actionText: 'Read More',
    actionLink: '/journey/phase-4'
  },
  {
    title: 'tea-toast',
    description: 'Where laughter was the main course, and friendship was the dessert. Every sip a memory, every bite a story.',
    imageUrl: "/images/tea.jpeg",
    actionText: 'Read More',
    actionLink: '/journey/phase-5'
  },
  {
    title: 'us ',
    description: 'In the tapestry of life, our threads are intricately woven',
    imageUrl:  "/images/us.jpeg",
    actionText: "Read More",
    actionLink: '/journey/phase-6'
  }
];

const Journey: React.FC = () => {
  return (
    <div className={`container mx-auto p-4 ${styles.journeyContainer}`}>
      <h1 className={`text-4xl font-bold text-center mb-8 ${styles.title}`}>Our Journey</h1>
      {/* Removed the progress bar section */}
      <div className={`grid grid-cols-1 gap-4 ${styles.cardGrid}`}>
        {journeyPhases.map((phase, index) => (
          <div key={index} className={`bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 ${styles.card}`}>
            <img src={phase.imageUrl} alt={phase.title} className={styles.cardImage} />
            <div className={`p-4 ${styles.cardBody}`}>
              <h2 className={`text-2xl font-semibold ${styles.cardTitle}`}>{phase.title}</h2>
              <p className="text-gray-600">{phase.description}</p>
              <div className={`mt-4 ${styles.cardActions}`}>
                <a href={phase.actionLink} className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-4">
                  {phase.actionText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
