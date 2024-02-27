export default async function getUsers() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/users/me", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function getUser(id: { toString: () => string; }) {
    var requestOptions = {
        method: 'GET',
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/users/" + id, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}