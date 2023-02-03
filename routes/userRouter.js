//test1111111ff
const express = require('express');
const UserController = require("../controllers/userController")
const router = require('express').Router();

router.get('/',(req,res,next)=>{
     res.render('user');
    // res.send('Hello World');
    // res.json({message:"Hello world"})
}) 

router.get('/header', (req,res,next)=>{
    res.sendFile('layout/header.ejs');
})

router.get('/alluser',UserController.getalluser)

module.exports = router