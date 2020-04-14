const config = require('./config/config').loadConfig();
const restify = require('restify');

const server = restify.createServer({
    name:config.app_name,
    url: config.base_url
});

server.listen(config.port, ()=> {
    console.log(`${config.app_name} Listening on ${config.port}`)
})
