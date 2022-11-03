const Traveller = require('./Traveller');
const Trip = require('./Trip');
const Location = require('./Location');

Traveller.hasMany(Trip);
Trip.belongsTo(Traveller);

Location.hasMany(Trip),
Trip.belongsTo(Location)

// //many to many
// Location.belongsToMany(Traveller, {through: Trip})
// Trip.belongsToMany

module.exports = { Traveller, Trip, Location };