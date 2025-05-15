import { root } from '@lynx-js/react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Routes, Route } from "react-router";

import { App } from './App.jsx';
import CategoryScreen from "./screens/catScreen.tsx";
import { DetailsScreen } from "./screens/detailsScreen.tsx";

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon-details" element={<CategoryScreen />} />
        <Route path="/details" element={<DetailsScreen />} />
      </Routes>
    </MemoryRouter>
  </QueryClientProvider>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
