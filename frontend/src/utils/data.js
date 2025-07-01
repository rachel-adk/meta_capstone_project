const BASE_URL = "http://localhost:5173";

// fetching medical history for user
export async function getMedicalHistory(userId) {
    const url = new URL(`${BASE_URL}/med_history`);
    try {
        const res = await fetch(url.toString());
        if (!res.ok) {
            throw new Error(`Something went wrong: ${res.status}`);
    }
    return await res.json();
} catch (err) {
    console.error(err);
}
}

// adding entries to medical history
export async function newMedicalEntry(data, userId) {
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
