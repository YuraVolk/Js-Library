import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "../../../components/reactEntry";
import "../../../global.css";
const Page = React.lazy(() => import("./Page"));
const Header = React.lazy(() => import("../Header"));
const Sidebar = React.lazy(() => import("../Sidebar"));

const root = createRoot(document.getElementById("app") ?? document.documentElement);
root.render(
	<React.StrictMode>
		<Suspense>
			<Header />
		</Suspense>
		<Suspense>
			<Sidebar activeLink="Range Input" />
		</Suspense>
		<Suspense>
			<Page />
		</Suspense>
	</React.StrictMode>
);
