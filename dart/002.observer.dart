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
