export const randomImageId = () => {
  const min = 1;
  const max = 237;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};
