// 1. 
db.movies.find(
    {category: {$all: ["action", "adventure"]}}
);

// 2.
db.movies.find(
    {$and: [
        {category: {$all: ["action"]}},
        {imdbRating: {$gt: 7}}
    ]
}
);
// 3.
db.movies.updateOne(
    {title: "Batman"},
    {$set: {
        "ratings": [85, 100, 102, 105]
    }}
);
// outra versão:

db.movies.updateOne(
    {title: "Batman"},
    {$push: {
        "ratings": {
            $each: [85, 100, 102, 105]
    }}}
);

// 4
db.movies.updateOne(
    {title: "Godzilla"},
    {$push: {
        ratings: {
            $each: [78, 52, 95, 102]
        }
    }}
);

// 5
db.movies.updateOne(
    {title: "Home Alone"},
    {$push: {
        ratings: {
            $each: [200, 99, 65]
        }
    }}
);

// 6
db.movies.find(
    {ratings: {$elemMatch: {$gt: 103}}},
    {title: 1, ratings: 1}
);
// 7
db.movies.find(
    {ratings: {$elemMatch: {$gt: 100, $lt: 105}}},
    {_id: 0, title: 1, ratings: 1}
);
// 8
db.movies.find(
    {ratings: {$elemMatch: {$gt: 64, $lt: 105, $mod: [9,0]}}},
    {_id: 0, title: 1, ratings: 1}
);
//9
db.movies.find(
    {
      ratings: {
        $elemMatch: { $gt: 103 }
      },
      category: { $all: ["adventure"] }
    },
    {
      _id: 0,
      title: 1,
      ratings: 1,
      category: 1
    }
  ).pretty();
//10
db.movies.find(
{category: {$size: 2}},
{_id: 0, title: 1}
);

// 11
db.movies.find(
    { ratings: { $size: 4 } },
    { _id: 0, title: 1 }
  );
// 12 ?????
db.movies.find(
    {$and: [
      {budget: {$mod: [5,0]}},
      {category: {$size: 2}}
    ]
    }
).pretty();

// 13
db.movies.find(
    {$or: [
        {category: {$all: ["sci-fi"]}},
        {ratings: {$gt: 199}}
    ]
    },
    { _id: 0, title: 1, ratings: 1, category: 1 }
);
//14

db.movies.find(
    {$and:
        [
        {$or: [
         {category: {$all: ["adventure"]}},
         {ratings: {$size: 4}}
        ]},
        {$or: [
            {category: {$all: ["family"]}},
            {imdRating: {$gt: 7}}
           ]}
    ]
}).pretty();
