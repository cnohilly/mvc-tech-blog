const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    user_id: 10,
    content: "Just filled text for the testing"
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 8,
    content: "Just filled text for the testing"
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1,
    content: "Just filled text for the testing"
  },
  {
    title: 'Nunc purus.',
    user_id: 4,
    content: "Just filled text for the testing"
  },
  {
    title: 'Pellentesque eget nunc.',
    user_id: 7,
    content: "Just filled text for the testing"
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4,
    content: "Just filled text for the testing"
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_id: 1,
    content: "Just filled text for the testing"
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1,
    content: "Just filled text for the testing"
  },
  {
    title: 'Duis ac nibh.',
    user_id: 9,
    content: "Just filled text for the testing"
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 5,
    content: "Just filled text for the testing"
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_id: 3,
    content: "Just filled text for the testing"
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 10,
    content: "Just filled text for the testing"
  },
  {
    title: 'Donec dapibus.',
    user_id: 8,
    content: "Just filled text for the testing"
  },
  {
    title: 'Nulla tellus.',
    user_id: 3,
    content: "Just filled text for the testing"
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 3,
    content: "Just filled text for the testing"
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 7,
    content: "Just filled text for the testing"
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_id: 6,
    content: "Just filled text for the testing"
  },
  {
    title: 'Etiam justo.',
    user_id: 4,
    content: "Just filled text for the testing"
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    user_id: 6,
    content: "Just filled text for the testing"
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_id: 7,
    content: "Just filled text for the testing"
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
