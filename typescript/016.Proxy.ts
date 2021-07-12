interface Door {
  open(): void
  close(): void
}

class LabDoor implements Door {
  open(): void {
    console.log('opening the lab door')
  }
  close(): void {
    console.log('closing the lab door')
  }
}

class SecuredDoor {
  protected door: Door
  protected password = '123456'
  constructor(door: Door) {
    this.door = door
  }
  open(password: string) {
    if (this.authenticate(password)) {
      this.door.open()
    } else {
      console.log('No,you cant open this door')
    }
  }

  authenticate(passwords: string) {
    return this.password == passwords
  }
  close() {
    this.door.close()
  }
}

const door = new SecuredDoor(new LabDoor())

door.open('1234567')
door.open('123456')
door.close()
