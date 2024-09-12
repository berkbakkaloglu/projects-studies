import { studentsArr } from './Projects/Mini Js Projects/reduce with objects/studentsArr'

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce(function(total, currentStudent){
        return total + currentStudent.grade
    }, 0)
    return totalGrades
}

console.log(calculateClassAverage(studentsArr))



