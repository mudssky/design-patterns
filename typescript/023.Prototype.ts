class Sheep {
  protected name: string
  protected category: string
  constructor(name: string, category = 'Mountain Sheep') {
    this.name = name
    this.category = category
  }
  setName(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
  setCategory(category: string) {
    this.category = category
  }
  getCategory() {
    return this.category
  }
}

const original = new Sheep('Jolly')
console.log(`name:${original.getName()}, category: ${original.getCategory()}`)

// 需要调用一个深拷贝方法，js原生并没有这种方法
