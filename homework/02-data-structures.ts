import logger from "./logger";

const TAG = "02-data";

/**
 * Move these consts to a separate file (same as used in 01-functions) and import it.
 *
 * - Create an interface to cover the types of objects this array allows
 * - Convert each of these custom objects in this array to use the objects moved in 01-functions. Create any new constants
 *   for objects not represented there.
 */
const users1 = [
  { name: "John" },
  { name: "James", birthday: "everyday" },
  { name: "Joseph", location: "Houston" }
];

const users2 = [{ name: "Joseph", location: "Houston" }, { name: "John" }];

/**
 * NORMALIZING DATA
 *
 * Take the provided users argument and return an object for each of the users keyed by a lowercase of the user's name.
 * - Use the type created from the step above as the type of the `users` argument
 *
 * Example Input:
 * getUsersByName([{ name: "JACKSON" }])
 *
 * Example Output:
 * { jackson: { name: "JACKSON" }}
 */
function getUsersByName(users) {
  return {};
}

logger(TAG, "getUsersByName", getUsersByName(users1));
logger(TAG, "getUsersByName", getUsersByName(users2));
