export async function getLocationUser() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch("https://leafylinks.maxim-le-cookie.fr/api/locations/user", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}