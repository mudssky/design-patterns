export {}
// 饮料
abstract class Beverage {
  description: string = 'Unknow Beverage'
  getDescription(): string {
    return this.description
  }
  abstract cost(): number
}

// 调料装饰器
abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string
}

// 浓咖啡
class Espresso extends Beverage {
  constructor() {
    super()
    this.description = 'Espresso'
  }
  cost(): number {
    return 1.99
  }
}
// 混搭
class HouseBlend extends Beverage {
  cost(): number {
    return 0.89
  }
  constructor() {
    super()
    this.description = 'HouseBlend'
  }
}
// 摩卡咖啡
class Mocha extends CondimentDecorator {
  beverage: Beverage
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }
  getDescription(): string {
    return this.beverage.getDescription()
  }
  cost(): number {
    return 0.2 + this.beverage.cost()
  }
}
// 奶油
class Whip extends CondimentDecorator {
  beverage: Beverage
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }
  getDescription(): string {
    return this.beverage.getDescription()
  }
  cost(): number {
    return 0.12 + this.beverage.cost()
  }
}
const beverage = new Espresso()
console.log(beverage.getDescription())

let beverage2 = new HouseBlend()
beverage2 = new Mocha(beverage2)
beverage2 = new Whip(beverage2)

console.log(beverage2.getDescription())
console.log(beverage2.cost())
