var Transactions = database.define('Transactions', {
    amount:   { type: sequelize.INTEGER, allowNull: false },
    price:    { type: sequelize.FLOAT,   allowNull: false },
    provider: { type: sequelize.STRING,  allowNull: false }
});

Transactions.sync();

module.exports = Transactions;