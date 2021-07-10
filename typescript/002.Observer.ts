interface Subject {
  registerObserver(o: Observer): void
  removeObserver(o: Observer): void
  notifyObservers(info: any): void
}

interface Observer {
  update(s: Subject, arg: Object): void
}

class JobInfo {
  protected info: string
  constructor(info: string) {
    this.info = info
  }
  getInfo() {
    return this.info
  }
}

class JobSite implements Subject {
  protected observers: Array<Observer>
  constructor() {
    this.observers = Array<Observer>()
  }
  registerObserver(o: Observer): void {
    this.observers.push(o)
  }
  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o)
    this.observers.splice(index, 1)
  }
  notifyObservers(info: JobInfo): void {
    for (const o of this.observers) {
      o.update(this, info)
    }
  }

  AddJob(info: JobInfo) {
    console.log('招聘网站有新的工作追加了')

    this.notifyObservers(info)
  }
}

class Jiucai implements Observer {
  name: string
  constructor(name: string) {
    this.name = name
  }
  update(s: Subject, arg: JobInfo): void {
    console.log(`${this.name}收到新工作推送，职位是${arg.getInfo()}`)
  }
}

const zibenjia = new JobSite()

const jiucai1 = new Jiucai('生命1号')
const jiucai2 = new Jiucai('脑白金')

zibenjia.registerObserver(jiucai1)
zibenjia.registerObserver(jiucai2)

zibenjia.AddJob(new JobInfo('web前端'))
zibenjia.AddJob(new JobInfo('算法工程师'))
