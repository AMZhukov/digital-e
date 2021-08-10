import React from 'react';

import Offer1 from './assets/images/1.png';
import Offer1x2 from './assets/images/1@2x.png';
import Offer2 from './assets/images/2.png';
import Offer2x2 from './assets/images/2@2x.png';
import Offer3 from './assets/images/3.png';
import Offer3x2 from './assets/images/3@2x.png';

import Arrow from './assets/images/arrow.svg';

const CardsOffers = () => {
  const cards = [
    {
      alt: 'Person-1',
      image: Offer1,
      imageX2: Offer1x2,
      title: 'Bring Technology To Your Comfrotable Home',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
        'tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      alt: 'Person-2',
      image: Offer2,
      imageX2: Offer2x2,
      title: 'Make Your business To Be Better Famous In Internet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
        'tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      alt: 'Person-3',
      image: Offer3,
      imageX2: Offer3x2,
      title: 'Build Your Digital Product That Suitable For Your Need',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
        'tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  return (
    <div className="container-xs">
      <div className="cards-offers__wrapper">
        <h2 className="cards-offers__title">What we do to help our client grow in digital era,</h2>
        {cards.map((item, index) => {
          return (
            <div className="cards-offers__card" key={index}>
              <div className="cards-offers__card-image-wrapper">
                <picture>
                  <img
                    className="cards-offers__card-image"
                    src={item.image}
                    srcSet={`${item.imageX2} 2x`}
                    alt={item.alt}
                  />
                </picture>
              </div>
              <div className="cards-offers__card-title">{item.title}</div>
              <div className="cards-offers__card-description">{item.description}</div>
              <a className="cards-offers__card-link" href="#">
                <span className="cards-offers__link-span">Learn more</span> <Arrow />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardsOffers;
