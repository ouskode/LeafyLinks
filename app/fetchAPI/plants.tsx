export default async function getPlants() {
    var requestOptions = {
        method: 'GET',
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/plants", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function getPlantById(id: { toString: () => string; }) {
    var requestOptions = {
        method: 'GET',
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/plants/"+id, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function createPlant(location_id:any, trefle_id:any, name: any, desc:any, image:any) {
    var requestOptions = {
        method: 'POST',
        headers: {
            "location_id": location_id,
            "trefle_id": trefle_id,
            "name": name,
            "desc": desc,
            "image": image,
        }
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/plants", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function editPlant(id: { toString: () => string; }, location_id:any, trefle_id:any, name: any, desc:any){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
            "location_id":location_id,
            "trefle_id":trefle_id,
            "name": name,
            "desc": desc,
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/plants/"+id, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function deletePlant(id: { toString: () => string; }){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/plants/"+id, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function getPlantByLocation(idLocation: { toString: () => string; }){
    const requestOptions = {
        method: "GET",
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/plants/"+idLocation, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function getPlantsComment(id: { toString: () => string; }){
    const requestOptions = {
        method: "GET",
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/plant/"+id+"/comment", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function searchPlant(query:any,limit:any) {
    var requestOptions = {
        method: 'GET',
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/plants/search/query="+query+"&limit="+limit, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}