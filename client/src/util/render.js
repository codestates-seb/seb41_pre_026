const render = (startPage, curPage, endPage, totalPage) => {
  let btns = [];
  if (endPage <= 5) {
    startPage = 1;
  } else if (curPage >= endPage - 2) {
    startPage = endPage - 4;
  }

  for (let i = startPage; i <= endPage; i++) {
    btns.push(i);
  }

  if (startPage !== 1) {
    btns.unshift("...");
    btns.unshift(1);
  }
  if (endPage !== totalPage) {
    btns.push("...");
    btns.push(totalPage);
  }

  return btns;
};

export default render;
