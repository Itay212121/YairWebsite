
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const ejs = require("ejs")
app.set("view engine", "ejs")

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({extended: true}))


app.use(express.static("public"));

var dicOfVideos = {
  "yaniv": "https://cdn.discordapp.com/attachments/787353648576987148/802992043781390356/yaniv.mp4",
  "eli": "https://cdn.discordapp.com/attachments/497113722607632385/806144052633796658/vid.mp4",
  "itay": "https://cdn.discordapp.com/attachments/497113722607632385/804486648037113866/itay.mp4",
  "almog": "https://cdn.discordapp.com/attachments/497113722607632385/805811668306886726/almog.mp4",
  "ilay": "https://cdn.discordapp.com/attachments/496036345794527232/803210270465458217/fd40723a25437780.mp4",
  "nir": "https://cdn.discordapp.com/attachments/520700786188222492/806149944918147142/VID-20210202-WA0069.mp4",
  "levishay": "https://cdn.discordapp.com/attachments/498088517272993792/806154088664006676/WhatsApp_Video_2021-02-02_at_3.27.44_PM.mp4",
  "ariel": "https://cdn.discordapp.com/attachments/750742911389401208/806155920262430800/WhatsApp_Video_2021-02-02_at_15.21.05.mp4",
  "yinon": "https://cdn.discordapp.com/attachments/497113722607632385/808736591240495136/yinon.mp4"
}


app.get("/", (req, res) => {
  res.render("main");
});


app.get("/video/:name", (req, res) => {
    
    console.log(req.params.name)
    res.render("video", {name: req.params.name, video: dicOfVideos[req.params.name]})

  });
  



const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
