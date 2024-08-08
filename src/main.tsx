import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const quryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={quryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
    </QueryClientProvider>
);
