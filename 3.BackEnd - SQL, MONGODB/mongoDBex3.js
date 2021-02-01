// ex 1
db.clientes.aggregate([
  {
    $match: {sexo: "MASCULINO"}
  }
]).pretty();

//ex2
db.clientes.aggregate([
  {
    $match: {sexo: "FEMININO", dataNascimento: {$gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31')}}
  }
]).pretty();

//ex3
db.clientes.aggregate([
  {
    $match: {sexo: "FEMININO", dataNascimento: {$gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31')}}
  },
  {
    $limit:5
  }
]).pretty();

//ex 4
db.clientes.aggregate([
  {
    $match: {"endereco.uf": "SC"}
  },
  {
    $group: {_id: "SC", count: {$sum: 1}}
  }
]);
// ex 5
db.clientes.aggregate([
  {
    $group: {_id: "$sexo", count: {$sum: 1}}
  }
]);
// ex 6
db.clientes.aggregate([
  {
    $group: {_id: {sexo: "$sexo", uf: "$endereco.uf"}, count: {$sum: 1}}
  }
]);

// ex 7
db.clientes.aggregate([
  {
    $group: {_id: {sexo: "$sexo", estado: "$endereco.uf"}, count: {$sum: 1}}
  },
  {
    $project: {__id: 0, "Sexo":"$_id.sexo", "Estado":"$_id.estado", count: 1}
  }
]);




// ex 8
db.vendas.aggregate([
  {
    $group: { _id: "$clienteId", vendas: {$sum: "$valorTotal"}}
  },
  {
    $sort: {vendas: -1}
  },
  {
    $limit: 5
  }
]);