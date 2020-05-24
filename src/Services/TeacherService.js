module.exports = class teacherService {
    constructor(studentDataReader, teacherDataReader) {
        this.studentDataReader = studentDataReader;
        this.teacherDataReader = teacherDataReader;
    }

    geteacher(id)
    getteacher(id) {
        return this.teacherDataReader.getteacher(id);
    }

    deleteTeacher(id)
    deleteTeacher(id) {
        let teacher = this.getTeacher(id);
        if(!teacher) {
        if (!teacher) {
            console.log("Error: No Matching Student Found");
        } else {
            this.teacherDataReader.deleteTeacher(id);
        }
        

    updateTacher(teacher) {
        let dataTeacher = this.getTeacher(teacher.id);
        if(!dataTeacher) {
        if (!dataTeacher) {
            console.log("Error: No Matching Student Found");
        } else if (this.validateTeacher(teacher)) {
            this.teacherDataReader.updateTeacher(teacher);
        } else {
            console.log("Error: Teacher object was invalid")
            console.log("Error: Teacher object was invalid");
        }
    }

    addTeacher(teacher) {
        if (this.validateTeacher(teacher)) {
        let dataTeacher = this.getTeacher(teacher.id);
        if (dataTeacher) {
            console.log("Error: Teacher Already Found With id: " + teacher.id);
        } else if (this.validateTeacher(teacher)) {
            this.teacherDataReader.addTeacher(teacher);
        } else {
            console.log("Error: Teacher object was invalid")
            console.log("Error: Teacher object was invalid");
        }
    }

    searchByName(searchTerm) {
        let TeacherData = this.teacherDataReader.getArrayFromFile();
        let matchingNames = [];
        for (let i = 0; i < Teacher.length; i++) {
            const teacher = teacherData[i];
            let teacherFullName = `${teacher.firstName} ${teacher.lastName}`.toLowerCase();
            if(teacherFullName.includes(searchTerm.toLowerCase())) {
                matchingNames.push(teacher);
            }
        }
        return matchingNames;


        // return this.studentDataReader.getArrayFromFile()
        //     .filter(student => `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm));
    }

    doesTeacherExist(id) {
        let teacher = this.teacherDataReader.getTeacher(id);
        if(teacher) {
        if (teacher) {
            return true;
        } else {
            return false;
        }
    }

    validateTeacher(teacher){
        if(!this.doesStudentExist(student.studentId)) {
    validateTeacher(teacher) {
        if (!this.doesStudentExist(student.studentId)) {
            console.log("Error: Could not find matching student for given studentId")
            return false;
        }
        
        }
        return true;
        }
    }
