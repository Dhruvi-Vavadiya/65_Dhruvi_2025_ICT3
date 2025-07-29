const express = require("express");
const bodyParser = require("body-parser");
const validator = require("registration_validation");
const { body } = require("express-validator");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});
app.get("/f", (req, res) => {
    res.render("form");
});

app.post("/submit", (req, res) => {
 
    let errors = [];

    if (!validator.isNonEmptyString(req.body.name)) {
        errors.push({ msg: "First name cannot be empty" });
    }

    if (!validator.isStrongPassword(req.body.password, 6)) {
        errors.push({ msg: "password should not be empty" });
    }

    if (!validator.isValidEmail(req.body.email)) {
        errors.push({ msg: "Invalid email format" });
    }

    if (!validator.isValidMobile(req.body.mobile)) {
        errors.push({ msg: "Invalid mobile number" });
    }

    if (errors.length > 0) {
        console.log(errors);
        //alert("Validation failed: " + JSON.stringify(errors));
        return res.status(422).json({ errors :errors});
    }

    res.send(`Hello ${req.body.name} your account has been created and you User name is ${req.body.email} and mobile number  is ${req.body.mobile} ! Your data is valid.`);
     
   

   
});

app.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
