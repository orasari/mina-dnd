// server.js
import { ApolloServer, gql } from 'apollo-server';
import { getAllTasks, getColumnNames } from './db.js';

// Define the GraphQL schema
const typeDefs = gql`
  type Query {
    tasks: Tasks
    columns: [String]
  }

  type Tasks {
    ready: [Task]
    in_progress: [Task]
    review: [Task]
    to_do: [Task]
  }

  type Task {
    id: Int
    name: String
    description: String
  }
`;

// Define the resolvers
const resolvers = {
  Query: {
    tasks: () => getAllTasks(),
    columns: () => getColumnNames(),
  },
};

// Create the ApolloServer instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server running at this ${url}`);
});
