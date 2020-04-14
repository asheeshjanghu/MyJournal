const fs = require("fs");
const jsonSchema = require("jsonschema");

const Validator = new jsonSchema.Validator();

const app_env = process.env.APPENV;
let config;

const schema = {
    "type": "object",
    "properties": {
        "app_name": {"type": "string"},
        "port": {"type": "number"},
        "base_url": {"type": "string"},
    },
    "required": ["app_name", "port", "base_url"]
};

function load() {
    let data = fs.readFileSync(`./config/${app_env}/config.json`, 'utf8');
    config = JSON.parse(data);
    let validatorResult = Validator.validate(config, schema);
    if (validatorResult.valid) {
        console.log("Successfully read the config");
        return config;
    } else {
        console.log("Please check the config file.", validatorResult.errors[0]);
    }
}

module.exports = {
    loadConfig: ()=> {
        if (!config) {
            return load()
        } else {
            return config;
        }
    }
}
