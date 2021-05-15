'use strict';

const Config = {
  OfferCostRange: {
    MIN: 1000,
    MAX: 100000
  },
  // Range of elements count in result file
  OffersCount: {
    DEFAULT: 1,
    MIN: 1,
    MAX: 1000
  },
  OffersTypes: {
    OFFER: `offer`,
    SALE: `sale`,
  },
  PicturesRange: {
    MIN: 1,
    MAX: 16
  },
  Codes: {
    ERROR: 1,
    SUCCESS: 0
  },
  // Min count of sentences in description
  MIN_DESCRIPTION_LENGTH: 1,
  // Max count of sentences in description
  MAX_DESCRIPTION_LENGTH: 5,
  // Output file name
  FILE_NAME: `mocks.json`
};

module.exports = {Config};
