const setDateFormat = (date) => {
  let newStr = date.split(".");
  newStr = newStr[0].split("T");
  return newStr.join(" ");
};
export default setDateFormat;
