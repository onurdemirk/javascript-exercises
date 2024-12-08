const palindromes = (item) => {
  let text = item.split(/[\s\.,!?;:()\[\]{}"']+/).join("").toLowerCase();
  let textRev = text.split("").reverse().join("");

  if(text === textRev) {
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;
