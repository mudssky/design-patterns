interface Lion {
  roar(): void
}

class AfricanLion implements Lion {
  roar(): void {
    console.log('aouuuuuuuu!')
  }
}
class AsianLion implements Lion {
  roar(): void {
    console.log('aooooooooooo!')
  }
}

class Hunter {
  hunt(lion: Lion) {
    lion.roar()
  }
}

class WildDog {
  bark(): void {
    console.log('wang!wang!wang!')
  }
}

class WildDogAdapter implements Lion {
  protected dog
  constructor(dog: WildDog) {
    this.dog = dog
  }
  roar(): void {
    this.dog.bark()
  }
}

const wildDog = new WildDog()
const wildDogAdapter = new WildDogAdapter(wildDog)
const hunter = new Hunter()
hunter.hunt(wildDogAdapter)
