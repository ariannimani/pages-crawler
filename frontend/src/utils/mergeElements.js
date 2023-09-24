export const mergeElements = (h1 = [], h2 = [], links = []) => {
  let mergedArray = [];

  if (h1.length > 0) {
    mergedArray.push({ title: 'H1', data: h1 });
  }

  if (h2.length > 0) {
    mergedArray.push({ title: 'H2', data: h2 });
  }

  if (links.length > 0) {
    mergedArray.push({ title: 'A', data: links });
  }

  return mergedArray;
};
