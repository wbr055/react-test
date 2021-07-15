const statusColors = ['green', 'yellow', 'red'];
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const getRandomOneOf = arr => arr[arr.length * Math.random() | 0];

/**
 * @typedef {Object} AppObject
 * @property {number} id
 * @property {string} name
 * @property {('green'|'yellow'|'red')} status
 * @property {string} description
 */

/**
 * Creates an Array of AppObjects with random statuses and auto incrementing id
 * @returns {AppObject[]}
 */
const generateAppsWithRandomStatuses = () =>
    [...Array(10)].map((_, i) => ({
        id: i + 1,
        name: `App-${i + 1}`,
        status: getRandomOneOf(statusColors),
        description: loremIpsum
    }));

/**
 * fake an async request
 * @param time
 * @returns {Promise}
 */
const delay = (time = 300) => new Promise(r => setTimeout(r, time));

/**
 * Mock api call for a list of apps
 * @param {undefined|boolean} fail - force reject the promise
 * @returns {(Promise<AppObject[]>|Promise<Error>)}
 */
export const getApps = async (fail) => {
    await delay();
    if (fail) return Promise.reject(new Error('Oh no something went wrong!'));
    return generateAppsWithRandomStatuses();
}

