//test
const express = require('express');
const UserController = require("../controllers/userController")
const router = require('express').Router();

router.get('/',(req,res,next)=>{
    res.render('user');
}) 

router.get('/header', (req,res,next)=>{
    res.sendFile('layout/header.ejs');
})

router.get('/footer', (req,res,next)=>{
    res.sendFile('layout/footer.ejs');
})

router.get('/upload',(req,res,next)=>{
    res.render('img');
}) 

router.get('/add',(req,res,next)=>{ 
    res.render('add');
})

router.get('/alluser',UserController.getalluser)

router.post('/insertimg',UserController.uploadimage)

module.exports = router