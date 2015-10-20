/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

let commonCharacters = (string1, string2) => {
  let str2Hash = {};
  let commonChars = '';
  for(let i = 0; i < string2.length; i++){
    str2Hash[string2[i]] ? str2Hash[string2[i]]++ : str2Hash[string2[i]] = 1;
  }
  for(let i = 0; i < string1.length; i++){
    if(str2Hash[string1[i]]){
      commonChars += string1[i];
    }
  }
  return commonChars;
};
