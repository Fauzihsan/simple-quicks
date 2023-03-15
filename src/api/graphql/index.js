import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
// import CONST from "../../utils/constants";

const httpLink = new HttpLink({
  uri: "https://simpul-challange.hasura.app/v1/graphql",
  // uri: CONST.BASE_URL,
  headers: {
    "x-hasura-admin-secret": "28PdWAm3V7rsXWaU9Z8Pe3drkIIKTk9FUVPfOqjZsbFMa91ktY9hpVAJIBeB0g2h",
    // "x-hasura-admin-secret": CONST.API_KEY,
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://simpul-challange.hasura.app/v1/graphql",
  // uri: CONST.BASE_URL_WS,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": "28PdWAm3V7rsXWaU9Z8Pe3drkIIKTk9FUVPfOqjZsbFMa91ktY9hpVAJIBeB0g2h",
        // "x-hasura-admin-secret": CONST.API_KEY,
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
