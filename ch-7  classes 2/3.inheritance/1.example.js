class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get Name() {
    return this.name;
  }
}

class StudentDetails extends Student {
  constructor(name, age, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }
}

const StudentFullDetail = new Student("john", 24);

const StudentName = StudentFullDetail.Name;

console.log("student Name =>", StudentName);
