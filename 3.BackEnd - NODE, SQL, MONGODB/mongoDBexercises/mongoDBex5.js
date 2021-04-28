// ex1
db.clientes.aggregate([
  {
    $addFields:
      {idade: {
        $floor: {
        $divide: [
          {$subtract: ["$$NOW", "$dataNascimento"]},
          365*86400000
        ] 
      }}}
  }
]).pretty();

// ex2

db.clientes.aggregate([
  {
    $addFields:
      {idade: {
        $floor: {
        $divide: [
          {$subtract: ["$$NOW", "$dataNascimento"]},
          365*86400000
        ] 
      }}}
  },
  {
    $match: {
      idade: {$gt:18, $lt: 25}
    }
  },
  {
    $group: {
      _id: null,
      count: {$sum: 1}
    }
  }
]).pretty();

// ex3
db.clientes.aggregate([
  {
    $addFields:
      {idade: {
        $floor: {
        $divide: [
          {$subtract: ["$$NOW", "$dataNascimento"]},
          365*86400000
        ] 
      }}}
  },
  {$lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  }
  },
  {
    $match: {"compras.dataVenda": {$gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-01')}}
  }
]).pretty();

// ex4 e 5
db.clientes.aggregate([
  {
    $addFields:
      {idade: {
        $floor: {
        $divide: [
          {$subtract: ["$$NOW", "$dataNascimento"]},
          365*86400000
        ] 
      }}}
  },
  {$lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  }
  },
  {
    $match: {"compras.dataVenda": {$gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-01')}}
  }
]).itcount();

// ex 6:
db.clientes.aggregate([
  {
    $addFields:
      {idade: {
        $floor: {
        $divide: [
          {$subtract: ["$$NOW", "$dataNascimento"]},
          365*86400000
        ] 
      }}}
  },
  {$lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  }
  },
  {
    $match: {"compras.dataVenda": {$gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-01')}}
  },
  {
    $addFields:
      { numVendas: {$size: "$compras"}
      }
  },
  {
    $sort: {numVendas: -1}
  },
  {
    $limit:10
  }
]).pretty();

// ex 7:
db.clientes.aggregate([
  {
    $addFields:
      {idade: {
        $floor: {
        $divide: [
          {$subtract: ["$$NOW", "$dataNascimento"]},
          365*86400000
        ] 
      }}}
  },
  {$lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  }
  },
  {
    $match: {"compras.dataVenda": {$gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-01')}}
  },
  {
    $addFields:
      { numVendas: {$size: "$compras"},
        "compras.valorComDesconto": {$multiply: [0.9, {$sum: "$compras.valorTotal"}]}
      }
  },
  {
    $sort: {numVendas: -1}
  },
  {
    $limit:10
  }
]).pretty();

//ex8
db.clientes.aggregate([
  {
    $addFields:
      {idade: {
        $floor: {
        $divide: [
          {$subtract: ["$$NOW", "$dataNascimento"]},
          365*86400000
        ] 
      }}}
  },
  {$lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  }
  },
  {
    $match: {"compras.dataVenda": {$gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-01')}}
  },
  {
    $addFields:
      { numVendas: {$size: "$compras"},
        "compras.valorComDesconto": {$multiply: [0.9, {$sum: "$compras.valorTotal"}]}
      }
  },
  {
    $sort: {numVendas: -1}
  },
  {
    $limit:10
  },
  {
    $group: {
      _id: "$endereco.uf", count: {$sum: 1}
    }
  },
  {$sort: {_id: -1}},
  {$limit: 5}
]).pretty();