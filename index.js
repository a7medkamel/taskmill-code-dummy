function Code(data) {
  this.data = data;
};

Code.prototype.run = function(req, res, next) {
  res.send({
      message : 'Hi! I\'m taskmill-code-dummy, the dummy task runner.'
    , data    : this.data
  });
};

module.exports = Code;