const proxyUrl = "http://user:pass@host:port"; // http://user:pass@host:port
const { request, ProxyAgent } = require("undici");

const agent = new ProxyAgent(proxyUrl);
(async () => {
    const res = await request("https://ipinfo.io/json", {
        dispatcher: agent,
    }).then(r => r.body.json()); // RequestAbortedError [AbortError]: Proxy response !== 200 when HTTP Tunneling
    console.log(res); // never gets reached
})();