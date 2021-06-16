import express from "express";
import fetch from "node-fetch";
import { LiveActivatedChannels } from "types/LiveActivatedChannels";

const app = express();

app.get("/list-of-channels", (req, res) => {
  const extensionId = "u4pv564j7h1cq9bcuf9tk8yohixws4";
  fetch(`https://api.twitch.tv/extensions/${extensionId}/live_activated_channels`, {
      headers: {
        "Client-Id": extensionId
      }
    })
    .then(res => res.json() as Promise<LiveActivatedChannels>)
    .then(data => res.send(data));
});
app.listen(80, () => {
  console.log("Express app is listening");
});
