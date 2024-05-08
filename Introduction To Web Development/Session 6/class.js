class Student {
  name = "";
  age = 0;
  city = "";
  constructor(nama, umur, kota) {
    this.name = nama;
    this.age = umur;
    this.city = kota;
  }
  display() {
    console.log(this.name, this.age, this.city);
  }
}

let student = new Student("John", 30, "New York");
const student2 = new Student("Jane", 25, "London");

student.display();
