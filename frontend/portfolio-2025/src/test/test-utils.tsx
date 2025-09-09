// src/test/test-utils.tsx
import { render as rtlRender } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export * from "@testing-library/react";
export const render = (ui: React.ReactElement, options?: any) =>
  rtlRender(ui, { wrapper: Providers, ...options });
