const path = require(`path`)
const fs = require("fs")
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const pageData = JSON.parse(
    fs.readFileSync("./content/demo.json", { encoding: "utf-8" })
  )
  const blogPostTemplate = path.resolve(`src/templates/index.jsx`)

  createPage({
    path: "demo",
    component: blogPostTemplate,
    context: { str: "hello world" },
  })
}
