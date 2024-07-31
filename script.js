// დავალება 1:

for (let i = 5; i <= 100; i++) {
    console.log(i);
}

// დავალება 2:

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10) {
        console.log(array1[i]);
    }
}

// დავალება 3:

let array2 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array2.length; i++) {
    sum += array2[i];
}

console.log(sum);

// დავალება 4: 
/*
let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array3.length; i++) {
    sum += array3[i];
}

let average = sum / array3.length;

console.log (average); */

// დავალება 5: 

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  
  console.log(user.studentstatus);

  // დავალება 6: 

  let user2 = {
    name: 'anna',
    age: 20,
    studentstatus: 'active'
};

if (user2.age < 18 && user2.studentstatus === 'active') {
    console.log('hello user');
} else if (user2.name === 'levan') {
    console.log('hello levani');
} else if (user2.studentstatus === 'active' || user2.age < 25) {
    console.log('hello anna');
} else {
    console.log('error');
}

// დავალება 7:

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
let evenNumbers = [];

for (let i = 0; i < array6.length; i++) {
    if (array6[i] % 2 === 0) {
        evenNumbers.push(array6[i]);
    }
}

console.log (evenNumbers);

// დავალება 8: 

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
];

for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        console.log(users[i]);
    }
}

// დავალება 9:

let array7 = [32, 14, null, '40', 50];
let multiplesOfFive = [];

for (let i = 0; i < array7.length; i++) {
    let number = array7[i];

    // დარწმუნდით, რომ number არის ციფრი და არა სტრინგი
    if (typeof number === 'number' && number % 5 === 0) {
        multiplesOfFive.push(number);
    } else if (typeof number === 'string') {
        // გარდაქმნეთ სტრინგი ციფრში და შეამოწმეთ
        let parsedNumber = parseFloat(number);
        if (!isNaN(parsedNumber) && parsedNumber % 5 === 0) {
            multiplesOfFive.push(parsedNumber);
        }
    }
}

console.log(multiplesOfFive);


// დავალება 10:

let array8 = [[2, -3, 5, 11], [1, -35, -11], [12, -36, -24]];

for (let i = 0; i < array8.length; i++) {
    for (let j = 0; j < array8[i].length; j++) {
        if (array8[i][j] > 0) {
            console.log(array8[i][j]);
        }
    }
}



  