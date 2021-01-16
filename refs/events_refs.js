const EventsEmitter = require('events');

class Logger extends EventsEmitter {
    log(message) {
        this.emit('message', `${message} ${new Date().getTime()}`)
    }
}

const logger  = new Logger();

logger.on('message', data => {
    console.log(data);
})

logger.log('kek')
