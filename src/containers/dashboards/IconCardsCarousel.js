/* eslint-disable react/no-array-index-key */
import React from 'react';
import IconCard from 'components/cards/IconCard';
import data from 'data/iconCards';
import GlideComponent from 'components/carousel/GlideComponent';

const IconCardsCarousel = ({ className = 'icon-cards-row rounded' }) => {
  return (
    <div className={className}>
      <GlideComponent
        settings={{
          gap: 5,
          perView: 4,
          type: 'carousel',
          breakpoints: {
            320: { perView: 1 },
            576: { perView: 2 },
            768: { perView: 3 },
            1100: { perView: 4 },
            1600: { perView: 5 },
            1700: { perView: 5 },
            1800: { perView: 5 },
          },
          hideNav: true,
        }}
      >
        {data.map((item, index) => {
          return (
            <div key={`icon_card_${index}`}>
              <IconCard {...item} className="mb-4" />
            </div>
          );
        })}
      </GlideComponent>
    </div>
  );
};
export default IconCardsCarousel;
