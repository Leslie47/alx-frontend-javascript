/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((value) => value);
}
