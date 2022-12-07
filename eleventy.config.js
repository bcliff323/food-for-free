const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "src/_includes/**/*.webc"
	});
	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addPassthroughCopy("src/css/styles.min.css");

	return {
		// These are all optional, defaults are shown:
		dir: {
			input: "src/",
			includes: "_includes",
			data: "_data",
			output: "_site"
		}
	}
}