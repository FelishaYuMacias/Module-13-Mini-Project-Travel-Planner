const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Trip, Traveller } = require('../../models');

router.get('/', (req,res)=>{
    Traveller.findAll({
        include:[Trip]
    }).then(allTravellers=>{
        res.json(allTravellers)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

router.get("/:id", (req,res)=>{
    Traveller.findByPk(req.params.id).then(oneTraveller=>{
        res.json(oneTraveller)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})
router.post("/", (req,res)=>{
    console.log(req.body)
    Traveller.create({
        name:req.body.name,
        email:req.body.email
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

router.delete("/:id", (req,res)=>{
   Traveller.destroy({
    where: {
        id: req.params.id,
    },
   }) .catch((err)=>{
    console.log(err);
    res.status(500).json({err:err});
   })
})

module.exports = router;