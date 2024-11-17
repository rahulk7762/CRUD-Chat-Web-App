const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection suscessful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from:"Neha",
        to:"Reshmi",
        msg:"Hii,reshmi how are you",
        created_at: new Date()
        },
        {
            from:"Rahul",
            to:"Rohit",
            msg:"hii, how is your going board and jee mains preparation",
            created_at: new Date()
            },
            {
                from:"Mohit",
                to:"Vickey",
                msg:"if you will go outside at anytime please bring me something for drinking",
                created_at: new Date()
                },
                {
                    from:"Apoorve",
                    to:"Rahul",
                    msg:"Hey rahul vickey has filled the worng name and age also",
                    created_at: new Date()
                    },
                    {
                        from:"Sonu",
                        to:"Kaushal",
                        msg:"kaushal if u will come to the pankaj's ceremony please bring my bike for sure bcz i have to do little work",
                        created_at: new Date()
                        },
                        {
                            from:"Aditya",
                            to:"Raunak",
                            msg:"hello Raunak how are you i willl bring some choclates and biscuits for you when i came back to Bhinndi",
                            created_at: new Date()
                            },
                            {
                                from:"Nitish",
                                to:"Sandeeep",
                                msg:"whenever you will come over there come with my charger ",
                                created_at: new Date()
                                },
                                {
                                    from:"pankaj",
                                    to:"Karan",
                                    msg:"come with some rupees over there and i will reach out you",
                                    created_at: new Date()
                                    }
];

Chat.insertMany(allchats)
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });