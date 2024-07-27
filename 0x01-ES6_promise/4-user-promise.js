/* eslint-disable no-console */

export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
