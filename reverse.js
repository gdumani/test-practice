const reverse = (string) => {
  let rev = '';
  string.split('').forEach(c => {
    rev = c + rev;
  });
  return rev;
};
export default reverse;