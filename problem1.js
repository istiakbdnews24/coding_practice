

const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 4,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];


// const namearry = [];

// const name = passengers.forEach(element => {
//     namearry.push(element.passengerName);
// });


// for (let i = 0; i<passengers.length; i++)
// {
//     console.log(passengers[i]);
// }



// const passengerName = passengers.map((element)=> element.passengerName);

// console.log(passengerName);


// const vegapassengername = [];

// const vegPassenger = passengers.filter((element)=> element.isVegetarianOrVegan).map((dot)=>dot.passengerName)



// console.log(vegPassenger);


// const sortpassenger = passengers.map((element)=> element.connectedFlights).sort();
// console.log(sortpassenger);


const sortpassengerbyfight = passengers.sort((passenger1,passenger2)=>
    passenger1.connectedFlights-passenger2.connectedFlights);


console.log(sortpassengerbyfight);















