const getEduItem = (eduData) => {
  return `<li><div class="edu-year"><h2>${eduData.year}</h2></div><div class="edu-detial"><h2>${eduData.title}</h2><p>${eduData.description}</p></div></li>`;
};

export default getEduItem;
