class KaraTea {}

interface Tea {
  [key: string]: KaraTea
}
interface Order {
  [key: number]: KaraTea
}
class TeaMaker {
  protected availableTea: Tea = {}
  make(preference: string) {
    if (!this.availableTea[preference]) {
      this.availableTea[preference] = new KaraTea()
    }
    return this.availableTea[preference]
  }
}

class Teashop {
  protected orders: Order = {}
  protected teaMaker: TeaMaker
  constructor(teaMaker: TeaMaker) {
    this.teaMaker = teaMaker
  }
  takeOrder(teaType: string, table: number) {
    this.orders[table] = this.teaMaker.make(teaType)
  }
  server() {
    for (const key in this.orders) {
      console.log(`Serving Tea to table#${key} `)
    }
  }
}

const teaMaker = new TeaMaker()
const shop = new Teashop(teaMaker)

shop.takeOrder('less sugar', 1)
shop.takeOrder('more milk', 2)
shop.takeOrder('without sugar', 5)
shop.server()
