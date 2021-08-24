const nameInverter = function (name) {
  if (name === undefined) 
    return undefined;
  
  name = name.trim(); /* trim all starting and ending empty spaces */
  let nameArr = name.split(" ");  /* Split the string into array seprated by space */
  if (name === "") {
    return "";
  }

  if (nameArr.length === 2) {
    return `${nameArr[1]}, ${nameArr[0]}`;
  }
  else
  {
    return name;
  }
};

module.exports = nameInverter;
