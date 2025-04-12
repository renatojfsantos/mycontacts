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

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event];
    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove,
    );

    this.listeners[event] = filteredListeners;
  }
}

export default EventManager;

const toastEventManager = new EventManager();

function addToast1(payload) {
  console.log('addToast listener1:', payload);
}

function addToast2(payload) {
  console.log('addToast listener2:', payload);
}

toastEventManager.on('addtoast', addToast1);
toastEventManager.on('addtoast', addToast2);

toastEventManager.emit('addtoast', { type: 'success', text: 'This is a toast message' });

toastEventManager.removeListener('addtoast', addToast1);
toastEventManager.emit('addtoast', 'depois de remover o listener 1');

console.log(toastEventManager);
