// 灯泡
class Bulb {
  turnOn() {
    console.log('Bulb has been lit')
  }
  turnOff() {
    console.log('be dark')
  }
}

interface Command {
  execute(): void
  undo(): void
  redo(): void
}

class TurnOn implements Command {
  protected bulb: Bulb
  constructor(bulb: Bulb) {
    this.bulb = bulb
  }
  execute(): void {
    this.bulb.turnOn()
  }
  undo(): void {
    this.bulb.turnOff()
  }
  redo(): void {
    this.execute()
  }
}
class TurnOff implements Command {
  protected bulb: Bulb
  constructor(bulb: Bulb) {
    this.bulb = bulb
  }
  execute(): void {
    this.bulb.turnOff()
  }
  undo(): void {
    this.bulb.turnOn()
  }
  redo(): void {
    this.execute()
  }
}

class RemoteControl {
  submit(command: Command) {
    command.execute()
  }
}

const bulb = new Bulb()

const turnOn = new TurnOn(bulb)
const turnOff = new TurnOff(bulb)

const remote = new RemoteControl()
remote.submit(turnOn)
remote.submit(turnOff)
