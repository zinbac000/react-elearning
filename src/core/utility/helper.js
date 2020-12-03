export const nameExtractor = (name) => {
  const nameArr = name.split(' ');

  return [nameArr[0]?.charAt(0), nameArr[nameArr.length - 1]?.charAt(0)].join(
    '',
  );
};
