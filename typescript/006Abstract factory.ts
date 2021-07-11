interface Door {
  getDescription(): void
}

class WoodenDoor implements Door {
  getDescription(): void {
    console.log('I am a wooden door')
  }
}
class IronDoor implements Door {
  getDescription(): void {
    console.log('i am an iron door')
  }
}

interface DoorFittingExpert {
  getDescription(): void
}

class Welder implements DoorFittingExpert {
  getDescription(): void {
    console.log('i can only fit iron doors')
  }
}
class Carpenter implements DoorFittingExpert {
  getDescription(): void {
    console.log('i can only fit wooden doors')
  }
}
interface DoorFactory {
  makeDoor(): Door
  makeFittingExpert(): DoorFittingExpert
}
class WoodenDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new WoodenDoor()
  }
  makeFittingExpert(): DoorFittingExpert {
    return new Carpenter()
  }
}

class IronDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new IronDoor()
  }
  makeFittingExpert(): DoorFittingExpert {
    return new Welder()
  }
}

const woodenFactory = new WoodenDoorFactory()
const door = woodenFactory.makeDoor()
const expert = woodenFactory.makeFittingExpert()
door.getDescription()
expert.getDescription()
export {}
