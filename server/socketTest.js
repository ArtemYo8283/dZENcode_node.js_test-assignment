import { connect } from 'socket.io-client';
import fs from 'fs';

const filePath = 'test.txt'; // Замініть на свій файл
const filename = 'test.txt';
const socket = connect('http://localhost:8080');

socket.on('connect', () => {
  console.log('Connected to the Socket.IO server');

  socket.emit('selectFileById', {            
      id: 4
  });
});

socket.on('res-selectFileById', (data) => {
  console.log('Received data from server:', data);
    console.log(data.data.toString('utf-8'));
});