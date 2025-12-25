/**
 * Fetches users by ID from JSONPlaceholder.
 *
 * @param {Object} args - Arguments object.
 * @param {number} args.id - The ID of the user to fetch.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user objects matching the ID.
 */
const executeFunction = async ({ id }) => {
  const url = new URL('http://jsonplaceholder.org/users');
  url.searchParams.append('id', id);
  try {
    const response = await fetch(url.toString(), {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: `Failed to fetch user by id: ${error instanceof Error ? error.message : String(error)}`
    };
  }
};

/**
 * Tool configuration for fetching a user by ID from JSONPlaceholder.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'get_user_by_id',
      description: 'Fetch a user by their ID from JSONPlaceholder.',
      parameters: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'The ID of the user to fetch.'
          }
        },
        required: ['id']
      }
    }
  }
};

export { apiTool };