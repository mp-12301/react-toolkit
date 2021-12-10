export default class Container {
  constructor() {
    this.handlers = []
    this.lastValues = {}
  }

  subscribe(handler) {
    this.handlers.push(handler)
  }

  unsubscribe(handler) {
    this.handlers = this.handlers.filter(h => h !== handler)

    for (let i = 0; i < this.handlers.length; i++) {
      if (this.handlers[i].key === handler.key) {
        return
      }
    }

    delete this.lastValues[handler.key]
  }

  fire(event, thisScope) {
    const scope = thisScope || window
   
    this.lastValues[event.key] = event.value

    for (let i = 0; i < this.handlers.length; i++) {
      this.handlers[i].fn.call(scope, event)
    }
  }
}
