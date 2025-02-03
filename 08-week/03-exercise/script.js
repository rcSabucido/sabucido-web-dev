fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const userDataDiv = document.querySelector('#userData');
        
        userDataDiv.textContent = `
            Name: ${user.name.first} ${user.name.last}
            Age: ${user.dob.age}
            Email: ${user.email}
            City: ${user.location.city}
            `;
    })
    .catch(error => console.error(error));