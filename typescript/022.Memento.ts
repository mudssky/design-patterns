class EditorMemento {
  protected content: string
  constructor(content: string) {
    this.content = content
  }
  getContent() {
    return this.content
  }
}

class Editor {
  protected content = ''
  type(words: string) {
    this.content = this.content + words
  }
  getContent() {
    return this.content
  }
  save() {
    return new EditorMemento(this.content)
  }
  restore(memento: EditorMemento) {
    this.content = memento.getContent()
  }
}

const editor = new Editor()
editor.type('first sentence\n')
editor.type('this is second\n')
const saved = editor.save()

editor.type('third\n')
console.log(editor.getContent())
editor.restore(saved)
console.log(editor.getContent())

export {}
