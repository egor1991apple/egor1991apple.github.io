exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path.match(/^\/routes/)) {
    page.matchPath = "routes/*"
    // Update the page.
    createPage(page)
  }
}
