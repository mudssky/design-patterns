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
