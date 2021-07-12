abstract class Builder {
  build() {
    this.test()
    this.lint()
    this.assemble()
    this.deploy()
  }
  abstract test(): void
  abstract lint(): void
  abstract assemble(): void
  abstract deploy(): void
}

class AndroidBuilder extends Builder {
  test(): void {
    console.log('Running android test')
  }
  lint(): void {
    console.log('Linting the android code.')
  }
  assemble(): void {
    console.log('Assembling the andorid build.')
  }
  deploy(): void {
    console.log('Deploying android build to server')
  }
}

class IosBuilder extends Builder {
  test(): void {
    console.log('Running ios test')
  }
  lint(): void {
    console.log('Linting the ios code.')
  }
  assemble(): void {
    console.log('Assembling the ios build.')
  }
  deploy(): void {
    console.log('Deploying ios build to server')
  }
}

const androidBuilder = new AndroidBuilder()
androidBuilder.build()
const iosBuilder = new IosBuilder()
iosBuilder.build()
