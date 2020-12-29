import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema/index';
import { createServer } from 'http';
const app = express();

app.use(cors());
app.use(compression());
const server = new ApolloServer({
    schema,
    introspection: true
});
server.applyMiddleware({app});
const httpServer = createServer(app);
const PORT = 3000;
httpServer.listen({port: PORT}, () => console.log(`
Hola mundo desde api grapql http://localhost:${PORT}/graphql`));