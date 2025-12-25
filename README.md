# JSONPlaceholder MCP Server

This is a Model Context Protocol (MCP) server generated via Postman. It acts as a bridge between AI agents (like Claude or Gemini) and the JSONPlaceholder API, allowing AI models to fetch and manage mock data in real-time.

---

## Features

- **Post Management**: AI can fetch all posts, retrieve specific posts by ID, and create new posts
- **User Data**: Access to user profiles and information
- **Comment Interaction**: Ability to read comments from the mock database
- **Full MCP Integration**: Built to work seamlessly with any AI tool that supports the Model Context Protocol

---

## Technology Stack

- **Language**: TypeScript / Node.js
- **Protocol**: Model Context Protocol (MCP)
- **API Source**: JSONPlaceholder
- **Tooling**: Generated using Postman MCP Generator

---

## How it Works

This server provides a set of tools that an AI agent can call. When you ask the AI to "Get the latest posts," it uses this MCP server to make a real-world API call to JSONPlaceholder and processes the data for you.

---

## Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Basic understanding of Model Context Protocol

### Setup Instructions

**1. Clone the repository:**
```bash
git clone https://github.com/miramamdoh23/jsonplaceholder-mcp-server.git
cd jsonplaceholder-mcp-server
```

**2. Install dependencies:**
```bash
npm install
```

**3. Build the project:**
```bash
npm run build
```

**4. Start the server:**
```bash
npm start
```

---

## Available Tools

### 1. Get All Posts
Fetches all posts from JSONPlaceholder.

**Usage:**
```typescript
// AI can request: "Show me all posts"
GET /posts
```

**Response:**
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "Post title",
    "body": "Post content"
  }
]
```

### 2. Get Post by ID
Retrieves a specific post by its ID.

**Usage:**
```typescript
// AI can request: "Get post number 5"
GET /posts/{id}
```

**Response:**
```json
{
  "userId": 1,
  "id": 5,
  "title": "Post title",
  "body": "Post content"
}
```

### 3. Create New Post
Creates a new post in the mock database.

**Usage:**
```typescript
// AI can request: "Create a post about AI testing"
POST /posts
```

**Request Body:**
```json
{
  "title": "AI Testing Best Practices",
  "body": "Content about AI testing",
  "userId": 1
}
```

### 4. Get User Data
Fetches user profile information.

**Usage:**
```typescript
// AI can request: "Show me user profile for user 1"
GET /users/{id}
```

### 5. Get Comments
Retrieves comments from posts.

**Usage:**
```typescript
// AI can request: "Show me comments for post 1"
GET /posts/{id}/comments
```

---

## Integration with AI Agents

### Claude Desktop Integration

Add to your Claude Desktop configuration (`claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "jsonplaceholder": {
      "command": "node",
      "args": ["/path/to/jsonplaceholder-mcp-server/build/index.js"]
    }
  }
}
```

### Generic MCP Client Integration
```typescript
import { Client } from '@modelcontextprotocol/sdk/client/index.js';

const client = new Client({
  name: "jsonplaceholder-client",
  version: "1.0.0"
});

await client.connect({
  command: "node",
  args: ["./build/index.js"]
});
```

---

## Project Structure
```
jsonplaceholder-mcp-server/
│
├── src/
│   ├── index.ts              # Main server entry point
│   ├── tools/                # MCP tool definitions
│   │   ├── posts.ts         # Post management tools
│   │   ├── users.ts         # User data tools
│   │   └── comments.ts      # Comment tools
│   └── utils/               # Helper functions
│       └── api-client.ts    # JSONPlaceholder API client
│
├── build/                    # Compiled JavaScript output
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

---

## Example Use Cases

### 1. Content Analysis
**AI Request:** "Analyze the sentiment of all posts"

The MCP server fetches all posts, and the AI processes the content to provide sentiment analysis.

### 2. User Research
**AI Request:** "Find all posts by user 3"

The server retrieves user data and filters posts accordingly.

### 3. Comment Management
**AI Request:** "Show me the most recent comments on post 10"

The server fetches comments and presents them to the AI for further processing.

### 4. Data Generation
**AI Request:** "Create 5 sample blog posts about technology"

The AI uses the server to create multiple posts with generated content.

---

## API Reference

### Base URL
```
https://jsonplaceholder.typicode.com
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /posts | Get all posts |
| GET | /posts/{id} | Get specific post |
| POST | /posts | Create new post |
| GET | /users | Get all users |
| GET | /users/{id} | Get specific user |
| GET | /comments | Get all comments |
| GET | /posts/{id}/comments | Get post comments |

---

## Development

### Running in Development Mode
```bash
npm run dev
```

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

### Building for Production
```bash
npm run build
```

---

## Configuration

### Environment Variables

Create a `.env` file in the root directory:
```env
# API Configuration
API_BASE_URL=https://jsonplaceholder.typicode.com
PORT=3000

# MCP Configuration
MCP_SERVER_NAME=jsonplaceholder
MCP_VERSION=1.0.0

# Logging
LOG_LEVEL=info
```

---

## Skills Demonstrated

- **Model Context Protocol**: Implementation of MCP for AI agent integration
- **API Integration**: RESTful API communication with JSONPlaceholder
- **TypeScript Development**: Type-safe code with modern TypeScript features
- **Tool Design**: Creating AI-usable tools with clear interfaces
- **Documentation**: Comprehensive API and usage documentation
- **Testing**: Unit and integration testing for MCP tools
- **AI Agent Development**: Building bridges between AI and external services

---

## Troubleshooting

### Common Issues

**Issue: Server not starting**
```bash
# Solution: Check Node.js version
node --version  # Should be 18+

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue: Connection timeout**
```bash
# Solution: Check network connectivity
curl https://jsonplaceholder.typicode.com/posts

# Verify server is running
npm run build && npm start
```

**Issue: Tool not recognized by AI**
```bash
# Solution: Verify MCP configuration
# Check claude_desktop_config.json has correct path
# Restart Claude Desktop after changes
```

---

## Future Enhancements

- Add support for PUT and DELETE operations
- Implement caching for improved performance
- Add rate limiting and error handling
- Support for additional JSONPlaceholder endpoints
- WebSocket support for real-time updates
- Authentication and authorization layer
- Metrics and monitoring dashboard

---

## Use Cases

This MCP server is ideal for:

- **AI Assistant Development**: Building AI tools that need access to mock data
- **Testing AI Integrations**: Testing MCP implementations with reliable mock APIs
- **Educational Projects**: Learning Model Context Protocol development
- **Prototype Development**: Quick prototyping of AI-powered applications
- **API Testing**: Automated testing of AI agent API interactions

---

## Related Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [JSONPlaceholder API Documentation](https://jsonplaceholder.typicode.com/)
- [Postman MCP Generator](https://www.postman.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

## Author

**Mira Mamdoh Yousef Mossad**  
AI QA Engineer | MCP Developer

**Specializing in**:
- Model Context Protocol Development
- AI Agent Integration
- API Testing & Validation
- TypeScript Development

**Connect**:
- Email: miramamdoh10@gmail.com
- LinkedIn: [linkedin.com/in/mira-mamdoh-a9aa78224](https://www.linkedin.com/in/mira-mamdoh-a9aa78224)
- GitHub: [github.com/miramamdoh23](https://github.com/miramamdoh23)

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Acknowledgments

Built to demonstrate Model Context Protocol implementation and AI agent integration using Postman MCP Generator and JSONPlaceholder API.

---

**Note:** This is a mock data server for demonstration and testing purposes. For production use, replace JSONPlaceholder with your actual API endpoints.

For questions or issues, please open an issue on GitHub or contact the maintainer.
