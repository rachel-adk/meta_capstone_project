const BASE_URL = "http://localhost:3000";

// signing up
export async function signup(username, password) {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });
  return await res.json();
}

// logging in user
export async function login() {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });
  return await res.json();
}

// confirming user is logged in
export async function getCurrentUser() {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "GET",
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });
  data = await res.json();
  return data;
}

// logging the user out
export async function logout() {
  const res = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.status}`);
  }
  return await res.json();
}

//fetching data from dashboard for user
export async function getDashboard() {
  const res = await fetch(`${BASE_URL}/dashboard`, {
    method: "GET",
    credentials: "include",
  });
  return await res.json();
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
export async function newMedicalEntry(entry) {
  const res = await fetch(`${BASE_URL}/med_history`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(entry),
  });
  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.status}`);
  }
  return await res.json();
}

// fetching symptoms logs for user
export async function getSymptomLogs() {
    const res = await fetch(`${BASE_URL}/symptoms`, {
      method: "GET",
      credentials: "include",
    });
    return await res.json();
  }

// adding entries to symptoms logs
export async function newSymptomLog(log) {
    const res = await fetch(`${BASE_URL}/symptoms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(log),
    });
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);
    }
    return await res.json();
  }

  // fetching allergy logs for user
export async function getAllergyLogs() {
  const res = await fetch(`${BASE_URL}/allergies`, {
    method: "GET",
    credentials: "include",
  });
  return await res.json();
}

// adding entries to allergy logs
export async function newAllergyLog(log) {
  const res = await fetch(`${BASE_URL}/allergies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(log),
  });
  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.status}`);
  }
  return await res.json();
}

// fetching member profile for user
export async function getUserProfile() {
  const res = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.status}`);
  }
  return await res.json();
}

// adding/updating entries to member profile
export async function saveProfile(data) {
  const res = await fetch(`${BASE_URL}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.status}`);
  }
  return await res.json();
}

// updating entries to member profile
export async function patchProfile(data) {
  const res = await fetch(`${BASE_URL}/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.status}`);
  }
  return await res.json();
}

// getting diagnosis for user
export async function getDiagnosis(userData) {
  const res = await fetch(`${BASE_URL}/diagnosis`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.status}`);
  }
  return await res.json();
}
