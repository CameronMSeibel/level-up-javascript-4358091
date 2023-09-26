// Write your code here
function getStudents({hasTeachingAssistant, classList}) {
  let teacher, asst, students;
  if(hasTeachingAssistant) {
    [teacher, asst, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

let classroom = {
  hasTeachingAssistant: false,
  classList: ["Bob", "Rob", "Dob", "Sob", "Lob"]
};

console.log(getStudents(classroom));