
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'presentation' })
};

exports.mobile = function(req, res){
  res.render('mobile', { title: 'presentation' })
};