// fix 1
db.products.aggregate(
  [
    {$project: {_id:0, name: 1, totalCost: {$add: ["$purchase_price", "$taxes"]}}}
  ]
);

// fix 2
db.products.aggregate(
  [
    {$project: {
      _id:0,
      name: 1,
      totalCost: {$add: ["$purchase_price", "$taxes"]},
      margin: {$subtract: ["$sale_price", {$add: ["$purchase_price", "$taxes"]}]},
      profit: {$multiply: [
        {$subtract: ["$sale_price", {$add: ["$purchase_price", "$taxes"]}]},
        "$quantity"
      ]}
    }}
  ]
);
// fix 3, 4 e 5
db.products.aggregate([
  {$project: {
    _id: 0,
    name: 1,
    marginCeil: {$ceil: {$subtract: ["$sale_price", {$add: ["$purchase_price", "$taxes"]}]}},
    marginABS: {$abs: {$subtract: ["$sale_price", {$add: ["$purchase_price", "$taxes"]}]}},
    priceFloor: {$floor: "$sale_price"}
  }}
]);

// fix 6 e 7
db.products.aggregate(
  [
    {$project: {
      _id:0,
      name: 1,
      totalStock: {$multiply: [{$add: ["$purchase_price", "$taxes"]}, "$quantity"]},
      possibleProfit: {$multiply: [
        {$subtract: ["$sale_price", {$add: ["$purchase_price", "$taxes"]}]},
        "$quantity"
      ]}
    }}
  ]
);
// fix 8:
db.products.aggregate(
  [
    {$project: {
      _id:0,
      name: 1,
      possibleLoss: {$subtract: [
        {$divide: ["$sale_price", 2]}, {$add: ["$purchase_price", "$taxes"]}]}, 
      possibleTotalLoss: {$multiply: [
        {$subtract: [
          {$divide: ["$sale_price", 2]}, {$add: ["$purchase_price", "$taxes"]}]},
        "$quantity"
      ]}
    }}
  ]
);