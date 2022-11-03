const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Trip, Traveller } = require('../../models');

module.exports = router;