interface Animal {
  accept(operation: AnimalOperation): void
}

interface AnimalOperation {
  visitMonkey(monkey: Monkey): void
  visitLion(lion: Lion): void
  visitDolphin(dolphin: Dolphin): void
}

class Monkey implements Animal {
  shout() {
    console.log('Ooh oo aa aa!')
  }
  accept(operation: AnimalOperation) {
    operation.visitMonkey(this)
  }
}

class Lion implements Animal {
  accept(operation: AnimalOperation): void {
    operation.visitLion(this)
  }
  roar() {
    console.log('Roaaar!')
  }
}
class Dolphin implements Animal {
  accept(operation: AnimalOperation): void {
    operation.visitDolphin(this)
  }
  speak() {
    console.log('Tuut tuttu tuutt')
  }
}

class Speak implements AnimalOperation {
  visitMonkey(monkey: Monkey): void {
    monkey.shout()
  }
  visitLion(lion: Lion): void {
    lion.roar()
  }
  visitDolphin(dolphin: Dolphin): void {
    dolphin.speak()
  }
}

const monkey = new Monkey()
const lion = new Lion()
const dolphin = new Dolphin()
const speak = new Speak()
monkey.accept(speak)
lion.accept(speak)
dolphin.accept(speak)
export {}
