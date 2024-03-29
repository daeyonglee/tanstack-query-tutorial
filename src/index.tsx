import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<>Loading...</>}>
				<Products />
			</Suspense>
		),
	},
	{
		path: "/products/:productId",
		element: (
			<Suspense fallback={<>Loading...</>}>
				<ProductDetail />
			</Suspense>
		),
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={new QueryClient()}>
			<ReactQueryDevtools />
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
