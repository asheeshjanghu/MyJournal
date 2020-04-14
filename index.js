const config = require('./config/config').loadConfig();
const restify = require('restify');
const restifyPlugins = require('restify-plugins');
const restifyErrors = require('restify-errors');

const server = restify.createServer({
    name:config.app_name,
    url: config.base_url
});

server.use(restifyPlugins.queryParser({mapParams:true}))
server.use(restifyPlugins.jsonBodyParser({mapParams:true}))
server.use(restifyPlugins.acceptParser(server.acceptable))
server.use(restifyPlugins.fullResponse())


server.listen(config.port, ()=> {
    console.log(`${config.app_name} Listening on ${config.port}`)
    require('./src/route_index').homePage(server);
})
