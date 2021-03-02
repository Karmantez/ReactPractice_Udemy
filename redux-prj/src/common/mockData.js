const friends = [
  { name: '신혜선', age: 31 },
  { name: '서은수', age: 26 },
  { name: '장원영', age: 16 },
  { name: '이유비', age: 30 },
  { name: '설인아', age: 25 },
];

const timelines = [
  { desc: '철인왕후', likes: 100 },
  { desc: 'React', likes: 50 },
  { desc: 'Vue', likes: 70 },
  { desc: 'Javascript', likes: 90 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
