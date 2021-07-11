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

export {}
