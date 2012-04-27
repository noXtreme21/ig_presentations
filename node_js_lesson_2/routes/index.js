module.exports = function(req, res){
    customStatement = 'SELECT SUM(amount) AS amount, SUM(price) AS price FROM `Transactions`';
    database.query(customStatement, tables.transactions).success(function(sum) {
        tables.transactions.findAll({order: 'id DESC', limit: 10}).success(function(transactions) {
            res.render('index', { title: 'Express', transactions: transactions, sum: sum[0] });
        });
    });
};