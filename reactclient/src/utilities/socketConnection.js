import io from 'socket.io-client';

let socket = io.connect('localhost:8181');
socket.emit('clientAuth', 'ta89w4e8w4t8r5j15yh6j1');
// console.log(socket);

export default socket;