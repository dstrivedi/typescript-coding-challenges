import logger from './logger';

import { user, user2 } from './users';

const TAG = '01-functions';

/**
 * Move these consts to a separate file and import it.
 */

// const user = {
//   name: "John"
// };

// const user2 = {
//   name: "James",
//   birthday: "everyday"
// };

/**
 * Convert this function to an arrow function.
 */

const isRandomNumberEven = (): boolean => {
  return Math.round(Math.random() * 100) % 2 === 0;
};

logger(TAG, 'isRandomNumberEven', isRandomNumberEven());

/**
 * Convert this function to an arrow function.
 */

const isValidNameStrict = (name: string): boolean => {
  return name === 'john';
};

logger(TAG, 'isValidNameStrict', isValidNameStrict('John'));
logger(TAG, 'isValidNameStrict', isValidNameStrict('john'));
logger(TAG, 'isValidNameStrict', isValidNameStrict('john '));
logger(TAG, 'isValidNameStrict', isValidNameStrict(' john'));
logger(TAG, 'isValidNameStrict', isValidNameStrict(' john '));

/**
 * Convert this function to an arrow function and make it support the following:
 * - support any case
 * - allow spaces around the name
 *
 * The end result should show true for all logs below it.
 */

const isValidNameLoose = (name: string): any => {
  return name === ' john ';
};

logger(TAG, 'isValidNameLoose', isValidNameLoose('John'));
logger(TAG, 'isValidNameLoose', isValidNameLoose('john'));
logger(TAG, 'isValidNameLoose', isValidNameLoose('john '));
logger(TAG, 'isValidNameLoose', isValidNameLoose(' john'));
logger(TAG, 'isValidNameLoose', isValidNameLoose(' john '));

/**
 * Use `isRandomNumberEven()` to return `user` when the number is even and `null` by default.
 *
 * Add a proper return type to the function to support the shape of the user/user2 objects and support null or undefined.
 */

function getUser() {
  return;
}

logger(TAG, 'getUser', getUser());

/**
 * Use `isRandomNumberEven()` to return `user` when the number is even and a consumer provided argument by default.
 *
 * Add a proper return type to the function to support the shape of the user/user2 objects and support null or undefined.
 */

function getUserOrDefault() {
  return;
}

logger(TAG, 'getUserOrDefault', getUserOrDefault());
// logger(TAG, "getUserOrDefault", getUserOrDefault(user));
// logger(TAG, "getUserOrDefault", getUserOrDefault(user2));
// logger(TAG, "getUserOrDefault", getUserOrDefault(null));
