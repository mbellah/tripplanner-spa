const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

const Place = db.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.INTEGER
  },
  amenities: {
    type: Sequelize.STRING
  }
});

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'All'
  }
});

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);



module.exports = {db,
  Place,
  Hotel,
  Restaurant,
  Activity};