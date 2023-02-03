//test
const express = require('express');
const UserController = require("../controllers/userController");
const { log } = require('console');
const router = require('express').Router();

router.get('/',(req,res,next)=>{
    res.render('user');
    // res.send('Hello World');
    // res.json({message:"Hello world"})
}) 

router.get('/header', (req,res,next)=>{
    res.sendFile('layout/header.ejs');
})

router.get('/upload',(req,res,next)=>{
    res.render('img');
}) 

router.get('/alluser',UserController.getalluser)
router.get('/test',UserController.getalldata)

router.post('/insertimg',UserController.uploadimage)

module.exports = router