import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "../../../components/reactEntry";
const Page = React.lazy(() => import("./Page"));

const root = createRoot(document.getElementById("app") ?? document.documentElement);
root.render(
	<React.StrictMode>
		<Suspense>
			<Page />
		</Suspense>
	</React.StrictMode>
);
