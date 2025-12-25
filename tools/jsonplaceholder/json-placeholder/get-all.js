/**
 * Fetches all comments from JSONPlaceholder.
 *
 * @returns {Promise<Object[]>} - A promise that resolves to an array of comment objects.
 */
const getAllComments = async () => {
  const url = 'http://jsonplaceholder.org/comments';
  try {
    const response = await fetch(url, {
      method: 'GET'
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: `Failed to fetch comments: ${error instanceof Error ? error.message : JSON.stringify(error)}`
    };
  }
};

/**
 * Tool configuration for fetching all comments from JSONPlaceholder.
 * @type {Object}
 */
const apiTool = {
  function: getAllComments,
  definition: {
    type: 'function',
    function: {
      name: 'get_all_comments',
      description: 'Fetches all comments from JSONPlaceholder.',
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  }
};

export { apiTool };