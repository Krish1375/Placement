//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encryption = require("mongoose-encryption");
const path = require("path");

const app = express();

app.use(express.static(__dirname+"/public/"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));



// const url = `mongodb+srv://w35573:6Bwvg22DNsq44ctb@cluster0.qpcavx4.mongodb.net/?retryWrites=true&w=majority`
const url = 'mongodb+srv://krish:Krish_1010@userdb.gq51v1x.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});


const encryptionKey = "ThisIsTheKey.";
userSchema.plugin(encryption, {secret: encryptionKey, encryptedFields: ["password"]});

const User = new mongoose.model("User", userSchema);

app.get("/",function(request, response){  
    response.render("home");
})

app.get("/login",function(request, response){  
    response.sendFile(path.join(__dirname+"/public/LoginPages/signIn.html"));
})

app.get("/register",function(request, response){    
    response.sendFile(path.join(__dirname+"/public/LoginPages/signUp.html"));
})

app.get("/practice", function(request, response){
    response.sendFile(path.join(__dirname+"/public/Practice/index.html"));
})

app.get("/quiz", function(request, response){
    response.sendFile(path.join(__dirname+"/public/Quiz/index.html"));
})

app.get("/learn", function(request, response){
    response.sendFile(path.join(__dirname+"/public/Learn/index.html"));
})

app.get("/community", function(request, response){
    response.sendFile(path.join(__dirname+"/public/Community/index.html"));
})

app.post("/register",function(request, response){    
    const newUser = new User({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    });

    newUser.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("User Registered");
            response.sendFile(path.join(__dirname+"/public/HomePage/index.html"));
        }
    });
})

app.post("/login", function(request, response){
    const username = request.body.username;
    const password = request.body.password;

    User.findOne({email:username}, function(err, foundUser){
        if(err){
            console.log(err);
        }
        else{
            if(foundUser){
                if(foundUser.password === password){
                    console.log("User Logged In");
                response.sendFile(path.join(__dirname+"/public/HomePage/index.html"));
                }
                else{
                    console.log("Wrong Password");
                }
            }
        }
    });
})

app.get("/dashboard",function(request, response){    
    response.sendFile(path.join(__dirname+"/public/HomePage/index.html"));
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

