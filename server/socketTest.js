import { connect } from 'socket.io-client';
const socket = connect('https://flowery-twig-production.up.railway.app:8080');
console.log(socket);
socket.on('connect', () => {
  console.log('Connected to the Socket.IO server');

  socket.emit('selectAll', {          
  });
});

socket.on('res-selectAll', (data) => {
  console.log('Received data from server:', data);
    console.log(data.data.toString('utf-8'));
});