class User {
    constructor(oneName, lastNAme, userName, password, age) {
        this.firstName = oneName
        this.lastNAme = lastNAme
        this.userName = userName
        this.password = password
        this.age = age
        this.loggedIn = false
        this.lastLoggedIn = 0
        this.isActive = true
    }
    signIn() {
        this.isLoggedIn = true
        this.lastLoggedIn = Date.now()
    }

    signOut() {
        this.isLoggedIn = false
    }

    getLAstLoggedIn() {
        const date = new Date(this.lastLoggedIn)
        console.log(date);
        return date.toLocaleTimeString
    }
    deactiveUser() {
        this.isActive = true
    }
    reactiveUser() {
        this.isActive = true
        alert('welcome back' + this.firstName)
    }
}

class Teacher extends User {
    constructor(oneName, lastNAme, userName, password, age, subject, salary) {
        super(oneName, lastNAme, userName, password, age)
        this.subject = subject
        this.salary = salary
        this.workHours = 0
    }

    giveMark() {

    }


}
class Student extends User {
    constructor(oneName, lastNAme, userName, password, age, grade) {
        super(oneName, lastNAme, userName, password, age)
        this.grade = grade
    }
}

class School {
    constructor(name) {
        this.namev = name
        this.grades = {}
        this.teachers = []
        this.students = []
    }

    registerStudent(oneName, lastNAme, userName, password, age, grade) {
        const student = new Student(oneName, lastNAme, userName, password, age, grade)
        this.students.push(student)

    }

    hireTeacher(oneName, lastNAme, userName, password, age, subject, salary) {
        const teacher = new Teacher(oneName, lastNAme, userName, password, age, subject, salary)
        this.teachers.push(teacher)
    }
}

const school = new School('america House')


school.hireTeacher('khaled', 'ch', 'KsRa', '0000', 18, 'P.E')
school.registerStudent('mohammad', 'izhi', 'miz', '0000', 12)

console.log(school);


// const u1 = new Teacher('khaled', 'ch', 'KsRa', '0000', 18, 'P.E')
// const u2 = new Student('mohammad', 'izhi', 'miz', '0000', 12)
// console.log(u1);
// console.log(u2);

