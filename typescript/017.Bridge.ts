// interface WebPage {
//  protected theme: Theme
//   getContent(): string
// }
abstract class WebPage {
  protected abstract theme: Theme
  //   constructor(theme: Theme) {
  //     this.theme = theme
  //   }
  abstract getContent(): string
}

class About extends WebPage {
  protected theme: Theme
  constructor(theme: Theme) {
    super()
    this.theme = theme
  }
  getContent(): string {
    return `about page in ${this.theme.getColor()}`
  }
}

interface Theme {
  getColor(): string
}

class Careers extends WebPage {
  protected theme: Theme
  constructor(theme: Theme) {
    super()
    this.theme = theme
  }
  getContent() {
    return `careers page in ${this.theme.getColor()}`
  }
}

class DarkTheme implements Theme {
  getColor(): string {
    return 'Dark Black'
  }
}

class LightTheme implements Theme {
  getColor(): string {
    return 'Off white'
  }
}

class AquaTheme implements Theme {
  getColor(): string {
    return 'Light blue'
  }
}

const darkTheme = new DarkTheme()
const about = new About(darkTheme)
const careers = new Careers(darkTheme)
console.log(about.getContent())
console.log(careers.getContent())
