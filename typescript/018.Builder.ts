class Burger {
  protected size: number
  protected cheese = false
  protected pepperoni = false
  protected lettuce = false
  protected tomato = false
  constructor(builder: BurgerBuilder) {
    this.size = builder.size
    this.cheese = builder.cheese
    this.pepperoni = builder.pepperoni
    this.lettuce = builder.lettuce
    this.tomato = builder.tomato
  }
}

class BurgerBuilder {
  size: number
  cheese = false
  pepperoni = false
  lettuce = false
  tomato = false
  constructor(size: number) {
    this.size = size
  }
  addPepperoni() {
    this.pepperoni = true
    return this
  }
  addLettuce() {
    this.lettuce = true
    return this
  }
  addCheese() {
    this.cheese = true
    return this
  }
  addTomato() {
    this.tomato = true
    return this
  }
  build(): Burger {
    return new Burger(this)
  }
}

const burger = new BurgerBuilder(14).addCheese().addPepperoni().build()
