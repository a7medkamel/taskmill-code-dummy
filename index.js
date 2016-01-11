function Code(data) {
  this.manual = data.manual;
};

Code.prototype.run = function(req, res, next) {
  res.send('Hi! I\'m taskmill-code-dummy, the dummy task runner');
};

module.exports = Code;