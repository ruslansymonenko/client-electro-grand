'use client';

import { FC, useState } from 'react';

const TextInfo: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortText: string =
    'Магазин електротоварів Elektro Grand надає вам можливість придбати широкий' +
    ' асортимент електрики та освітлення товарів по всій Україні. Наш інтернет-магазин пропонує' +
    ' широкий асортимент продукції, що відповідає найвищим стандартам якості.' +
    ' Ми прагнемо забезпечити наших клієнтів всім необхідним для комфортного і' +
    ' безпечного використання електрики в будь-якому домі чи офісі. Від стильних' +
    ' світильників до якісних кабелів і розеток — у нас ви знайдете все, що потрібно для' +
    ' реалізації ваших ідей.';
  const expandedText: string = `${shortText} Ми пропонуємо широкий вибір кабелів, розеток, вимикачів та інших аксесуарів, які допоможуть вам реалізувати будь-які електричні проекти. Наша продукція відповідає всім стандартам безпеки та надійності, що дозволяє вам бути впевненими у своєму виборі. Наш асортимент включає сучасні рішення для освітлення, які поєднують естетику та функціональність. Ми пропонуємо продукцію від провідних виробників, що забезпечує не тільки енергозбереження, але й стильний дизайн для будь-якого інтер'єру. У нас ви знайдете як класичні, так і інноваційні моделі освітлення, які додадуть шарму вашому простору.`;

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full mx-auto bg-gray-100 p-10 rounded font-sans my-20">
      <div>
        <h2 className="text-gray-800 text-2xl font-bold mb-4">Магазин Elektro Grand</h2>
        <p className="text-gray-600 leading-relaxed text-base">
          {isExpanded ? expandedText : shortText + '...'}
        </p>
        <div className="mt-4">
          <button
            onClick={toggleText}
            className="text-primary font-semibold hover:underline text-base"
          >
            {isExpanded ? 'Сховати' : 'Побачити більше...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextInfo;
