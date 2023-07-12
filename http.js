const proxyUrl = "http://user:pass@host:port";
const { HttpsProxyAgent } = require("https-proxy-agent");
const https = require("node:https");

const agent = new HttpsProxyAgent(proxyUrl);
https.get("https://ipinfo.io/json", { agent }, (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});