// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/kike/workspace/my-personal-web/.cache/dev-404-page.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/kike/workspace/my-personal-web/src/templates/blog-post.js")),
  "component---src-pages-index-js": preferDefault(require("/home/kike/workspace/my-personal-web/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/kike/workspace/my-personal-web/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/kike/workspace/my-personal-web/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/home/kike/workspace/my-personal-web/.cache/json/layout-index.json"),
  "hello-world.json": require("/home/kike/workspace/my-personal-web/.cache/json/hello-world.json"),
  "layout-index.json": require("/home/kike/workspace/my-personal-web/.cache/json/layout-index.json"),
  "my-second-post.json": require("/home/kike/workspace/my-personal-web/.cache/json/my-second-post.json"),
  "layout-index.json": require("/home/kike/workspace/my-personal-web/.cache/json/layout-index.json"),
  "index.json": require("/home/kike/workspace/my-personal-web/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": preferDefault(require("/home/kike/workspace/my-personal-web/.cache/layouts/index.js"))
}