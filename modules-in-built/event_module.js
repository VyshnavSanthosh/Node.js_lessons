const eventEmitor  = require("events");  // 1️⃣ Import events module

const click  = new eventEmitor();        // 2️⃣ Create an emitter (remote)

click.on("click",()=>{                   // 3️⃣ Listen for "click" event
    console.log("clicked");
})

click.emit("click")                      // 4️⃣ Trigger (emit) the "click" event

// create order 

const pizzaOrder = new eventEmitor();
pizzaOrder.on("createOrder", (size, toppings) =>{
    console.log(`${size} pizza with ${toppings} ready`);
})

pizzaOrder.emit("createOrder","large", "chicken")

console.log(__filename)
