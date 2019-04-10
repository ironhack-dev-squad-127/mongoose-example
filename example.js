const mongoose = require('mongoose')
const Cat = require('./models/Cat')

// Connect to the local database "exampleApp"
mongoose.connect('mongodb://localhost/exampleApp', { useNewUrlParser: true })


// kitty is a document (object with "_id" property) and ready to be saved
const kitty = new Cat({ 
  name: 'Garfield',
  color: ['orange','brown','black','white','grey'][Math.floor(5*Math.random())]
});
console.log("TCL: kitty", kitty) // To generate the console.log: Select "kitty" and Press: "Ctrl+Alt+L"

// Save kitty to the database
kitty.save((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
})

// Find all the cats where "color" is "black"
Cat.find({color: 'black'})
.then(cats => {
    console.log('All the CATS!');
    cats.forEach((cat)=> {
      console.log(' --> cat: ', cat.name, cat.color);
    });
  })
  .catch(err => {
    console.log(err)
  })

// Delete all the cats where "color" is undefined
Cat.deleteMany({ color: undefined })
  .then(() => {
    console.log("We have deleted all the cats without any color")
  })

// Update all the cats where "color" is "orange" and set the "color" to "red"
Cat.updateMany({color: 'orange'}, {color: 'red'})
  .then(() => {
    console.log("The orange cats are now red")
  })


// Close properly the connection after 2 seconds (when all operation with the database is over)
setTimeout(() => {
  // To close the connection with the database
  mongoose.disconnect()
}, 2000)