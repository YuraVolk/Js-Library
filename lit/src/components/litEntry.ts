if (process.env.NODE_ENV === "development") {
	window.sharedInterfacesUrl = "http://localhost:3001";
} else if (location.origin.endsWith(".github.io")) {
	window.sharedInterfacesUrl = `${location.origin}/${location.pathname.slice(1).replace(/\/.+/, "")}/shared`;
} else {
	window.sharedInterfacesUrl = `${location.origin}/shared`;
}
