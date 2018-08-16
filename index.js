export default async (array, callback) => {
  await Promise.all(array.map(async (arrayItem, index) => {
    callback(arrayItem, index);
  }));
};
