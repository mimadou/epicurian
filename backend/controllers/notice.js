const Thing = require("../models/thing")

exports.createThing = (req , res,next) => {
    delete req.body._id

    const thing = new Thing({
        ...req.body
    });
    thing.save()
    .then(() => res.status(201).json({message : " avis enregistré"}))
    .catch(error => res.status(400).json(error))
    next()
};

exports.getAllThing = (req , res, next) =>{
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json(error))
    next()
  }

exports.getThing =(req , res , next) => {
    res.json({message : "objet crée"})
    next()
}