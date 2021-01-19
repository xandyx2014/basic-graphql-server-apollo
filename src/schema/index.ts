import * as typeDefs from './schema.graphql';
import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import resolvers from '../resolvers/resolversMap';
import 'graphql-import-node';

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});
export default schema;