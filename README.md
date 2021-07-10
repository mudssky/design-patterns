# design-patterns



设计模式的类型

- 创造型 （Creational）

- 结构型（Structural）

- 行为型（Behavioral）



## 创造设计模式

创造型设计模式的关注点是如何实例化一个或是一组关联的对象。

创造型有下面几个例子

- Simple Factory
- Factory Method
- Abstract Factory
- Builder
- Prototype
- Singleton



## 结构设计模式

结构设计模式主要关注对象组合，换句话说，实体如何相互使用。或者另一种解释是，它们有助于回答“如何构建软件组件”





## 行为设计模式

行为设计模式涉及到对象之间的职责分配，和结构模式的不同之处在于，它不仅指定了结构，而且概述了消息传递的模式，换句话说，这有助于回答“如何在软件组织中运行一个行为”。

这里介绍以下几种:

- Chain of Responsibility
- Command
- Iterator
- Mediator
- Memento
- Observer
- Visitor
- Strategy
- State
- Template Method

### 1.策略模式(Strategy)

#### 现实例子

举一个排序的例子，我们首先实现了冒泡排序，但是随着数据量的增长我们发现冒泡排序的效率变得很慢，为此，我们又实现了快速排序处理大数据，但是这个快速排序处理小规模数据的效率比较低，所以为了处理这个问题，我们又实现了一个针对小规模数据的策略，使得在大规模数据上使用快速排序，小规模数据使用冒泡排序。

#### 说人话

策略模式允许您根据情况切换算法或策略

#### typescript example

typescript 给JavaScript添加了更完善的面向对象支持，支持类型和interface

下面是用typescript实现这个排序的例子的代码

```typescript
interface SortStrategy {
  sort(arr: Array<number>): Array<number>
}

class BubbleSortStrategy implements SortStrategy {
  sort(arr: number[]): number[] {
    console.log('do bubble sort')
    return arr
  }
}

class QuickSortStrategy implements SortStrategy {
  sort(arr: number[]): number[] {
    console.log('do quick sort')
    return arr
  }
}

class Sorter {
  sortStrategy: SortStrategy
  constructor(sortStrategy: SortStrategy) {
    this.sortStrategy = sortStrategy
  }
  sort(arr: Array<number>): Array<number> {
    return this.sortStrategy.sort(arr)
  }
}

new Sorter(new BubbleSortStrategy()).sort([9, 2, 4, 3, 5])
new Sorter(new QuickSortStrategy()).sort([9, 2, 4, 3, 5])

```

实际上最后生成es5的代码，里面就没有接口了，

JavaScript的多态和python一样，是通过鸭子类型实现的。

```javascript
"use strict";
var BubbleSortStrategy = /** @class */ (function () {
    function BubbleSortStrategy() {
    }
    BubbleSortStrategy.prototype.sort = function (arr) {
        console.log('do bubble sort');
        return arr;
    };
    return BubbleSortStrategy;
}());
var QuickSortStrategy = /** @class */ (function () {
    function QuickSortStrategy() {
    }
    QuickSortStrategy.prototype.sort = function (arr) {
        console.log('do quick sort');
        return arr;
    };
    return QuickSortStrategy;
}());
var Sorter = /** @class */ (function () {
    function Sorter(sortStrategy) {
        this.sortStrategy = sortStrategy;
    }
    Sorter.prototype.sort = function (arr) {
        return this.sortStrategy.sort(arr);
    };
    return Sorter;
}());
new Sorter(new BubbleSortStrategy()).sort([9, 2, 4, 3, 5]);
new Sorter(new QuickSortStrategy()).sort([9, 2, 4, 3, 5]);
```

下面是按照head first 设计模式，这本书第一个例子实现的鸭子模拟器代码。

使用了策略模式，把给鸭子添加各种行为的代码抽离出来了，使得添加新的行为的代码改动比较小，并且可以动态改变行为。

```typescript
interface FlyBehavior {
  fly(): void
}
class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('i can fly')
  }
}
class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log('i can not fly')
  }
}
class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log('fly with a rocket!!!!!!!')
  }
}

interface QuackBehavior {
  quack(): void
}
class Quack implements QuackBehavior {
  quack(): void {
    console.log('quack!!!')
  }
}

class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('<<Silence>>')
  }
}

abstract class Duck {
  abstract flyBehavior: FlyBehavior
  abstract quackBehavior: QuackBehavior
  abstract display(): void
  performFly(): void {
    this.flyBehavior.fly()
  }
  performQuack(): void {
    this.quackBehavior.quack()
  }
  swim(): void {
    console.log('All ducks float,even decoys')
  }
}
class MallardDuck extends Duck {
  flyBehavior: FlyBehavior = new FlyWithWings()
  quackBehavior: QuackBehavior = new Quack()
  display(): void {
    console.log('this is MallarDuck')
    this.performQuack()
    this.performFly()
    this.swim()
  }
}

class ModelDuck extends Duck {
  flyBehavior: FlyBehavior = new FlyRocketPowered()
  quackBehavior: QuackBehavior = new MuteQuack()
  display(): void {
    console.log('this is model duck')
    this.performQuack()
    this.performFly()
    this.swim()
  }
}

class DuckCall extends Quack {}
// const duck1 = new TestDuck()
// duck1.performFly()
// duck1.performQuack()
new MallardDuck().display()
new ModelDuck().display()
new DuckCall().quack()

```



#### golang example

go语言没有继承，go语言的interface也比较轻量，类似于python和js这样的鸭子类型了，只是多了类型检查而已，编译阶段找不到对应的函数就会报错了。

golang的interface只能包含函数，然后实现这个interface只要实现同样格式的函数就算实现接口。

整体来说还是比较灵活的，比较简洁的。所以一个空接口interface{}所有类型都实现了它，可以用空接口接收所有类型。

```go
package main

import "fmt"

type SortStrategyer interface {
	sort(list []int) []int
}

type BubbleSortStrategy struct {
}

func (b *BubbleSortStrategy) sort(list []int) []int {
	fmt.Println("do bubble sort")
	return list
}

type QuickSortStrategy struct {
}

func (b *QuickSortStrategy) sort(list []int) []int {
	fmt.Println("do quick sort")
	return list
}

type Sorter struct {
	strategy SortStrategyer
}

func (s *Sorter) doSort(list []int) []int {
	return s.strategy.sort(list)
}

func main() {
	testList := []int{4, 5, 3}
	sort1 := Sorter{strategy: &BubbleSortStrategy{}}
	sort1.doSort(testList)
	sort2 := Sorter{strategy: &QuickSortStrategy{}}
	sort2.doSort(testList)
	sort1.strategy = &QuickSortStrategy{}
	sort1.doSort(testList)
}

```

#### dart example

dart 是我用的几种编程语言中语法最接近java的。

typescript也很像java，但是它跟go一样把类型放在变量后面了。

dart的不同之处在于，dart中没有像java一样的interface关键字，dart中每个类都可以当作接口，因此这里我们用了抽象类作为一个接口使用。

```dart
abstract class SortStrategy {
  List<int> sort(List<int> data);
}

class BubbleSortStrategy implements SortStrategy {
  @override
  List<int> sort(List<int> data) {
    print('do bubble sort');
    return data;
  }
}

class QuickSortStrategy implements SortStrategy {
  @override
  List<int> sort(List<int> data) {
    print('do qucik sort');
    return data;
  }
}

class Sorter {
  final SortStrategy sortStrategy;
// datr 构造函数语法糖，只需要在参数列表列出初始化参数，赋值自动帮你实现
  Sorter(this.sortStrategy);

  List<int> doSort(List<int> data) {
    return this.sortStrategy.sort(data);
  }
}

main(List<String> args) {
  var sort1 = Sorter(BubbleSortStrategy());
  sort1.doSort([1, 2, 3]);
  var sort2 = Sorter(QuickSortStrategy());
  sort2.doSort([1, 2, 3]);
}

```



### 2.观察者模式(Observer)

#### 现实例子

也叫做发布订阅模式,这里给出的例子是,求职者订阅了招聘网站的服务,如果有匹配的工作信息,招聘网站会进行推送



### 说人话

建立对象间的依赖关系，使得一个对象的状态发生改变时，所有依赖它的对象都能被通知到。



### 维基百科的描述

观察者模式是一种软件设计模式，在这种模式中，一个称为主体的对象维护一个称为观察者的依赖项列表，并在任何状态更改时自动通知它们(通常通过调用它们的一个方法)。



### typescript example



```typescript
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

```

下面是head first设计模式这本书里面关于气象站和告示板的typescript代码实现

```typescript
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

```





### dart example

dart中Object不想typescript一样可以接受任何其他类。

所以我这里对observer 用了泛型。

```dart
abstract class Observer<T> {
  void update(Subject s, T o);
}

abstract class Subject {
  void registerObserver(Observer o);
  void removeObserver(Observer o);
  void notifyObservers(Object o);
}

class JobInfo {
  late String info;
  JobInfo(this.info);
}

class JobSite implements Subject {
  final List<Observer> observers = [];

  @override
  void registerObserver(Observer o) {
    this.observers.add(o);
  }

  @override
  void removeObserver(Observer o) {
    this.observers.remove(o);
  }

  @override
  void notifyObservers(Object o) {
    for (var item in this.observers) {
      item.update(this, o);
    }
  }

  void addJobInfo(JobInfo j) {
    print('有新的工作信息');
    this.notifyObservers(j);
  }
}

class Jiucai implements Observer<JobInfo> {
  final String name;

  Jiucai(this.name);
  @override
  void update(Subject s, JobInfo o) {
    print("$name收到新的工作推送，职位是${o.info}");
  }
}

main(List<String> args) {
  var zibenjia = JobSite();

  var jiucai1 = Jiucai('李白');
  var jiucai2 = Jiucai('白居易');

  zibenjia.registerObserver(jiucai1);
  zibenjia.registerObserver(jiucai2);
  zibenjia.addJobInfo(JobInfo('AI工程师'));
}

```

### golang example

```go
package main

import "fmt"

type Subject interface {
	registerObserver(o Observer)
	removeObserver(o Observer)
	notifyObservers(s Subject, o interface{})
}

type Observer interface {
	update(s Subject, o interface{})
}

type JobSite struct {
	observers []Observer
}

func (j *JobSite) registerObserver(o Observer) {
	j.observers = append(j.observers, o)
}

func (j *JobSite) removeObserver(o Observer) {
	for i := 0; i < len(j.observers); i++ {
		if o == j.observers[i] {
			j.observers = append(j.observers[:i], j.observers[i+1:]...)
			return
		}
	}
}
func (j *JobSite) notifyObservers(s Subject, o interface{}) {
	for i := 0; i < len(j.observers); i++ {
		j.observers[i].update(s, o)
	}
}
func (j *JobSite) addJobInfo(info string) {
	fmt.Println("新工作信息入库")
	j.notifyObservers(j, info)
}

type Jiucai struct {
	name string
}

func (j *Jiucai) update(s Subject, o interface{}) {
	fmt.Printf("%s收到新的工作推送，职位是%v\n", j.name, o)
}
func main() {
	zibenjia := JobSite{observers: []Observer{}}
	jiucai1 := Jiucai{name: "张三"}
	jiucai2 := Jiucai{name: "李四"}
	zibenjia.registerObserver(&jiucai1)
	zibenjia.registerObserver(&jiucai2)
	zibenjia.addJobInfo("喝牛奶")

}

```

