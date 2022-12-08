const contentful = require("contentful");
const slugify = require("slugify");

const client = contentful.createClient({
	space: process.env.CTFL_SPACE,
	accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = async () => {
	return client.getEntries({ content_type: 'recipe', order: 'sys.createdAt' })
		.then(function (response) {
			return response.items.map(recipe => ({
				tags: recipe.metadata.tags.map(t => t.sys.id),
				url: `/recipe/${slugify(recipe.fields.title).toLowerCase()}`,
				id: recipe.sys.id,
				createdAt: recipe.sys.createdAt,
				updatedAt: recipe.sys.updatedAt,
				title: recipe.fields.title,
				author: recipe.fields.author,
				description: recipe.fields.description,
				ingredients: recipe.fields.ingredients,
				steps: recipe.fields.steps
			}));
		}).catch(console.error);
};