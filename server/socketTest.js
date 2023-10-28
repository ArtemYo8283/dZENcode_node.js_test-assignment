import { connect } from 'socket.io-client';

const socket = connect('http://localhost:8080');

socket.on('connect', () => {
  console.log('Connected to the Socket.IO server');

  socket.emit('selectAll', { message: 'Hello from the client!' });
});

socket.on('res-selectAll', (data) => {
  console.log('Received data from server:', data);
});