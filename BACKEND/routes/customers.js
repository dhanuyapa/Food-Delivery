const router = require("express").Router();

let Customer = require("../models/Customer");

router.route("/register").post((req,res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone = req.body.phone;
    const email = req.body.email;
    const no = req.body.no;
    const street = req.body.street;
    const  city = req.body.city;
    const country = req.body.country;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    
    
    const newCustomer = new Customer({
        fname,
        lname,
        phone,
        email,
        no,
        street,
        city,
        country,
        password,
        confirmPassword
    });

    newCustomer.save().then(()=>{
        res.json("customer Added")
}).catch((err)=>{
    console.log(err);
})

})
module.exports = router;