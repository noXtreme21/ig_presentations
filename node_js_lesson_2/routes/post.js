module.exports = function(req, res) {
    if (req.query.amount && req.query.price && req.query.provider) {
        transaction = tables.transactions.build();
        transaction.amount   = req.query.amount;
        transaction.price    = req.query.price;
        transaction.provider = req.query.provider;
        transaction.save().success(function(transaction) {
            answer    = req.query;
            answer.id = transaction.id;
            
            io.sockets.emit('newTransaction', answer);
            res.send('OK', 200);
        });
    } else {
        res.send('ERROR', 500);
    }
};