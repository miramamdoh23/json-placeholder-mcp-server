/**
 * Creates a new post in JSONPlaceholder.
 *
 * @param {Object} args - The post data.
 * @param {number} args.id - The ID of the post.
 * @param {string} args.slug - The slug of the post.
 * @param {string} args.url - The URL of the post.
 * @param {string} args.title - The title of the post.
 * @param {string} args.content - The content of the post.
 * @param {string} args.image - The image URL of the post.
 * @param {string} args.thumbnail - The thumbnail URL of the post.
 * @param {string} args.status - The status of the post.
 * @param {string} args.category - The category of the post.
 * @param {string} args.publishedAt - The published date of the post.
 * @param {string} args.updatedAt - The updated date of the post.
 * @param {number} args.userId - The user ID associated with the post.
 * @returns {Promise<Object>} - A promise that resolves to the created post object.
 */
const executeFunction = async ({
  id,
  slug,
  url,
  title,
  content,
  image,
  thumbnail,
  status,
  category,
  publishedAt,
  updatedAt,
  userId
}) => {
  const apiUrl = 'http://jsonplaceholder.org/posts';
  const body = {
    id,
    slug,
    url,
    title,
    content,
    image,
    thumbnail,
    status,
    category,
    publishedAt,
    updatedAt,
    userId
  };
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: `Failed to create post: ${error instanceof Error ? error.message : String(error)}`
    };
  }
};

/**
 * Tool configuration for creating a new post in JSONPlaceholder.
 * @type {Object}
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'create_post',
      description: 'Create a new post in JSONPlaceholder.',
      parameters: {
        type: 'object',
        properties: {
          id: { type: 'integer', description: 'The ID of the post.' },
          slug: { type: 'string', description: 'The slug of the post.' },
          url: { type: 'string', description: 'The URL of the post.' },
          title: { type: 'string', description: 'The title of the post.' },
          content: { type: 'string', description: 'The content of the post.' },
          image: { type: 'string', description: 'The image URL of the post.' },
          thumbnail: { type: 'string', description: 'The thumbnail URL of the post.' },
          status: { type: 'string', description: 'The status of the post.' },
          category: { type: 'string', description: 'The category of the post.' },
          publishedAt: { type: 'string', description: 'The published date of the post.' },
          updatedAt: { type: 'string', description: 'The updated date of the post.' },
          userId: { type: 'integer', description: 'The user ID associated with the post.' }
        },
        required: [
          'id',
          'slug',
          'url',
          'title',
          'content',
          'image',
          'thumbnail',
          'status',
          'category',
          'publishedAt',
          'updatedAt',
          'userId'
        ]
      }
    }
  }
};

export { apiTool };