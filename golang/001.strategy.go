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
