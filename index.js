//importing express packages
const express = require("express");
// instantianting a new express server
const app = express();
//importing sequelize
const sequelize = require('./config/connection')
// selecting network port
const PORT = process.env.PORT || 3000;

		
//middle ware to serve static assets
app.use(express.static("public"));
		
//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
		
// variable to link to controller js - only use if seperating get,post requests
const controller  = require("./controllers/index")
app.use("/api",controller);
		
		
// GET reuquest to /, serves html page
// app.get("/", (req, res) => {
// 		  res.sendFile(path.join(__dirname, "./views/index.html"));
// 		});
		
		
// catch all for all unhandled routes
app.get("*", (req, res) => {
		  res.send("No such page");
		});
		
//tells my server where to looks for requests
sequelize.sync({force:true}).then(()=> {
    app.listen(PORT, () => console.log(`listening on port ${PORT}!`)); 
});