// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load()
require('babel-register')

var server = require("./server")

server.start()