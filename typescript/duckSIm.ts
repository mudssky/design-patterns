interface FlyBehavior {
  fly(): void
}
class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('i can fly')
  }
}
class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log('i can not fly')
  }
}
class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log('fly with a rocket!!!!!!!')
  }
}

interface QuackBehavior {
  quack(): void
}
class Quack implements QuackBehavior {
  quack(): void {
    console.log('quack!!!')
  }
}

class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('<<Silence>>')
  }
}

abstract class Duck {
  abstract flyBehavior: FlyBehavior
  abstract quackBehavior: QuackBehavior
  abstract display(): void
  performFly(): void {
    this.flyBehavior.fly()
  }
  performQuack(): void {
    this.quackBehavior.quack()
  }
  swim(): void {
    console.log('All ducks float,even decoys')
  }
}
class MallardDuck extends Duck {
  flyBehavior: FlyBehavior = new FlyWithWings()
  quackBehavior: QuackBehavior = new Quack()
  display(): void {
    console.log('this is MallarDuck')
    this.performQuack()
    this.performFly()
    this.swim()
  }
}

class ModelDuck extends Duck {
  flyBehavior: FlyBehavior = new FlyRocketPowered()
  quackBehavior: QuackBehavior = new MuteQuack()
  display(): void {
    console.log('this is model duck')
    this.performQuack()
    this.performFly()
    this.swim()
  }
}
// const duck1 = new TestDuck()
// duck1.performFly()
// duck1.performQuack()
new MallardDuck().display()
new ModelDuck().display()
