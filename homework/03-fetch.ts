import logger from "./logger";

const TAG = "03-fetch";

/**
 * Update the function to load the JSON below and return the results:
 *
 * https://jsonplaceholder.typicode.com/albums
 *
 * - Log the total objects in the array
 */

function loadAlbums() {}

/**
 * Update the function to load the JSON below and return the results:
 *
 * https://jsonplaceholder.typicode.com/albums/1
 *
 * - Log the result when called
 */

function loadAlbumById() {}

/**
 * Update the function to load the JSON below and return the results:
 *
 * https://jsonplaceholder.typicode.com/posts/1/comments
 *
 * - Log the total objects in the array
 */

function loadPostComments() {}

/**
 * Update the function to load the JSON below and return normalized, grouped results by post id:
 *
 * https://jsonplaceholder.typicode.com/comments
 *
 * - Log the total objects in the array
 *
 * Example Return:
 *
 * {
 *   2: [ // this is the post id
 *    {id: 1}, // this is a comment
 *    {id: 2}, // this is a comment
 *    {id: 3} // this is a comment
 *   ],
 *   23: [ // this is the post id
 *    {id: 19}, // this is a comment
 *    {id: 31}, // this is a comment
 *    {id: 54} // this is a comment
 *   ],
 * }
 */

function loadCommentsAndNormalize() {}
