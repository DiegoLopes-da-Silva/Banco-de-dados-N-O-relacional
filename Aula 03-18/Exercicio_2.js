db.menu.insertMany([
    { _id: 1, dish: "Pizza", ingredientes: ["Dough", "Tomato Sauce", "Cheese"], price: 30},
    { _id: 2, dish: "Sushi", ingredientes: ["Rice", "Fish", "Seaweed"], price: 40},
    { _id: 3, dish: "Taco", ingredientes: ["Tortilla", "Beef", "Cheese"], price: 15},
]);

// |--- Exercicio ---|
// |- A): O restaurante decidiu aumentar o preço de todos os pratos em 10%-|
// |- Atualizar os preços -|

db.menu.updateMany( 
    {},
    {$mul: { price: 1.1} 
});

// |--- Exercicio ---|
// |- B): O taco agora vem com guacamole-|
// |- Adicionar ingrediente -|
db.menu.updateOne( 
    {dish: "Taco"},
    {$addToSet: { ingredientes: "Guacamole"}}
);

// |--- Exercicio ---|
// |- C): O Sushi teve reajuste no preço-|
// |- Atualizar o preço do Sushi -|
db.menu.updateOne(
    {dish: "Sushi"},
    {$set: {price: 35}}
);

// |--- Exercicio ---|
// |- D): O restaurante removeu "Beef" dos tacos e colocou Chicken no lugar-|
// |- Substitui ingrediente do taco -|
db.menu.updateOne(
    {dish: "Taco"},
    {$pull: {ingredientes: "Beef"}}
);

db.menu.updateOne(
    {dish: "Taco"},
    //{$push: {ingredientes: "Chicken"}}
    {$addToSet: {ingredientes: "Chicken"}}
);