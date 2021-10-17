let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to the businessContact model

let businessContact = require('../models/businesscontact');

//cerating a get route for business contact page -READ operation
router.get('/', (req,res,next)=>{
    businessContact.find((err, businessContactList)=>{
      if(err)
     {
        return console.error(err);
     }
     else
     {
      //console.log(businesscontactList);  
        res.render('businesscontact',{title:'Business Contact List', BusinessContactList: businessContactList})

     }
    });
});
module.exports = router;