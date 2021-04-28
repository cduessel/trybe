const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});
app.use(cors()) // Permite recursos restritos na página web serem pedidos a domínio externo

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
const users = [];

io.on('connection', (socket) => {
  const nickname = 'usuário ' + users.length;
  socket.nickname = nickname;
  users.push(socket.nickname);
  console.log(
    '+Usuário conectado, igual ao que fizemos na aula anterior, porém dessa vez em um servidor escalável'
  );

  socket.emit('ola', 'Bem vindo, fica mais um cadin, vai ter bolo :)' );

  /* Basta usarmos a propriedade 'broadcast' */
  socket.broadcast.emit('mensagemServer', { mensagem: ' Iiiiiirraaaa! Fulano acabou de se conectar :D'});
  
  socket.on('mensagemParaTodos', (msg)=> {
    io.broadcast('mensagemParaTodos', msg)
  })

  socket.on('disconnect', () => {
    console.log(
      'Desconectado, Lembre-se de deixar tudo relacionado a "conexão socket" dentro do evento "connection"'
    );
  });
  socket.on('mensagem', (msg) => {
    console.log(`Mensagem ${msg} por ${socket.nickname}`);
    io.emit('mensagemServer', (`${socket.nickname}: ${msg}`));
  });
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
