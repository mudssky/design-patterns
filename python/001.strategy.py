class SortStrategy:
    def sort(arr):
        pass


class BubbleSortStrategy(SortStrategy):
    def sort(self, arr):
        print('do buble sort')
        return arr


class QuickSortStrategy(SortStrategy):
    def sort(self, arr):
        print('do quick sort')
        return arr


class Sorter:
    def __init__(self, sortStrategy):
        self.sortStrategy = sortStrategy

    def sort(self, arr):
        return self.sortStrategy.sort(arr)


Sorter(QuickSortStrategy()).sort([1, 5, 3, 2, 4])
