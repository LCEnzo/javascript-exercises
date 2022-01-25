const findTheOldest = function(people) {
    function older(p1, p2) {
        const currYear = new Date().getFullYear();
        let age1 = -p1.yearOfBirth + (p1.yearOfDeath === undefined ? currYear : p1.yearOfDeath);
        let age2 = -p2.yearOfBirth + (p2.yearOfDeath === undefined ? currYear : p2.yearOfDeath);
        return age1 >= age2;
    }
    
    return people.reduce((p1, p2) => older(p1, p2) ? p1 : p2);
};

// Do not edit below this line
module.exports = findTheOldest;
