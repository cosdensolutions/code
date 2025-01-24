import { useState } from 'react';

type Card = {
  id: number;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
};

type MemoryGameProps = {
  images: string[];
};

export default function MemoryGame({
  images,
}: MemoryGameProps) {
  const [cards, setCards] = useState<Card[]>(() => {
    const duplicatedImages = [...images, ...images];
    const shuffledImages = shuffleArray(duplicatedImages);
    return shuffledImages.map((imageUrl, index) => ({
      id: index,
      imageUrl,
      isFlipped: false,
      isMatched: false,
    }));
  });

  function handleCardMatch(
    firstCard: Card,
    secondCard: Card,
  ) {
    const isMatch =
      firstCard.imageUrl === secondCard.imageUrl;

    setTimeout(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        if (isMatch) {
          newCards[firstCard.id].isMatched = true;
          newCards[secondCard.id].isMatched = true;
        } else {
          newCards[firstCard.id].isFlipped = false;
          newCards[secondCard.id].isFlipped = false;
        }
        return newCards;
      });
    }, 800);
  }

  function handleCardClick(card: Card) {
    if (card.isFlipped || card.isMatched) return;

    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards[card.id].isFlipped = true;

      const flippedCards = newCards.filter(
        (c) => c.isFlipped && !c.isMatched,
      );

      if (flippedCards.length === 2) {
        handleCardMatch(flippedCards[0], flippedCards[1]);
      }

      return newCards;
    });
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => handleCardClick(card)}
          className={`aspect-square cursor-pointer rounded-lg border-2 border-grayscale-700 transition-all duration-300 ${
            card.isFlipped || card.isMatched
              ? 'rotate-0'
              : 'rotate-180 bg-primary-700'
          }`}
        >
          {(card.isFlipped || card.isMatched) && (
            <img
              src={card.imageUrl}
              alt="Card"
              className="h-full w-full rounded-lg object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
