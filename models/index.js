const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/trips', {logging: true});

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
    type: Sequelize.ARRAY,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

const Hotel = db.define('hotel', {
  name: {
    type: Seqelize.STRING,
    allowNull: false
  },
  num_starts: {
    type: Sequelize.ENUM,
    values: [1, 2, 3, 4, 5]
  },
  amenities: {
    type: Sequelize.ARRAY,
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
    defaultValue: 'all ages'
  }
});

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.ARRAY,
  },
  price: {
    type: Seqelize.ENUM,
    values: [1, 2, 3, 4, 5]
  }
});
