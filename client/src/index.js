import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import './assets/styles/basicStyle.css';
import './assets/styles/basicColor.scss';
import './assets/styles/header.scss';
import './assets/styles/hero.scss';
import './assets/styles/cards-offers.scss';
import './assets/styles/our-clients.scss';
import './assets/styles/footer.scss';
import './assets/styles/form.scss';
import './assets/styles/popup-menu.scss';

import { Validator } from './assets/scripts/Validator.js';
import { sendForm } from './assets/scripts/sendForm.js';
import { openCloseModalWindow } from './assets/scripts/openCloseModal.js';
import CardsOffers from './Cards-offers.js';

if (document.querySelector('#form')) {
  sendForm(
    '#form',
    ['form_active', 'form_display'],
    '#popup-thanks',
    ['popup-thanks_visible', 'popup-thanks_display'],
    '#modal',
    ['modal-window_active', 'modal-window_display'],
  );
}

if (document.querySelector('#form')) {
  const validator1 = new Validator({
    selector: '#form',
    pattern: {},
    method: {
      email: [['notEmpty'], ['pattern', 'email']],
      name: [['notEmpty'], ['pattern', 'nameAndText']],
      text: [['notEmpty'], ['pattern', 'nameAndTextAndDigits']],
    },
  });
  validator1.init();
}

if (document.querySelector('#form') && document.querySelector('#modal')) {
  openCloseModalWindow(
    '#button-start-modal',
    '#modal',
    '#form',
    'modal-window_active',
    'form_active',
    'modal-window_display',
    'form_display',
    '.form__close',
  );
}

render(<CardsOffers />, document.querySelector('.cards-offers'));
