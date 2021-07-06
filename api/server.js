import express from 'express';
import mongoose from 'mongoose';
import Apollo from 'apollo-server-express';
import dotenv from 'dotenv';
import ExpressPlayGround from 'graphql-playground-middleware-express';
import seedData from './seeder';
import RootSchema from './src/graphql/schemas';
import RootResolvers from './src/graphql/resolvers';

const { ApolloServer } = Apollo;

// Convert .env variables to node process.env
dotenv.config();

(async function startServer() {
  const app = express();

  await mongoose.connect(process.env.MONGO_DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new ApolloServer({ typeDefs: RootSchema, resolvers: RootResolvers });

  server.applyMiddleware({ app });

  app.get('/', (req, res) => res.end('Hello World'));
  app.get('/playground', ExpressPlayGround.default({ endpoint: '/graphql' }));

  const PORT = process.env.PORT || 3001;

  // seedData();

  app.listen(PORT, () =>
    console.log(
      `GraphQL Server is running @ http://localhost:${PORT}${server.graphqlPath}`
    )
  );
})();
