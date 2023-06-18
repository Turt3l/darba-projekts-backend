import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import typeDefs from './schema.js';
import resolvers from "./resolvers/index.js";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema } from 'graphql-tools';
import { expressMiddleware } from '@apollo/server/express4';
const app = express();
const httpServer = createServer(app);
const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({
    schema: schema,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await serverCleanup.dispose();
                    },
                };
            }
        }
    ]
});
await server.start();
app.use('/', cors(), bodyParser.json(), expressMiddleware(server));
const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql'
});
const serverCleanup = useServer({ schema }, wsServer);
const PORT = 4000;
// Now that our HTTP server is fully set up, we can listen to it.
httpServer.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}/graphql`);
});
