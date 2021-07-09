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
