const jsonObject = {
    "name": "Ryz",
    "age": 19,
    "city": "Davao City",
    "hobbies": ["coding", "music", "reading"]
};

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);