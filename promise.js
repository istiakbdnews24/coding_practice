let persons = [
    { firstName: "Istiak", lastName: "Shanto" },
    { firstName: "Salekin", lastName: "Rupok" },
  ];
  
  function createPerson(person) {

    let prom = new Promise(function(resolve, reject){

        persons.push(person);
        let error = false;

        if (!error){
            resolve();
        }
        else
        {
            reject("Something went wrong")
        }
    })

    return prom;
  }
  
  function getPerson() {
    let output = "";
  
    // persons.forEach(function(person, index){
    //     output= output + `${index+1}. ${person.firstName} ${person.lastName}${"\n"}`
    // });
  
    for (let i = 0; i < persons.length; i++) {
      output =
        output +
        `${i + 1} ${persons[i].firstName} ${persons[i].lastName} ${"\n"}`;
    }
  
    console.log(output);
  }
  
  createPerson({ firstName: "mehedi", lastName: "hasan" })
  .then(getPerson)
  .catch(function (err) {
    console.log(err);
});