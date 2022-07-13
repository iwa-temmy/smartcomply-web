export const truncateText = (str, noOfChar) => {
  return str.slice(0, noOfChar) + "...";
};

export const capitalizeText = str => {
  return str[0].toUpperCase() + str.slice(1);
};
