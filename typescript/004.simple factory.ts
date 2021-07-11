interface Door {
  getWidth(): number
  getHeight(): number
}
class WoodenDoor implements Door {
  protected width: number
  protected height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
  getWidth(): number {
    return this.width
  }
  getHeight(): number {
    return this.height
  }
  deescribe() {
    console.log(`width:${this.getWidth()},height:${this.getHeight()}`)
  }
}
class DoorFactory {
  static makeDoor(width: number, height: number): WoodenDoor {
    return new WoodenDoor(width, height)
  }
}

const door = DoorFactory.makeDoor(100, 200)
door.deescribe()
const door2 = DoorFactory.makeDoor(300, 500)
door2.deescribe()
export {}
