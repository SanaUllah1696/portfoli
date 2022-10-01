const express = require("express");
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");

const app = express();
const urlencoder = app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {

    //var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;

    const mail = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "18pwcse1696@uetpeshawar.edu.pk",
            pass: "sana1696"
        }

    });

    mail.sendMail
        ({
            from: email,
            to:"18pwcse1696@uetpeshawar.edu.pk",
            subject: subject,
            html: message
        }, (err) => {
            if (err) {
                res.send(err)
            }
            else 
            {
                res.send("Thank You For Sending Me Mail");
            }

        });



});
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("listen on >" + PORT + ":");


});
