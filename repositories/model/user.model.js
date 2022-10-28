
module.exports = (sequelize, DataTypes, Model) => {

    class User extends Model {}

    User.init({
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING
        },
        createdate: {
          type: DataTypes.DATE
        },
        password: {
          type: DataTypes.STRING
        }

        
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'user' // We need to choose the model name
      });
      
      return User;
}