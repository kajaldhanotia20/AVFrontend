const express=require('express');
const router=express.Router();
const pool=require('../pool.js');
const bcrypt=require('bcrypt');


router.put("/update_profile",(req,res)=>{
    pool.query("UPDATE user SET first_name=? ,last_name=?,dob=?,phone=?,email=?  where user_name=?",
    [   req.body.first_name,
        req.body.last_name,
        req.body.dob,
        req.body.phone,
        req.body.email,
        req.body.user_name    
    ],
    (err,result)=>{
        if(err)
        res.send({message:"profileupdate_unsuccessfull"});
        else
        res.send({message:"profileupdate_successfull"});    
    }
    );
});

module.exports=router;