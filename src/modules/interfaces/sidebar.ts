export const isLocalhostEnvironment = () => {
    if (process.env.NODE_ENV === "development") {
        return window.location.hostname === "localhost";
    }

    return false;
};


export interface SidebarConfiguration {
    activeLink: string;
}
