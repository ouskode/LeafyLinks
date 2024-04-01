export default async function getLocationUser() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/locations", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function getLocationById(id: { toString: () => string; }) {
    const requestOptions = {
        method: "GET",
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/locations/"+id, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function getLocationByIdLocation(idLocation: { toString: () => string; }) {
    const requestOptions = {
        method: "GET",
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/locations/"+idLocation, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function getLocationByUserId(idUser: { toString: () => string; }) {
    const requestOptions = {
        method: "GET",
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/locations/user/"+idUser, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function createLocation(idLocation: { toString: () => string; }, name:string, lat: bigint, lng:bigint, address: string, ispublic:boolean ) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        "name": name,
        "lat": lat,
        "lng": lng,
        "address": address,
        "public": ispublic,
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/locations", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function editLocation(idLocation: { toString: () => string; }, name:string, lat: bigint, lng:bigint, address: string, ispublic:boolean ) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        "name": name,
        "lat": lat,
        "lng": lng,
        "address": address,
        "public": ispublic,
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/locations/"+idLocation, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function deleteLocation(idLocation: { toString: () => string; }) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/locations/"+idLocation, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}