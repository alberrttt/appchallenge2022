const images = [
	require("./one.jpg"),
	require("./two.jpg"),
	require("./three.jpg"),
	require("./four.jpg"),
	require("./five.jpg"),
	require("./six.jpg"),
];
export function random_images() {
	const x = Math.floor(Math.random() * images.length);

	return images[x];
}
