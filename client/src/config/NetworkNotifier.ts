import { createNetworkStatusNotifier } from "react-apollo-network-status";

const networkNotifier = createNetworkStatusNotifier();

export const link = networkNotifier.link;
export const useNetworkNotifier = networkNotifier.useApolloNetworkStatus;
