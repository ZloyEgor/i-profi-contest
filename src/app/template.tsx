'use client'
import React from "react";
import {QueryClient, QueryClientProvider, useQueryClient} from "@tanstack/react-query";

const PageTemplate = ({children}: { children: React.ReactNode; }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  return (<><QueryClientProvider client={client}>{children}</QueryClientProvider></>)
}

export default PageTemplate;