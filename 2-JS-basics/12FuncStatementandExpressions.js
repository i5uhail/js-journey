var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' Drives car in lisbon';
        case 'designer':
            return firstName + ' designs beautiful website';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mark'));
console.log(whatDoYouDo('retired', 'Binoy'));