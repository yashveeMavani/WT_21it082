class Person {
    constructor(name, id) {
      this.name = name;
      this.id = id;
      }
    sayHello() {
      return `Hello, my name is ${this.name} and My Id is ${this.id}.`;
    } }
  function createPerson() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let person1 = new Person(name, id);
    let output = document.getElementById("output");
    output.innerHTML = person1.sayHello();
}function calculateAverage() {
    var sem1 = Number(document.getElementById("sem1").value);
    var sem2 = Number(document.getElementById("sem2").value);
    var sem3 = Number(document.getElementById("sem3").value);
    var average = (sem1 + sem2 + sem3) / 3;
    document.getElementById("average").innerHTML = "CGPA: " + average;
}