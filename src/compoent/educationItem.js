const getEduItem = (eduData) => {
  return `<li class="edu-item"><div class="edu-year"><h3>${eduData.year}</h3></div><div class="edu-detial"><h3>${eduData.title}</h3><p>${eduData.description}</p></div></li>`;
};

export default getEduItem;
