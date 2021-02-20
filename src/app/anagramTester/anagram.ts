export function anagram(str1: string,str2: string){

  // Sort both the strings
  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  // Compare
  return sortedStr1 === sortedStr2;

}
