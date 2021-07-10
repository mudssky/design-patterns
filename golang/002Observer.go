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
