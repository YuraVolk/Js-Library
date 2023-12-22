import React from "react";
import { createRoot } from 'react-dom/client';
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

const App = () => {
	return <>
		<Header />
		<Sidebar activeLink="Accordion" />
		<main className="main">
			<h1 className="heading">Accordion</h1>
		</main>
	</>;
};

const root = createRoot(document.getElementById('app') ?? document.documentElement);
root.render(<App />);
