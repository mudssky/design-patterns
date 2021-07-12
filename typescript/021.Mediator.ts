interface ChatRoomMediator {
  showMessage(user: User, message: string): void
}

class ChatRoom implements ChatRoomMediator {
  showMessage(user: User, message: string): void {
    const time = new Date().toUTCString()
    const sender = user.getName()
    console.log(`${time}[${sender}]:${message}`)
  }
}

class User {
  protected name: string
  protected chatMediator: ChatRoomMediator
  constructor(name: string, chatMediator: ChatRoomMediator) {
    this.name = name
    this.chatMediator = chatMediator
  }
  getName() {
    return this.name
  }
  send(message: string) {
    this.chatMediator.showMessage(this, message)
  }
}

const mediator = new ChatRoom()

const john = new User('John Doe', mediator)
const jane = new User('Jane Doe', mediator)

john.send('hi,its me')
jane.send('hey!')
