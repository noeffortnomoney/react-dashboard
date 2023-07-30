import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Giày Nike Air Force 1',
  'Giày Nike Space Hippie 04',
  'Giày Nike Air Zoom Pegasus 37',
  'Giày Nike Blazer Low 77',
  'Giày Nike ZoomX',
  'Giày Zoom Freak 2',
  'Giày Nike Air Max',
  'Giày Jordan Delta',
  'Giày Air Jordan',
  'Giày Nike Waffler',
  'Giày Kyrie 7',
  'Giày Nike Air Zoom',
  'Giày Nike Air LX',
  'Giày Nike Shadow SE',
  'Giày Nike Tempo NEXT',
  'Giày Nike DBreak-Type',
  'Giày Nike Air Max Up',
  'Giày Nike Air Max 270',
  'Giày NikeCourt Royale',
  'Giày Nike Air Zoom Premium',
  'Giày Nike Air Zoom SuperRep',
  'Giày NikeCourt Royale',
  'Giày Nike React Art3mis',
  'Giày Nike React Infinity',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;
