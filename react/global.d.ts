declare module "*.png" {
	const pathName: string;
	export default pathName;
}

declare module "*.jpg" {
	const pathName: string;
	export default pathName;
}

declare module "*.svg" {
	const pathName: string;
	export default pathName;
}

declare module "*.webp" {
	const pathName: string;
	export default pathName;
}

declare module "*.mp4" {
	const pathName: string;
	export default pathName;
}

declare module "*.module.css" {
	const classes: Record<string, string>;
	export default classes;
}

interface Window {
	sharedInterfacesUrl: string;
}
