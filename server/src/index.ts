import { 
  createServer,
} from 'http';

const {
	POSTGRES_URL,
	SESSIONS_KEY,
	REDIS_URL,
	SECURE,
	HOST,
	PORT,
} = process.env

// @ts-ignore
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// @ts-ignore
// TODO: investigate this? Why is it saying HOST should be a number?
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
