function Person(userName) {
  this.user = userName;
}

Person.prototype.greeting = function(name) {
  var output = "hello" + name
  return output;
};

exports.personModule = Person;
