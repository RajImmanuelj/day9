const database=require('../database/db')
const express=require('express')
const { response } = require('express')
const router =express.Router()
router.get('/all',()=>{
  try {
    res.json({
      categories:database.categories,
      message:'successfully fetched categories'
      status:"SUCCESS"
    })
  } catch (error) {
    res.json({
      categories:[],
      message:error.message,
      status:"FAILED"
    })
  }
})