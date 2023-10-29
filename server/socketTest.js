import { connect } from 'socket.io-client';

const socket = connect('http://localhost:8080');

socket.on('connect', () => {
  console.log('Connected to the Socket.IO server');

  socket.emit('update', {     
      id: 3,       
      user_name: "ArtemYo1"
  });
});

socket.on('res-update', (data) => {
  console.log('Received data from server:', data);
});