const express = require('express');

const router = express.Router();

const noticeCtrl = require('../controllers/notice')

router.post(noticeCtrl.createThing)

router.get(noticeCtrl.getAllThing)

router.use(noticeCtrl.getThing)


module.exports = router;