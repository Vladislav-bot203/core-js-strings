function getStringLength(value) {
  let len = null;
  if (value === undefined || value === null) {
    len = 0;
  } else {
    len = value.length;
  }
  return len;
}
function isString(value) {
  const answer = typeof value === 'string' || value instanceof String;
  return answer;
}
function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}
function getFirstChar(value) {
  return value.charAt(0) || '';
}
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}
function removeLeadingWhitespaces(value) {
  return value.trimStart();
}
function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}
function repeatString(str, times) {
  let answer = null;
  if (times < 0) {
    answer = '';
  } else {
    answer = str.repeat(times);
  }
  return answer;
}
function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  let result = null;
  if (index === -1) {
    result = str;
  } else {
    result = str.slice(0, index) + str.slice(index + value.length);
  }
  return result;
}
function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  let result = null;
  if (index === -1) {
    result = str;
  } else {
    result = str.slice(0, index) + str.slice(index + value.length);
  }
  return result;
}
function sumOfCodes(str) {
  let sum = 0;
  if (str !== undefined && str !== null && str.length !== 0) {
    for (let i = 0; i < str.length; ) {
      sum += str.charCodeAt(i);
      i += 1;
    }
  }
  return sum;
}
function startsWith(str, substr) {
  return str.startsWith(substr);
}
function endsWith(str, substr) {
  return str.endsWith(substr);
}

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(/* minutes, seconds */) {
  throw new Error('Not implemented');
}
function reverseString(str) {
  const reversedStr = str.split('');
  return reversedStr.reverse().join('');
}
function orderAlphabetically(str) {
  const arrToSort = str.split('');
  return arrToSort.sort().join('');
}
function containsSubstring(str, substring) {
  return str.includes(substring);
}
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const string = str.toLowerCase();
  const vowelsCount = string.split('').reduce((acc, currChar) => {
    if (vowels.includes(currChar)) return acc + 1;
    return acc;
  }, 0);
  return vowelsCount;
}
function isPalindrome(str) {
  return (
    str.toLowerCase().replace(/[ ?!.,]/g, '') ===
    str
      .split('')
      .reverse()
      .join('')
      .toLowerCase()
      .replace(/[ ?!.,]/g, '')
  );
}

/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(/* sentence */) {
  throw new Error('Not implemented');
}
function reverseWords(str) {
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; ) {
    arr[i] = arr[i].split('').reverse().join('');
    i += 1;
  }
  return arr.join(' ');
}
function invertCase(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length; ) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
    i += 1;
  }
  return arr.join('');
}
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
function extractNameFromTemplate(value) {
  return value.split(',')[1].replace(/[!]/g, '').trim();
}
function unbracketTag(str) {
  return str.replace(/[<>]/g, '');
}
function extractEmails(str) {
  let arr = [];
  if (str.includes(';')) {
    arr = str.split(';');
  } else {
    arr[0] = str;
  }
  return arr;
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns playid card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(/* value */) {
  throw new Error('Not implemented');
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
