"use client";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/** */
const queryCache = new QueryCache({
  onError: (error) => {
    // TODO: Sentry
    console.error("queryCache >> ", error);
  },
});
const mutationCache = new MutationCache({
  onError: (error) => {
    // TODO: Sentry
    console.error("mutationCache >> ", error);
  },
});

const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {},
  },
});

const ReactQueryProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NODE_ENV === "development"}
      />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
