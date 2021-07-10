interface Coffee {
  getCost(): number
  getDescription(): string
}

class SimpleCoffee implements Coffee {
  getCost() {
    return 10
  }
  getDescription() {
    return 'simple coffee'
  }
}

class MilkDecorator implements Coffee {
  protected coffee: Coffee
  protected description: string
  constructor(c: Coffee) {
    this.coffee = c
    this.description = 'milk'
  }
  getCost() {
    return 4 + this.coffee.getCost()
  }
  getDescription() {
    return this.coffee.getDescription() + ' ' + this.description
  }
}
class WhipDecorator implements Coffee {
  protected coffee: Coffee
  protected description: string
  constructor(c: Coffee) {
    this.coffee = c
    this.description = 'whip'
  }
  getCost() {
    return 5 + this.coffee.getCost()
  }
  getDescription() {
    return this.coffee.getDescription() + ' ' + this.description
  }
}
// 香草
class VanillaDecorator implements Coffee {
  protected coffee: Coffee
  protected description: string
  constructor(c: Coffee) {
    this.coffee = c
    this.description = 'vanilla'
  }
  getCost() {
    return 3 + this.coffee.getCost()
  }
  getDescription() {
    return this.coffee.getDescription() + ' ' + this.description
  }
}

const simpleCoffee = new SimpleCoffee()
console.log(simpleCoffee.getDescription())
console.log(simpleCoffee.getCost())

const milkCoffee = new MilkDecorator(simpleCoffee)
console.log(milkCoffee.getDescription())
console.log(milkCoffee.getCost())

const mixCoffee = new VanillaDecorator(
  new MilkDecorator(new WhipDecorator(simpleCoffee))
)

console.log(mixCoffee.getDescription())
console.log(mixCoffee.getCost())
export {}
