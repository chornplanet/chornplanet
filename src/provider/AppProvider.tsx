// src/component/ProviderWrapper.tsx
"use client";

import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useMemo, useState } from "react";
import { dynamicStore } from "@/provider/redux/store";

const ONE_DAY = 1000 * 60 * 60 * 24;

const AppProvider = ({
  children,
  language,
}: {
  children: ReactNode;
  language: string;
}) => {
  const store = useMemo(() => dynamicStore(language), [language]);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: ONE_DAY,
            gcTime: ONE_DAY * 2,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReduxProvider>
  );
};

export default AppProvider;
