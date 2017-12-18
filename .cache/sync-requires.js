// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/kike/workspace/gatsby-starter-dimension/src/templates/blog-post.js")),
  "component---src-pages-index-js": preferDefault(require("/home/kike/workspace/gatsby-starter-dimension/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/kike/workspace/gatsby-starter-dimension/.cache/json/layout-index.json"),
  "hello-world.json": require("/home/kike/workspace/gatsby-starter-dimension/.cache/json/hello-world.json"),
  "layout-index.json": require("/home/kike/workspace/gatsby-starter-dimension/.cache/json/layout-index.json"),
  "my-second-post.json": require("/home/kike/workspace/gatsby-starter-dimension/.cache/json/my-second-post.json"),
  "layout-index.json": require("/home/kike/workspace/gatsby-starter-dimension/.cache/json/layout-index.json"),
  "index.json": require("/home/kike/workspace/gatsby-starter-dimension/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": preferDefault(require("/home/kike/workspace/gatsby-starter-dimension/.cache/layouts/index.js"))
}