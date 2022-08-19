const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    user_id: 10,
    content: "Proin posuere rutrum dui, sollicitudin rutrum justo fringilla nec."
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 8,
    content: "Phasellus efficitur viverra libero."
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1,
    content: "Fusce porta justo nec mauris fringilla sollicitudin. Cras in orci sed mi iaculis gravida. Proin varius mauris eu consectetur auctor. Donec fermentum eu erat quis ornare."
  },
  {
    title: 'Nunc purus.',
    user_id: 4,
    content: "Aliquam condimentum, neque sit amet egestas euismod, lectus est iaculis massa, at faucibus velit eros mollis lorem. Morbi eu pretium urna, vel dignissim massa. Nulla facilisis at nisl non tincidunt. Etiam ut porta magna."
  },
  {
    title: 'Pellentesque eget nunc.',
    user_id: 7,
    content: "Pellentesque finibus tempus orci, volutpat ornare odio porta sit amet. Aliquam non est auctor, semper dui aliquet, bibendum odio. "
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4,
    content: "Aliquam iaculis lorem tempor nisi malesuada, quis posuere arcu viverra. Ut luctus porttitor nibh, eu gravida neque condimentum ut. Aenean pellentesque tincidunt viverra."
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_id: 1,
    content: "Donec laoreet sapien at ipsum dapibus fermentum. Ut rhoncus orci in vestibulum malesuada. Morbi dignissim cursus bibendum."
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1,
    content: "Maecenas quis eleifend purus, non venenatis dui. Suspendisse accumsan, augue in iaculis feugiat, ante dolor viverra nibh, a tincidunt velit massa ut tellus."
  },
  {
    title: 'Duis ac nibh.',
    user_id: 9,
    content: "Donec faucibus ut arcu eu scelerisque. Suspendisse ultricies nibh massa, a tristique diam feugiat vel."
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 5,
    content: "Duis fermentum leo nec consequat pulvinar. Sed sit amet nibh nisl. Duis porttitor libero id mi aliquam tincidunt."
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_id: 3,
    content: "Cras sit amet massa at eros placerat vehicula sodales ut diam. Praesent et egestas felis, vel varius lacus. Nam at aliquam lorem."
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 10,
    content: "Nunc quam diam, vestibulum ac purus ut, consectetur bibendum libero."
  },
  {
    title: 'Donec dapibus.',
    user_id: 8,
    content: "Curabitur ut lacus leo. Sed non leo interdum, pulvinar dui vel, feugiat quam. Sed gravida faucibus nulla in pulvinar."
  },
  {
    title: 'Nulla tellus.',
    user_id: 3,
    content: "In aliquet elementum felis eget pharetra. Donec cursus malesuada urna, at efficitur libero."
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 3,
    content: "Mauris pharetra et erat quis euismod."
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 7,
    content: "Ut mollis elit eros, non pellentesque sapien varius eget."
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_id: 6,
    content: "Sed dignissim nunc et est aliquet molestie. Maecenas luctus placerat est, non porttitor lorem egestas at. Morbi mattis tempor nisl et tristique."
  },
  {
    title: 'Etiam justo.',
    user_id: 4,
    content: "Donec vestibulum leo id ipsum imperdiet, id consectetur quam venenatis. Aliquam non urna tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    user_id: 6,
    content: "In nec nulla sapien. Vivamus sodales orci lorem, ut posuere sem aliquam et. Nulla eros orci, suscipit nec nibh vel, consequat blandit est."
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_id: 7,
    content: "Nulla lobortis vel ex non rhoncus. Nunc eget congue odio. Fusce vel malesuada elit, a viverra ipsum. Integer vestibulum maximus ante non mollis."
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
