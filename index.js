const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

main().then(()=>{
    console.log("connection suscessful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public"))); //this is use to serve or adding the css or js file
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
})


// creating thhe new route for new chat
app.get("/chats/new",(req,res)=>{
res.render("new.ejs");
})

// create route
app.post("/chats",(req,res)=>{
    let {from,msg,to} = req.body;
let newchat = new Chat({
    from:from,
    to:to,
    msg:msg,
    created_at:new Date()
});
// console.log(newchat);
newchat.save().then(res=>{console.log("chat was saved")}).catch(err =>{console.log(err)});
res.redirect("/chats");
});


// Edit route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

// update route
app.put("/chats/:id",async (req,res)=>{
    let{id} = req.params;
    let {msg:newmsg} = req.body;
let updatedchat = await Chat.findByIdAndUpdate(id,{msg:newmsg},{renvalidators:true,new:true});
// console.log(updatedchat);
res.redirect("/chats");
})


app.delete("/chats/:id",async(req,res)=>{
    let{id} = req.params;
let deletedchat = await Chat.findByIdAndDelete(id);
// console.log(deletedchat);
res.redirect("/chats");
})

app.get("/",(req,res)=>{
    res.send("root is working");
})




const port = 8080;
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});