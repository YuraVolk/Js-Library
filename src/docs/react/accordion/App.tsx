import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => {
	return <h1></h1>;
};

const root = createRoot(document.getElementById('app') ?? document.documentElement);
root.render(<App />);
