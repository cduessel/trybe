const net = require('net');
// aula frank do frank abaixo:

/* Através do pacote NET, nós podemos não só criar servidores como podemos conectar nossos clientes aos servidores */
const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
});

/* Assim como no servidor, também temos eventos do lado do cliente, onde o evento 'data' é ativado quando o servidor envia uma mensagem para o cliente. */
client.on('data', (data) => {
  console.log(data.toString());
  // client.end();
});

/* Quando a conexão é interrompida/terminada, é ativado o evento 'end', onde podemos limpar alguns caches, dar uma mensagem para usuário, atualizar algum dado no banco de dados etc. */
// client.on('end', () => {
//   console.log('Desconectado do servidor');
// });
// const client = new net.Socket();
// const stdin = process.openStdin();
// //localhost = 127.0.0.1
// client.connect(2708, '127.0.0.1', () => {
// 	stdin.addListener('data', (text) => {
// 		const message = text.toString().trim();

// 		client.write(message);
// 	});
// });

// client.on('data', (data) => {
// 	console.log('' + data);
// });

// client.on('close', () => {
// 	console.log('Você saiu da sala');
// });