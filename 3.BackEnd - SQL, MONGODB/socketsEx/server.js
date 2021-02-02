/* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
const net = require('net');

// novos inputs
//All active connections are stored in this object together with their client name
let clients = {}
//Stores the number of active clients
let clientCount = 0;

/* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
const server = net.createServer((connection) => {
  console.log('Cliente conectado');
  let clientname
  //Keep track of keystrokes
  let message = [];
 //Remember `net.Socket` is a dublex stream, so we can write into it
 connection.write(`Please enter a room name\r\n`);
   //data is sent in buffers so we want to use the utf-8 character encoding to make it a readable format
   connection.setEncoding('utf-8');
//Listen for input from the client
connection.on('data', data => {
  //Push every keystroke into an array
  message.push(data);
    //Proceed only if the 'enter' key has been pressed
    if( data == '\r\n'){
      //Join the keystrokes stored and remove the 'enter' character
      let clientInput = message.join('').replace('\r\n','');
    //Proceed if client name does not exist
    if(!clientname){
      //Check whether client name is already taken
      if( clients[clientInput] ){
        connection.write(' - Name is taken, try another name\r\n')
        //Discard the previous keystrokes the client entered
        message = [];
        return;
      } else {
        //Store the client name
        clientname = clientInput;
        //Increase the number of active clients
        clientCount++;
        //Store the connections by the name entered
        clients[clientInput] = connection;
        //Welcome the client
        connection.write(`- Welcome to the Chatbox, There are ${clientCount} active users\r\n`);
        //Discard the previous keystrokes the client entered
        message = [];
      }
    } else { 
        //We'll get back here
      }
    }

  })

  /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
  // connection.on('end', () => {
  //   console.log('Cliente desconectado');
  // });
  // /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente. */
  // connection.write('Mensagem do servidor!\r\n');
  // connection.pipe(connection);

  //Add listener for error events
  connection.on('error', error => { 
  console.log(`Error : ${error}`);
});
});

/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});

// aula frank:
// const port = 2708;

// const sockets = [];
// let usuarioId = 0;

// const server = net.createServer((socket) => {
// 	usuarioId++;

// 	socket.guest = 'Usuario' + usuarioId;
// 	sockets.push(socket);
// 	socket.write('Bem vindo ao chat!');

// 	disparo(socket.guest, socket.guest + 'Entrou no Chat.');

// 	socket.on('end', () => {
// 		sockets.splice(sockets.indexOf(socket), 1);
// 		const message = socket.guest + ' deixou o chat\n';

// 		disparo(socket.guest, message);
// 	});

// 	socket.on('data', (data) => {
// 		const message = socket.guest + '> ' + data.toString();

// 		disparo(socket.guest, message);
// 	});

// 	socket.on('error', (error) => {
// 		console.log('Erro no socket: ', error.message);
// 	});
// });

// const disparo = (from, message) => {
// 	sockets.forEach((socket, index, array) => {
// 		if (socket.guest === from) return;

// 		socket.write(message);
// 	});
// };

// server.listen(port, () => {
// 	console.log('O webchat está funfando!');
// });