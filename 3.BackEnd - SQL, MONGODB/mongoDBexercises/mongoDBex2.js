// 1
db.transactions.aggregate([
{$match: {
  from: "Dave America"
}}
]
);

//2
db.transactions.aggregate(
  [
    {
      $match:
      {value: {$gt: 1000}}
    },
    {$limit: 3}
  ]
);

// 3
db.transactions.aggregate(
  [
    {
      $match:
      {
        $and:
        [
          {value: {
            $gt: 700, $lt:6000
          }},
          {to: "Lisa Simpson"}
        ]
      }
    }
  ]
);

// 4
db.transactions.find().sort({from: 1})

db.transactions.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "from",
      foreignField: "name",
      as: "client_info"
    }
  }
]);

// 5.
db.transactions.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "to",
      foreignField: "name",
      as: "client_info"
    }
  },
  { $limit: 3}
]).pretty();

//6 ????
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      pipeline: [
        {$match: {
          $expr: {
            $and: [
              {$eq: ["$name", "$$from"]},
              {"$State": "Florida"}
            ]}
        }}
      ],
      as: "info",
    }
  }
]).pretty();

// 7
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      count: {$sum: 1}
    }
  }
]);

// 8
db.transactions.aggregate([
  {
    $group:
    {
      _id: "$bank",
      transactionSum: {$sum: "$value"},
      count: {$sum: 1}
    }
  }
]);

//9
db.transactions.aggregate([
  {
    $group:
    {
      _id: null,
      transactionSum: {$sum: "$value"},
      // count: {$sum: 1}
    }
  }
]);

//10
db.transactions.aggregate([
  {
    $group:
    {
      _id: "$bank",
      transactionSum: {$sum: "$value"},
      count: {$sum: 1}
    }
  },
  {
    $match: {
      transactionSum: {$gt: 1000}
    }
  }
]);

