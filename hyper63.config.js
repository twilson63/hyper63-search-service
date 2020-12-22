const express = require('@hyper63/app-express')
const minisearch = require('@hyper63/adapter-minisearch')

module.exports = {
  app: express,
  adapters: [{ port: 'search', plugins: [minisearch()]}]
}
