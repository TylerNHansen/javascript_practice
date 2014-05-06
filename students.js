
function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function(){
  return this.firstName + " " + this.lastName;
}

Student.prototype.enroll = function(course){
  if (this.courses.indexOf(course) === -1){
    this.courses.push(course);
    course.addStudent(this);
  }
}

function Course(courseName, department, numCredits){
  this.courseName = courseName;
  this.department = department;
  this.numCredits = numCredits;
  this.students = [];
}

Course.prototype.addStudent = function(student){
  this.students.push(student);
}

Student.prototype.courseLoad = function(){
  var cLoad = {};

  for(var i = 0; i < this.courses.length; i++){
    course = this.courses[i];
    if(cLoad[course.department]){
      cLoad[course.department] += course.numCredits;
    } else {
      cLoad[course.department] = course.numCredits;
    }
  }
  return cLoad;
}

bob = new Student('bob', 'loblaw');
blah = new Course('law blog', 'law blogging', 3);
blahblah = new Course('law blog blog', 'law blogging', 5);
bob.enroll(blah);
bob.enroll(blahblah);
console.log(bob.courseLoad());