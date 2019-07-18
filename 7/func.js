class Magic {
  constructor() {
    this.stack = []
  }
  spellStack(spel) {
    if (!spel) {
      if (this.stack.length) {
      let res = this.stack[this.stack.length - 1];
      this.stack.pop();
        return res;
      } else {
        throw new Error('Error')
      }
    } else if (spel.type == 'instant') {
      this.stack.push(spel);
      return this.stack.length;
    } else if (spel.type == 'sorcery') {
      if (this.stack.length != 0) {
        throw new Error('Error')
      } else {
        this.stack.push(spel);
      }
      return this.stack.length;
    } 
  }
}

