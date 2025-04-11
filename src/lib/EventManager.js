class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }
}

export default EventManager;

const toastEventManager = new EventManager();

toastEventManager.on('addtoast', (payload) => {
  console.log('Toast event received:', payload);
});

toastEventManager.on('addtoast', (payload) => {
  console.log('Another listener for toast event:', payload);
});

toastEventManager.emit('addtoast', {
  type: 'success',
  text: 'This is a toast message',
});

console.log(toastEventManager);
