interface WritingState {
  write(words: string): void
}

class UpperCase implements WritingState {
  write(words: string): void {
    console.log(`Uppercase:${words}`)
  }
}

class LowerCase implements WritingState {
  write(words: string): void {
    console.log(`Lowercase:${words}`)
  }
}

class DefaultText implements WritingState {
  write(words: string): void {
    console.log(`DefaultText:${words}`)
  }
}

class TextEditor {
  protected state: WritingState
  constructor(state: WritingState) {
    this.state = state
  }
  setState(state: WritingState) {
    this.state = state
  }
  type(words: string) {
    this.state.write(words)
  }
}

const editor = new TextEditor(new DefaultText())
editor.type('hello')
editor.setState(new UpperCase())
editor.type('1')

editor.setState(new LowerCase())

editor.type('2')
