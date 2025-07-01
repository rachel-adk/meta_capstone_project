const BASE_URL = "http://localhost:3000";

// signing up
export async function signup(username, password) {

    const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password })
    });
    return await res.json();
}



// logging in user
export async function login() {
    const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password })
    });
    return await res.json();
}

// confirming user is logged in
export async function getCurrentUser() {
    const res = await fetch(`${BASE_URL}/signup`, {
        method: "GET",
        credentials: "include",
        body: JSON.stringify({ username, password })
    });
    data = await res.json();
    return data;
}




// fetching medical history for user
export async function getMedicalHistory() {
    const res = await fetch(`${BASE_URL}/med_history`, {
        method: "GET",
        credentials: "include",
    });
    return await res.json();

}

// adding entries to medical history
export async function newMedicalEntry(data) {
    const url = new URL(`${BASE_URL}/med_history`);
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error(`Something went wrong: ${res.status}`);
        }
        const json = await res.json();
        console.log(json);
    } catch(error) {
        console.error(error);
    }
}
