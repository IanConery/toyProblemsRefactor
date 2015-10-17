/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
//O(n)Time O(1)Space
let firstNonRepeatedCharacter = string => {
  // TODO: your solution here
  let onlyChar = string[0];
  let check = true;
  for(let i = 1; i < string.length; i++){
    if(check === false){
      onlyChar = string[i];
      check = true;
    }else if(string[i] === onlyChar){
      check = false;
    }
  }
  if(check === true){
    return onlyChar
  }else{
    return -1;
  }
};

