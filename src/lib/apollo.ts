import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otcbw018nh01w73b95boid/master',
  cache: new InMemoryCache()
})