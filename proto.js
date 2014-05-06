function Cat(name, owner)
{
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function()
{
  return "everyone loves " + this.name;
}

Cat.prototype.meow = function()
{
  return "meow"
}

cat1 = new Cat("breakfast", "what's for?")
cat2 = new Cat("cat", "cat lady")
cat2.meow = function() { return "not right meow"}

console.log(cat2.meow())
