# n8n Chatbot Integration Setup Guide

## Overview
This guide will help you set up your n8n workflow to work seamlessly with the Mofassir chatbot widget.

## Current Configuration
- **Webhook URL**: `https://n8n.ajamy.tech/webhook-test/b0cfcbc6-2695-49b0-9f93-858fd6eeca81`
- **Method**: POST
- **Content-Type**: application/json

## n8n Workflow Setup

### 1. Webhook Node Configuration
Your webhook node should be configured as follows:

```json
{
  "httpMethod": "POST",
  "path": "webhook-test/b0cfcbc6-2695-49b0-9f93-858fd6eeca81",
  "responseMode": "responseNode",
  "options": {}
}
```

### 2. Expected Request Format
The chatbot sends requests in this format:

```json
{
  "message": "User's message text",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "sessionId": "session-abc123",
  "userId": "user-xyz789",
  "source": "mofassir-website",
  "language": "auto-detect",
  "userAgent": "Mozilla/5.0..."
}
```

### 3. Response Formats Supported
The chatbot can handle multiple response formats:

#### Simple String Response
```json
"Hello! How can I help you today?"
```

#### Object with 'response' field
```json
{
  "response": "Hello! How can I help you today?",
  "metadata": {
    "confidence": 0.95,
    "intent": "greeting"
  }
}
```

#### Object with 'message' field
```json
{
  "message": "Hello! How can I help you today?"
}
```

#### Object with 'text' field
```json
{
  "text": "Hello! How can I help you today?"
}
```

#### Object with 'output' field
```json
{
  "output": "Hello! How can I help you today?"
}
```

#### Object with 'result' field
```json
{
  "result": "Hello! How can I help you today?"
}
```

## Sample n8n Workflow

### Basic Workflow Structure
1. **Webhook Node** - Receives the chat message
2. **Function Node** - Process the message (optional)
3. **AI Chat Node** - Connect to your AI service
4. **Respond to Webhook Node** - Send response back

### Example Function Node Code
```javascript
// Extract message from webhook data
const userMessage = $json.message;
const sessionId = $json.sessionId;
const userId = $json.userId;

// Process message for AI
return {
  json: {
    prompt: userMessage,
    session_id: sessionId,
    user_id: userId,
    context: "You are Mofassir AI Assistant, helping with AI solutions in Arabic and English."
  }
};
```

### Example Response Node
```javascript
// Format AI response for chatbot
const aiResponse = $json.response || $json.text || $json.output;

return {
  json: {
    response: aiResponse,
    timestamp: new Date().toISOString(),
    source: "mofassir-ai"
  }
};
```

## Testing Your Workflow

### 1. Test with curl
```bash
curl -X POST https://n8n.ajamy.tech/webhook-test/b0cfcbc6-2695-49b0-9f93-858fd6eeca81 \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello, can you help me?",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "sessionId": "test-session",
    "userId": "test-user",
    "source": "mofassir-website"
  }'
```

### 2. Expected Response
```json
{
  "response": "Hello! I'm the Mofassir AI Assistant. How can I help you with our AI solutions today?"
}
```

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure your n8n instance allows requests from your domain
   - Add proper CORS headers in your workflow

2. **Authentication Issues**
   - If your n8n instance requires authentication, update the `apiKey` in `src/config/chatbot.ts`

3. **Response Format Issues**
   - The chatbot expects a JSON response
   - Ensure your workflow returns data in one of the supported formats

4. **Timeout Issues**
   - AI processing might take time
   - Consider adding a timeout handler in your workflow

### Debug Mode
To enable debug mode in the chatbot:
1. Open browser console
2. Set: `localStorage.setItem('chatbot-debug', 'true')`
3. Reload the page
4. Check console for detailed logs

## Advanced Configuration

### Adding Authentication
If your n8n webhook requires authentication:

```typescript
// In src/config/chatbot.ts
export const chatbotConfig = {
  apiKey: 'your-api-key-here',
  // ... other config
};
```

### Custom Headers
Add custom headers in the chatbot configuration:

```typescript
// In src/config/chatbot.ts
export const chatbotConfig = {
  customHeaders: {
    'X-Custom-Header': 'value',
    'X-Source': 'mofassir-website'
  },
  // ... other config
};
```

## Performance Optimization

1. **Caching**: Implement response caching in your n8n workflow
2. **Rate Limiting**: Add rate limiting to prevent abuse
3. **Session Management**: Use sessionId for context-aware responses
4. **Error Handling**: Implement proper error responses

## Security Considerations

1. **Input Validation**: Validate all incoming messages in your n8n workflow
2. **Rate Limiting**: Implement rate limiting to prevent spam
3. **Authentication**: Consider adding API key authentication
4. **HTTPS**: Always use HTTPS for webhook URLs
5. **Data Privacy**: Handle user data according to privacy regulations

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify your n8n workflow is active
3. Test the webhook URL directly
4. Check n8n execution logs

For additional support, contact the development team.