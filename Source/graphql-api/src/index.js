const { ApolloServer } = require("apollo-server");

const typeDefs = `
  type Query {
    info: String!
  }
`;

const resolvers =
{
	Query:
	{
		info: () => "This is a GraphQL API."
	}
}

const server = new ApolloServer
({
  	typeDefs,
  	resolvers,
});

server.listen().then
(
	( server ) => console.log("Server is running on " + server.url + "...")
);
