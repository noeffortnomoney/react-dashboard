import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Cài đặt thư viện VueJs',
  'Đơn giản, Great Looking Animations trong dự án của bạn | Video Tutorial',
  '40 Serif Fonts miễn phí cho Digital Designers',
  'Thiết kế website HTML/CSS, JavaScript, Jquery',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Build and Deploy a Responsive E-commerce website with REACTJS, Firebase, Stripejs || Full Tutorial',
  'Giải chi tiết bộ đề dự đoán Toeic tháng 7/2023',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
  'Cách animate một SVG với border-image',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
