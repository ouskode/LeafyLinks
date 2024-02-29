export default async function getComment(idComment: { toString: () => string; }) {
    var requestOptions = {
        method: 'GET',
    };

    return await fetch("https://leafylinks.maxim-le-cookie.fr/api/comments/"+idComment, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function createComments(comment:string, plant_id:bigint ) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        "comment":comment,
        "plant_id":plant_id,
    };

    fetch("https://leafylinks.maxim-le-cookie.fr/api/comments", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function editComments(idComment: { toString: () => string; },comment:string) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        "comment":comment,
    };

    fetch("https://leafylinks.maxim-le-cookie.fr/api/comments/"+idComment, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export async function deleteComments(idComment: { toString: () => string; } ) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1|uWKAFpgmX5yOpganFyQyOK7HHjCXVRPzfGybOAtp82701a14");

    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
    };

    fetch("https://leafylinks.maxim-le-cookie.fr/api/comments/"+idComment, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}