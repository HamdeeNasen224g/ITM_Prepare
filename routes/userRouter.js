
const express = require('express');
const UserController = require("../controllers/userController")
const router = require('express').Router();

router.get('/',(req,res)=>{
    res.json({message:"Hello world"})
}) 

router.get('/alluser',UserController.getalluser)

module.exports = router