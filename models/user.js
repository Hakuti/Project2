// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The gamer_tag cannot be null, and must be a proper gamer_tag before creation
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scores: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, 
  
  {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    instanceMethods: {
      // validPassword: function(password) {
      //   return bcrypt.compareSync(password, this.password);
      // }
    
    }
  });
  
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  

//   User.prototype.validPassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
// }

 
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // User.hook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(
  //     user.password,
  //     bcrypt.genSaltSync(10),
  //     null
  //   );
  // });
  // User.beforeCreate((user, options) => {
  //     return bcrypt.hashSync(user.password,
  //     bcrypt.genSalt(10),
  //     null).then(hashedPW => {
       
  //      user.password = hashedPW;

  //     })
    

  // });

  return User;
};
