/* eslint-disable linebreak-style */
/* eslint-disable semi */
// eslint-disable-next-line import/extensions
export default function appendToEachArrayValue(array, appendString) {
  const modifiedArray = [];
  for (const idx of array) {
    // eslint-disable-next-line no-param-reassign
    modifiedArray.push(appendString + idx);
  }

  return modifiedArray;
}
