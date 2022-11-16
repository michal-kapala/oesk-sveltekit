import { getDefaultHandler, gql } from 'apollo-server-svelte-kit';

const handler = getDefaultHandler(
	gql`
		type Query {
			ping: String!
		}
	`,
	{
		Query: {
			ping: () => 'pong'
		}
	}
);

export const GET = handler;
export const HEAD = handler;
export const POST = handler;