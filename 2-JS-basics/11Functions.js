function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1987)
var ageMike = calculateAge(1997)
var ageKid = calculateAge(2017)

console.log(ageJohn,ageMike,ageKid);

function YearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' +
        retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }

}

YearsUntilRetirement(1990, 'John')
YearsUntilRetirement(1969, 'Kohn')
YearsUntilRetirement(1929, 'Bohn')