const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        hooks: {
            beforeCreate: async (user) => {
                // Hash the password before saving the user
                user.password = await bcrypt.hash(user.password, 10);
            }
        }
    });

    // Method to validate password
    User.prototype.validPassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    };

    return User;
};