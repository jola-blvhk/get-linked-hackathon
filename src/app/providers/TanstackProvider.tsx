"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactNode, useState } from "react";

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
export default TanstackProvider;
