let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to the Bcontact model

let Bcontact = require('../models/Bcontact');

//cerating a get route for business contact page -READ operation
router.get('/', (req,res,next)=>{
    Bcontact.find((err, BcontactList)=>{
      if(err)
     {
        return console.error(err);
     }
     else
     {
      //console.log(businesscontactList);  
        
      res.render('Bcontact', {title: 'Bcontact list', BcontactList: BcontactList})

     }
    });
});
module.exports = router;