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



### 1.策略模式

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

