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

### 1.🏠简单工厂模式(Simple Factory)

#### 现实的例子

想象你要造一所房子，你需要一些门，你可以自己准备木头,胶水,你的木匠装备等等，你也可以把工作外包给工厂，让外包制造好门直接交付给你，这样你就不用了解制造门的细节了，也不会因为在家里施工而搞得一团糟。

#### 简单总结

简单工厂模式封装了生成实例的方法，这样用户就可以直接调用这个方法，不需要知道创造实例的逻辑。

(简单工厂实际上不算是一种设计模式,相对于后续介绍的工厂方法来说.)

#### 维基百科描述

在面向对象编程(OOP)中，工厂是用于创建其他对象的对象，形式上工厂是一个函数或方法，它从某个方法调用中返回不同原型或类的对象（这样我们就不用new这些对象来手动创建了）

#### typescript example

```typescript
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

```



### 2.🏭工厂方法模式(Factory Method)

#### 现实的例子

考虑一个HR招人面试的例子,不可能每个职位都由一个人来面试。根据职位空缺，她必须决定并把面试步骤委派给不同的人。

#### 简单总结

工厂方法模式提供了一种将实例化逻辑委托给子类的方法。

#### 维基百科的描述

在基于类的编程中，工厂方法模式是一种创建工厂方法的创建模式，可以处理创建对象的问题而无需指定将创建的对象的确切类别。 这是通过通过调用在接口中指定的工厂方法来创建对象来完成对象，并由子类实现，或者在基类中实现，并且可选地由派生类覆盖 - 而不是通过调用构造函数。

#### 优缺点

**优点**

-  你可以避免创建者和具体产品之间的紧密耦合。
-  *单一职责原则*。 你可以将产品创建代码放在程序的单一位置， 从而使得代码更容易维护。
-  *开闭原则*。 无需更改现有客户端代码， 你就可以在程序中引入新的产品类型。

**缺点**

-  应用工厂方法模式需要引入许多新的子类， 代码可能会因此变得更复杂。 最好的情况是将该模式引入创建者类的现有层次结构中。

#### 伪代码

```javascript
// 创建者类声明的工厂方法必须返回一个产品类的对象。创建者的子类通常会提供
// 该方法的实现。
class Dialog is
    // 创建者还可提供一些工厂方法的默认实现。
    abstract method createButton():Button

    // 请注意，创建者的主要职责并非是创建产品。其中通常会包含一些核心业务
    // 逻辑，这些逻辑依赖于由工厂方法返回的产品对象。子类可通过重写工厂方
    // 法并使其返回不同类型的产品来间接修改业务逻辑。
    method render() is
        // 调用工厂方法创建一个产品对象。
        Button okButton = createButton()
        // 现在使用产品。
        okButton.onClick(closeDialog)
        okButton.render()


// 具体创建者将重写工厂方法以改变其所返回的产品类型。
class WindowsDialog extends Dialog is
    method createButton():Button is
        return new WindowsButton()

class WebDialog extends Dialog is
    method createButton():Button is
        return new HTMLButton()


// 产品接口中将声明所有具体产品都必须实现的操作。
interface Button is
    method render()
    method onClick(f)

// 具体产品需提供产品接口的各种实现。
class WindowsButton implements Button is
    method render(a, b) is
        // 根据 Windows 样式渲染按钮。
    method onClick(f) is
        // 绑定本地操作系统点击事件。

class HTMLButton implements Button is
    method render(a, b) is
        // 返回一个按钮的 HTML 表述。
    method onClick(f) is
        // 绑定网络浏览器的点击事件。


class Application is
    field dialog: Dialog

    // 程序根据当前配置或环境设定选择创建者的类型。
    method initialize() is
        config = readApplicationConfigFile()

        if (config.OS == "Windows") then
            dialog = new WindowsDialog()
        else if (config.OS == "Web") then
            dialog = new WebDialog()
        else
            throw new Exception("错误！未知的操作系统。")

    // 当前客户端代码会与具体创建者的实例进行交互，但是必须通过其基本接口
    // 进行。只要客户端通过基本接口与创建者进行交互，你就可将任何创建者子
    // 类传递给客户端。
    method main() is
        this.initialize()
        dialog.render()
```



#### typescript example

下面是这个HR找面试官例子的代码实现

HiringManager抽象类就是工厂类，相当于简单工厂的情况下，把这个工厂方法变抽象，让给外部去继承实现实例化。

```typescript
interface Interviewer {
  askQuestions(): void
}

class Developer implements Interviewer {
  askQuestions(): void {
    console.log('ask about design patterns!')
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions(): void {
    console.log('ask more about community building')
  }
}

abstract class HiringManager {
  protected abstract makeInterviewer(): Interviewer
  takeInterview() {
    const interviewer = this.makeInterviewer()
    interviewer.askQuestions()
  }
}

class DevelopmentManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new Developer()
  }
}

class MarketingManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new CommunityExecutive()
  }
}

const devManager = new DevelopmentManager()
devManager.takeInterview()

const marketManager = new MarketingManager()
marketManager.takeInterview()

```

另一个例子

```typescript
/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class Creator {
    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    public abstract factoryMethod(): Product;

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    public someOperation(): string {
        // Call the factory method to create a Product object.
        const product = this.factoryMethod();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class ConcreteCreator1 extends Creator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface Product {
    operation(): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCode(creator: Creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
```



### 3.🔨抽象工厂模式  Abstract Factory

#### 现实的例子:

回到之间使用的简单工厂的门的例子,您可以从木门商店得到木门，铁门商店或PVC门从相关的商店。另外，你可能需要一个有不同专业的人来装门，例如木匠做木门，焊工做铁门等。正如你所看到的，现在门之间有一个依赖关系，木门需要木匠，铁门需要焊工等等。

#### 简单总结

工厂的工厂,将个别但相关/依赖的工厂分组在一起而不指定它们的具体类的工厂。

#### 维基百科的描述

抽象工厂模式提供了一种方式来封装一组具有公共主题的独立工厂，而无需指定它们的具体类

#### 优缺点

**优点**

- 你可以确保同一工厂生成的产品相互匹配。
-  你可以避免客户端和具体产品代码的耦合。
-  *单一职责原则*。 你可以将产品生成代码抽取到同一位置， 使得代码易于维护。
-  *开闭原则*。 向应用程序中引入新产品变体时， 你无需修改客户端代码。

**缺点**

- 由于采用该模式需要向应用中引入众多接口和类， 代码可能会比之前更加复杂。

#### typescript example

下面是这个木门例子的typescript代码

```typescript
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

```

## 4.💍单例模式(Singleton)

### 现实的例子

一个国家只能有一个总统，总统始终是一个。

### 简单总结

确保只创建特定类的一个对象。

### 维基百科的描述

在软件工程中，单例模式是一种软件设计模式，它将类的实例化限制在一个对象中。当只需要一个对象来协调整个系统的操作时，这很有用。

单例模式实际上被认为是反模式，应该避免过度使用它。它并不一定是坏的，可能会有一些有效的用例，但是应该谨慎使用，因为它会在应用程序中引入一个全局状态，在一个地方对它的更改可能会影响到其他区域，并且它可能变得非常难以调试。它们的另一个缺点是它使你的代码紧密耦合，再加上mock单例可能会很困难。

### 优缺点

**优点**

-  你可以保证一个类只有一个实例。
-  你获得了一个指向该实例的全局访问节点。
-  仅在首次请求单例对象时对其进行初始化。

**缺点**

- 违反了_单一职责原则_。 该模式同时解决了两个问题。
-  单例模式可能掩盖不良设计， 比如程序各组件之间相互了解过多等。
-  该模式在多线程环境下需要进行特殊处理， 避免多个线程多次创建单例对象。
-  单例的客户端代码单元测试可能会比较困难， 因为许多测试框架以基于继承的方式创建模拟对象。 由于单例类的构造函数是私有的， 而且绝大部分语言无法重写静态方法， 所以你需要想出仔细考虑模拟单例的方法。 要么干脆不编写测试代码， 或者不使用单例模式。

#### typescript example

````typescript
class President {
  private static instance: President
  private constructor() {}
  static getInstance(): President {
    if (!this.instance) {
      this.instance = new this()
    }
    return this.instance
  }
}

const president1 = President.getInstance()
const president2 = President.getInstance()
console.log(president1 == president2)
````



## 结构设计模式

结构设计模式主要关注对象组合，换句话说，实体如何相互使用。或者另一种解释是，它们有助于回答“如何构建软件组件”

### 1.☕ 装饰器模式（Decorator）

**亦称：** 装饰者模式、装饰器模式、Wrapper、Decorator

#### 现实的例子

假设你经营一家咖啡店，计算账单的时候需要根据添加的各种原料计算最终的成本，这个情况下，每个添加的原料可以作为装饰器

（实际上碰到这种例子，查表就可以了吧，价格不必硬编码到程序里）

#### 简单总结

装饰器模式允许你通过用一个装饰器类包裹对象，在运行时对一个对象动态添加行为

#### 维基百科的解释

在面向对象编程中，装饰器模式是一种设计模式，它允许将行为静态或动态地添加到单个对象中，而不会影响来自同一类的其他对象的行为。decorator模式对于遵循单一职责原则通常很有用，因为它允许在具有唯一关注区域的类之间划分功能。

#### 优缺点

**优点**

-  你无需创建新子类即可扩展对象的行为。
-  你可以在运行时添加或删除对象的功能。
-  你可以用多个装饰封装对象来组合几种行为。
-  *单一职责原则*。 你可以将实现了许多不同行为的一个大类拆分为多个较小的类。

**缺点**

-  在封装器栈中删除特定封装器比较困难。
-  实现行为不受装饰栈顺序影响的装饰比较困难。
-  各层的初始化配置代码看上去可能会很糟糕。

#### typescript example

下面时coffee例子的

```typescript
interface Coffee {
  getCost(): number
  getDescription(): string
}

class SimpleCoffee implements Coffee {
  getCost() {
    return 10
  }
  getDescription() {
    return 'simple coffee'
  }
}

class MilkDecorator implements Coffee {
  protected coffee: Coffee
  protected description: string
  constructor(c: Coffee) {
    this.coffee = c
    this.description = 'milk'
  }
  getCost() {
    return 4 + this.coffee.getCost()
  }
  getDescription() {
    return this.coffee.getDescription() + ' ' + this.description
  }
}
class WhipDecorator implements Coffee {
  protected coffee: Coffee
  protected description: string
  constructor(c: Coffee) {
    this.coffee = c
    this.description = 'whip'
  }
  getCost() {
    return 5 + this.coffee.getCost()
  }
  getDescription() {
    return this.coffee.getDescription() + ' ' + this.description
  }
}
// 香草
class VanillaDecorator implements Coffee {
  protected coffee: Coffee
  protected description: string
  constructor(c: Coffee) {
    this.coffee = c
    this.description = 'vanilla'
  }
  getCost() {
    return 3 + this.coffee.getCost()
  }
  getDescription() {
    return this.coffee.getDescription() + ' ' + this.description
  }
}

const simpleCoffee = new SimpleCoffee()
console.log(simpleCoffee.getDescription())
console.log(simpleCoffee.getCost())

const milkCoffee = new MilkDecorator(simpleCoffee)
console.log(milkCoffee.getDescription())
console.log(milkCoffee.getCost())

const mixCoffee = new VanillaDecorator(
  new MilkDecorator(new WhipDecorator(simpleCoffee))
)

console.log(mixCoffee.getDescription())
console.log(mixCoffee.getCost())
export{}
```





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

### 1.💡策略模式(Strategy)

#### 现实例子

举一个排序的例子，我们首先实现了冒泡排序，但是随着数据量的增长我们发现冒泡排序的效率变得很慢，为此，我们又实现了快速排序处理大数据，但是这个快速排序处理小规模数据的效率比较低，所以为了处理这个问题，我们又实现了一个针对小规模数据的策略，使得在大规模数据上使用快速排序，小规模数据使用冒泡排序。

#### 简单总结

策略模式允许您根据情况切换算法或策略

(实际上在js里面由于函数是一等公民，第一个参数设为函数，之后传入不同的排序函数就能达成类似的效果，也不需要用到多态)

#### 优缺点

**优点**

-  你可以在运行时切换对象内的算法。
-  你可以将算法的实现和使用算法的代码隔离开来。
-  你可以使用组合来代替继承。
-  *开闭原则*。 你无需对上下文进行修改就能够引入新的策略。

**缺点**：

-  如果你的算法极少发生改变， 那么没有任何理由引入新的类和接口。 使用该模式只会让程序过于复杂。
-  客户端必须知晓策略间的不同——它需要选择合适的策略。
-  许多现代编程语言支持函数类型功能， 允许你在一组匿名函数中实现不同版本的算法。 这样， 你使用这些函数的方式就和使用策略对象时完全相同， 无需借助额外的类和接口来保持代码简洁。

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



### 2.😎观察者模式(Observer)

#### 现实例子

也叫做发布订阅模式,这里给出的例子是,求职者订阅了招聘网站的服务,如果有匹配的工作信息,招聘网站会进行推送



#### 简单总结

建立对象间的依赖关系，使得一个对象的状态发生改变时，所有依赖它的对象都能被通知到。



#### 维基百科的描述

观察者模式是一种软件设计模式，在这种模式中，一个称为主体的对象维护一个称为观察者的依赖项列表，并在任何状态更改时自动通知它们(通常通过调用它们的一个方法)。

#### 优缺点

**优点**

-  *开闭原则*。 你无需修改发布者代码就能引入新的订阅者类 （如果是发布者接口则可轻松引入发布者类）。
-  你可以在运行时建立对象之间的联系。

#### typescript example



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





#### dart example

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

#### golang example

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



## 3.👮命令模式 Command

#### 真实世界的例子

一个例子是餐馆点餐， 您（即客户）询问服务员（即，调用者）携带一些食物（即命令）和服务员只需将该请求转发给厨师（即接收者），该请求具有关于烹饪的内容和如何烹饪的知识。 另一个例子是您（即客户端）使用遥控器（即，Command）的电视（即，接收器）打开（即，接收器）。

#### 简单总结

允许您在对象中封装动作。此模式背后的关键思想是提供分离客户机与接收者的方法。

#### 维基百科的解释

在面向对象编程中，命令模式是一种行为设计模式，在这种模式中，一个对象被用来封装在以后执行一个动作或触发一个事件所需的所有信息。该信息包括方法名、拥有该方法的对象和方法参数的值。

#### 优缺点

**优点**

- *单一职责原则*。 你可以解耦触发和执行操作的类。
-  *开闭原则*。 你可以在不修改已有客户端代码的情况下在程序中创建新的命令。
-  你可以实现撤销和恢复功能。
-  你可以实现操作的延迟执行。
-  你可以将一组简单命令组合成一个复杂命令。

**缺点**

-  代码可能会变得更加复杂， 因为你在发送者和接收者之间增加了一个全新的层次。

#### typescript example

下面是一个遥控器控制灯泡开关的实现。

```typescript
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

```

