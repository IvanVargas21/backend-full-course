# Common HTTP Status Codes

HTTP status codes are standardized responses returned by a server to indicate the outcome of a client's request.

---

## 1xx: Informational Responses
- **100 Continue**: The server has received the request headers, and the client should proceed to send the request body.
- **101 Switching Protocols**: The server is switching protocols as requested by the client (e.g., upgrading to WebSocket).

---

## 2xx: Successful Responses
- **200 OK**: The request was successful. Commonly used for GET requests.
- **201 Created**: The request was successful, and a resource was created. Commonly used for POST requests.
- **204 No Content**: The request was successful, but there is no content to send. Commonly used for DELETE requests.

---

## 3xx: Redirection Responses
- **301 Moved Permanently**: The requested resource has been permanently moved to a new URL.
- **302 Found**: The requested resource has been temporarily moved to a new URL.
- **304 Not Modified**: The resource has not been modified since the last request. Used for caching.

---

## 4xx: Client Error Responses
- **400 Bad Request**: The server cannot process the request due to client error (e.g., invalid input).
- **401 Unauthorized**: The client must authenticate itself to access the resource.
- **403 Forbidden**: The client does not have permission to access the resource.
- **404 Not Found**: The requested resource does not exist.

---

## 5xx: Server Error Responses
- **500 Internal Server Error**: A generic error message indicating that something went wrong on the server.
- **502 Bad Gateway**: The server received an invalid response from an upstream server.
- **503 Service Unavailable**: The server is temporarily unavailable (e.g., due to maintenance or overload).

---

## Example Usage in Express.js

### 200 OK
```javascript
app.get('/users', (req, res) => {
    res.status(200).json({ message: 'Users retrieved successfully' });
});