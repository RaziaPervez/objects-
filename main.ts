interface student {
    name: string;
    age: number;
    address: string;
    rollno: number;
    city: string;
    country: string;
}

let studentData:student[]=[
    { name: "RAZIA", 
    age: 18, 
    address: "Hno 155",
    rollno: 101,
    city: "Karachi",
    country: "Pakistan" },
    
    { name: "ISHA", 
    age: 17, 
    address: "Hno E1",
    rollno: 102,
    city: "Karachi",
    country: "Pakistan" },

    { name: "Ayesha", 
    age: 25, 
    address: "456 Street",
    rollno: 103,
    city: "Karachi",
    country: "Pakistan" },

    { name: "Warda", 
    age: 26, 
    address: "Street 45",
    rollno: 104,
    city: "Karachi",
    country: "Pakistan" }
];
console.log(studentData[0],studentData[3])
