# TanStack Query method: client/server-state cache

TanStack Query is designed for managing **server state** in React: fetching, caching, updating, background refetching, loading states, error states, and synchronization. ([TanStack][2])

### Example: TanStack Query client fetch

```tsx
// app/providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
```

```tsx
// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

```tsx
// features/luxury/useLuxuryData.ts
import { useQuery } from "@tanstack/react-query";

async function fetchLuxuryData() {
  const res = await fetch("/api/luxury");

  if (!res.ok) {
    throw new Error("Failed to load luxury data");
  }

  return res.json();
}

const ONE_DAY = 1000 * 60 * 60 * 24;

export function useLuxuryData() {
  return useQuery({
    queryKey: ["luxury"],
    queryFn: fetchLuxuryData,
    staleTime: ONE_DAY,
    gcTime: ONE_DAY * 2,
  });
}
```

```tsx
// app/luxury/LuxuryClient.tsx
"use client";

import { useLuxuryData } from "@/features/luxury/useLuxuryData";

export function LuxuryClient() {
  const { data, isLoading, error } = useLuxuryData();

  if (isLoading) return <p>Loading luxury...</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <main>
      <h1>Luxury</h1>

      {data.items.map((item: any) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </article>
      ))}
    </main>
  );
}
```

```tsx
// app/luxury/page.tsx
import { LuxuryClient } from "./LuxuryClient";

export default function LuxuryPage() {
  return <LuxuryClient />;
}
```

### What happens?

User opens:

```txt
Home → Luxury → Home
```

With TanStack Query:

```txt
Home data cached with queryKey ["home"]
Luxury data cached with queryKey ["luxury"]
Returning to Home can reuse ["home"] cache
```

So yes, TanStack Query can cache loaded page data automatically **as long as the same `QueryClient` provider stays mounted and the same `queryKey` is used**. TanStack’s official Next.js examples and SSR guides also show hydration/prefetch patterns for Next.js integration. ([TanStack][3])

---

## Chorn Planet recommendation

For your main public pages:

```txt
Home
Luxury
Smart Food
Style
Smart City
Smart Mobility
Story
About
```

Use **simple Next.js server fetching first**.

Example architecture:

```txt
MongoDB / local src/data
        ↓
Server Component page
        ↓
Next.js cache/revalidate
        ↓
SEO-friendly public page
```

Use TanStack Query later for parts like:

```txt
User dashboard
Cart/order status
Line OA order tracking
Admin content management
Search/filter UI
Recommendation refresh
Like/save/favorite
Real-time-ish menu availability
```

The best hybrid architecture:

```txt
Public page initial data       → Next.js Server Component
Interactive client widgets     → TanStack Query
Local UI state                 → useState / Zustand
Global server data cache       → TanStack Query only when needed
```

## Simple rule

Use this:

```txt
Next.js fetch = page content
TanStack Query = interactive changing data
```

For Chorn Planet, I would not load **all pages one time at startup**. Better:

```txt
Load current page first
Cache each page when visited
Optionally prefetch important next pages
Reuse cache when user returns
```

## Important note

TanStack Query cache is usually **browser memory cache**.

So if the user closes the tab/browser, the cache may be gone unless you add persistence.

For normal page navigation:

```txt
Home → Luxury → Home → Luxury
```

Yes, it will reuse the cache.

For browser close and reopen:

```txt
Close browser → Open again
```

It may fetch again unless you use persistent cache.

For Chorn Planet, this setup is good:

```txt
DEFAULT for every pages
Public page data:
staleTime: 1 day
gcTime: 2 days

SPECIAL for case by case per request
Data that changes often:
staleTime: 1–10 minutes

Order/user/admin data:
staleTime: short
refetch more often
```

# Use TanStack with existing ReduxProvider

You can use **TanStack Query together with your existing `ReduxProvider`**.

They are not replacements for each other.

```txt
Redux         = app/client state
TanStack      = server/API/MongoDB data cache
```

For example:

```txt
Redux should keep:
- language
- theme
- UI menu open/close
- selected filters
- modal state
- global app preferences

TanStack Query should keep:
- luxury page data
- home page data
- story data
- MongoDB API results
- menu data from server
- recommendation API results
```

React Redux’s `<Provider>` makes the Redux store available to nested components, while TanStack’s `QueryClientProvider` provides the query client for data fetching and cache management. They can wrap the same app tree together. ([react-redux.js.org][1]) ([tanstack.com][2])

## Recommended ProviderWrapper

```tsx
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
```

## Important improvement in your current code

Your current version does this:

```tsx
const store = dynamicStore(language);
```

That means the store can be recreated whenever `AppProvider` renders.

Better:

```tsx
const store = useMemo(() => dynamicStore(language), [language]);
```

This keeps Redux more stable.

## Provider order

This is fine:

```tsx
<ReduxProvider store={store}>
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
</ReduxProvider>
```

I prefer Redux outside if your query hooks may need Redux values like `language`.

## Example query with language

```tsx
import { useQuery } from "@tanstack/react-query";

async function fetchLuxuryData(language: string) {
  const res = await fetch(`/api/luxury?language=${language}`);

  if (!res.ok) {
    throw new Error("Failed to load luxury data");
  }

  return res.json();
}

export function useLuxuryData(language: string) {
  return useQuery({
    queryKey: ["luxury", language],
    queryFn: () => fetchLuxuryData(language),
  });
}
```

This is important:

```tsx
queryKey: ["luxury", language];
```

Because English Luxury and Thai Luxury should be different cache entries.

## Best architecture for Chorn Planet

```txt
Redux:
language, theme, UI state, selected platform mode

TanStack Query:
Home data, Luxury data, Story data, Smart Food data, MongoDB API data

Next.js Server Components:
SEO-heavy initial public pages
```
