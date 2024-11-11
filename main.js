document.addEventListener('DOMContentLoaded', () => {
    fetchUser();
});

function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.error('Error fetching user:', error));
}

function displayUser(user) {
    const userCard = document.getElementById('user-card');

    userCard.innerHTML = `
        <img src="${user.picture.large}" alt="Profile Picture" class="profile-image">
        <div class="user-info">
            <span class="username">${user.login.username}</span>
            <span>Name: ${user.name.first} ${user.name.last}</span>
            <span>Email: ${user.email}</span>
            <span>City: ${user.location.city}</span>
            <span>Country: ${user.location.country}</span>
            <span>Password: ${user.login.password}</span>
        </div>
    `;
}
