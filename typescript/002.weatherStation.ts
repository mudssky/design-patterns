interface Subject {
  registerObserver(o: Observer): void
  removeObserver(o: Observer): void
  notifyObservers(): void
}

interface Observer {
  update(temp: number, humidity: number, pressure: number): void
}

interface DisplayElement {
  display(): void
}

class WeatherData implements Subject {
  private observers: Array<Observer>
  private temperature!: number
  private humidity!: number
  private pressure!: number
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
  notifyObservers(): void {
    for (const o of this.observers) {
      o.update(this.temperature, this.humidity, this.pressure)
    }
  }

  measurementsChanged() {
    this.notifyObservers()
  }
  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }
}

class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature!: number
  private humidity!: number
  private weatherData: Subject
  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    this.weatherData.registerObserver(this)
  }
  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp
    this.humidity = humidity
    this.display()
  }

  display(): void {
    console.log(
      `Current conditionsc: ${this.temperature} F degrees and ${this.humidity}% humidity`
    )
  }
}

class StatisticsConditionDisplay implements Observer, DisplayElement {
  private pressure!: number
  private weatherData: Subject
  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    this.weatherData.registerObserver(this)
  }
  update(temp: number, humidity: number, pressure: number): void {
    this.pressure = pressure
    this.display()
  }

  display(): void {
    console.log(`Statistics conditionsc: ${this.pressure} pressure`)
  }
}
const wd = new WeatherData()
const ccd = new CurrentConditionDisplay(wd)
const scd = new StatisticsConditionDisplay(wd)
wd.setMeasurements(80, 65, 30.4)
wd.setMeasurements(82, 75, 28.3)
wd.setMeasurements(78, 90, 36.4)

export {}
