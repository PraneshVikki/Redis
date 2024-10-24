const redis = require("redis");
const client = redis.createClient();

client.on("connect", function () {
    console.log("Connection Successful!!");
});

client.on("error", function (err) {
    console.error("Redis connection error: ", err);
});

(async () => {
    try {
        await client.connect();
        console.log("Client is connected!");
        if (client.isOpen) {
            await client.set("Intern", "gfg");
            console.log("Set operation successful!");
            const reply = await client.get("Intern");
            console.log("Get operation result:", reply);
            const ar = await client.get("my");
            console.log(ar)
        } else {
            console.log("Client connection failed!");
        }
    } catch (err) {
        console.error("Failed to connect or perform Redis operations:", err);
    }
})();

console.log("Is client open:", client.isOpen);
