class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Abstract classes can not be instantiated');
    }
  }
  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop];
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop];
        target[prop] = newValue;
        if (oldValue !== newValue) {
          this.updateUI();
        }
        return true;
      }
    });
  }

  updateUI() {
    throw new Error('Method not implemented');
  }
}

export default BaseComponent