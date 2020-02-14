export default (text, search) => {
  if(!search) return text;
  const regexp = new RegExp(search, 'ig');
  return text.replace(regexp, (match) => (`<span class="user-card--highlighted">${match}</span>`));
};
