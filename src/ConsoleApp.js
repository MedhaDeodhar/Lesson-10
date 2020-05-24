const readline = require('readline');
const path=require("path");
const{StudentDataReader,TeacherDataReader}=require=("./DataLayer");
const{Student,Teacher}=require("./Models");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}

async function program(){
const baseFilePath = path.join(__dirname,"../", "JSONData");    
const_studentDataReader=new StudentDataReader(path.join)(baseFilePath,"Students.json")}
const_teacherDataReader=new TeacherDataReader(path.join)(baseFilePath,"Teachers.json")

//console.log(const_studentDataReader.getArrayFromFile());
 let shouldloop=true;
 while(shouldLoop){
     console.log("[1]Students");
     console.log("[2]Teachers");
     console.log("[3]Exit");
     let userInput=await askQuestion("Select an option from above:");

     switch (userInput) {
        case "1":
            console.log("[1] Add Student");
            console.log("[2] Search For Student");
            console.log("[3] Update Student");
            console.log("[4] Delete Student");
            console.log("[5] Go Back");
            console.log("[2] Search Students");
            console.log("[3] Search For Student");
            console.log("[4] Update Student");
            console.log("[5] Delete Student");
            console.log("[6] Go Back");
            let userInputStudent = await askQuestion("Select an option from above: ");
            switch (userInputStudent) {
                case "1":
                    let studentFirstName = await askQuestion("Enter Student First Name: ");
                    let studentLastName = await askQuestion("Enter Student Last Name: ");
                    let studentAge = await askQuestion("Enter Student Age: ");
                    let parsedStudentAge = parseInt(studentAge);
                    let grades = await askQuestion("Enter Student Grades (Space-Separated): ");
                    let teacherId = await askQuestion("Enter Teacher's ID: ");
                    let parsedGrades = grades.split(" ").map(num => parseInt(num));
                    let newStudent = new Student(
                        studentFirstName,
                        studentLastName,
                        parsedStudentAge,
                        parsedGrades,
                        teacherId
                    );
                    _studentService.addStudent(newStudent);
                    break;
                case "2":
                    let searchTerm = await askQuestion("Enter search term: ");
                    let matchingStudents = _studentService.searchByName(searchTerm);
                    console.log(matchingStudents);
                    break;
                default:
                    console.log("Going back to main menu");
            }


 }


Program().then(() => {
    process.exit(0);
});




