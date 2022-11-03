const router = require('express').Router();
const travellersRoutes = require('./travellersRoutes');
const tripsRoutes = require('./tripsRoutes');
const locationsRoutes = require('./locationsRoutes');

router.use('/travellers', travellersRoutes);
router.use('/trips', tripsRoutes);
router.use('/locations', locationsRoutes);

module.exports = router;