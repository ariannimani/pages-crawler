export const formatDate = inputDate => {
  const date = new Date(inputDate);

  const monthName = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear().toString().substr(2);

  return `${monthName} ${day}, ${year}`;
};
