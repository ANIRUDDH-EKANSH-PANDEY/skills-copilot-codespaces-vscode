// Create web server
// Create a Web Server that listens on port 3000
// When you navigate to http://localhost:3000/ in your browser, you should see the text "Hello, World!"
// When you navigate to http://localhost:3000/comments in your browser, you should see the text "This is the comments page."

const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        res.write('This is the comments page.');
        res.end();
    } else {
        res.write('Hello, World!');
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
