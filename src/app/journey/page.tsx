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
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp',
    actionText: 'Read More',
    actionLink: '/journey/phase-1'
  },
  {
    title: 'The walk',
    description: 'We explored new places and experienced thrilling adventures together.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1507525428034-b723cf961d3e.webp',
    actionText: 'Explore',
    actionLink: '/journey/phase-2'
  },
 
  {
    title: 'treks',
    description: 'We achieved significant milestones and celebrated our successes.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1522125670776-3c7abb882bc2.webp',
    actionText: 'Celebrate',
    actionLink: '/journey/phase-3'
  },

  {
    title: 'tea-toast',
    description: 'We achieved significant milestones and celebrated our successes.',
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1522125670776-3c7abb882bc2.webp',
    actionText: 'Celebrate',
    actionLink: '/journey/phase-3'
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
