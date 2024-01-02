if (process.env.NODE_ENV === "development") {
    window.sharedInterfacesUrl = "http://localhost:3001";
} else {
    window.sharedInterfacesUrl = `${location.origin}/shared`;
}
