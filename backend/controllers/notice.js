const Model =require('../models/model')

exports.createNotice = (req, res) => {
  
    const model = new Model({
      author : req.body.author,
      content : req.body.content,
      date : Date.now(),
     
    });
  
    model.save()
      .then(newNotice => res.status(201).json({newNotice}))
      .catch(error => res.status(400).json({ message : error.message }));
  };

  exports.getNotice = (req, res) => {
   
    Model.find().sort({ date: -1 })
    .then(model => res.status(200).json(model))
    .catch(error => res.status(400).json({ message : error.message }));
    
  };