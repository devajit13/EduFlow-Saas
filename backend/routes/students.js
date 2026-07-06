const r=require('express').Router();
const c=require('../controllers/studentController');
r.get('/',c.getAll);
module.exports=r;
