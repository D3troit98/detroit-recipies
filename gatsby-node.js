exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query GetRecipes {
      allContentfulDetroitRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  result.data.allContentfulDetroitRecipes.nodes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      createPage({
        path: `/${tag}`,
      });
    });
  });
};
 