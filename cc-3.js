let Jane = {
  name: "Jane Doe",
  email: "jane.doe@yahoo.com",
  purchases: ["book", "pen"]
};

let John = {
  name: "John Smith",
  email: "john.smith@AudioListener.com",
  purchases: ["headphones", "notebook"]
};

let Alice = {
  name: "Alice Kelly",
  email: "alice.wonderland@outlook.com",
  purchases: ["laptop", "mouse"]
};

let David = {
  name: "David Jones",
  email: "davidjonesh@gmail.com",
  purchases: ["computer", "smartphone"]
};


let customers = [Jane, John, Alice];


customers.push(David);


customers.shift(0);


customers[2].email = "davidjones@gmail.com"; 

John.purchases.push("tablet");


customers.forEach(customer => {
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log('---');
});