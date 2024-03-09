const express = require('express')

const router = express.Router();

const noticeCtrl = require ('../controllers/notice.js')


router.get('/', noticeCtrl.getNotice);
  
  router.post('/', noticeCtrl.createNotice );

module.exports= router;