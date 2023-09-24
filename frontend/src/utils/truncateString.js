export const truncateString = str => {
  const maxLength = 50;

  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + '...';
};
