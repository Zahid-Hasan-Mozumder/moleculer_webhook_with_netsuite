"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],
	settings: {
		port: process.env.PORT || 3000, // Exposed port
		ip: "0.0.0.0", // Exposed IP

		// Global Express middlewares. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Middlewares
		use: [],

		routes: [
			{
				path: "/health",
				whitelist: ["**"],
				use: [],
				mergeParams: true,
				authentication: false,
				authorization: false,
				autoAliases: true,

				aliases: {
					'GET   ': 'health.check'
				},

				callOptions: {},

				bodyParsers: {
					json: {
						strict: false,
						limit: "1MB"
					},
					urlencoded: {
						extended: true,
						limit: "1MB"
					}
				},

				mappingPolicy: "all", // Available values: "all", "restrict"
				logging: true
			},
			{
				path: "/customers",
				whitelist: ["**"],
				use: [],
				mergeParams: true,
				authentication: false,
				authorization: false,
				autoAliases: true,

				aliases: {
					'GET   ': 'customer.getAll'
				},

				callOptions: {},

				bodyParsers: {
					json: {
						strict: false,
						limit: "1MB"
					},
					urlencoded: {
						extended: true,
						limit: "1MB"
					}
				},

				mappingPolicy: "all", // Available values: "all", "restrict"
				logging: true
			},
			{
				path: "/items",
				whitelist: ["**"],
				use: [],
				mergeParams: true,
				authentication: false,
				authorization: false,
				autoAliases: true,

				aliases: {
					'GET   ': 'item.getAll'
				},

				callOptions: {},

				bodyParsers: {
					json: {
						strict: false,
						limit: "1MB"
					},
					urlencoded: {
						extended: true,
						limit: "1MB"
					}
				},

				mappingPolicy: "all", // Available values: "all", "restrict"
				logging: true
			},
			{
				path: "/netsuite",
				whitelist: ["**"],
				use: [],
				mergeParams: true,
				authentication: false,
				authorization: false,
				autoAliases: true,

				aliases: {
					'POST  /notify': 'netsuite.notify'
				},
				
				callOptions: {},

				bodyParsers: {
					json: {
						strict: false,
						limit: "1MB"
					},
					urlencoded: {
						extended: true,
						limit: "1MB"
					}
				},

				mappingPolicy: "all", // Available values: "all", "restrict"
				logging: true
			}
		],

		// Do not log client side errors (does not log an error response when the error.code is 400<=X<500)
		log4XXResponses: false,
		// Logging the request parameters. Set to any log level to enable it. E.g. "info"
		logRequestParams: null,
		// Logging the response data. Set to any log level to enable it. E.g. "info"
		logResponseData: null,


		// Serve assets from "public" folder. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Serve-static-files
		assets: {
			folder: "public",
			// Options to `server-static` module
			options: {}
		}
	},

	methods: {}
};
