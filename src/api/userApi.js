// API Proxy
const userUrl = "http://localhost:3001/users";

function createStandardResponse(errorStmt) {
  return function(res) {
    if (res.ok) return res.json();
    throw new Error(errorStmt);
  };
}

export function getUsers() {
  return fetch(userUrl).then(createStandardResponse("GET was not OK"));
}

export function getUser(userId) {
  return fetch(`${userUrl}/${userId}`).then(
    createStandardResponse(`Could not get the User with Id: ${userId}`)
  );
}

export function deleteUser(id) {
  return fetch(`${userUrl}/${id}`, { method: "DELETE" }).then(
    createStandardResponse("DELETE was not OK")
  );
}

export function postUser(user) {
  return fetch(`${userUrl}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  }).then(createStandardResponse("POST was not OK"));
}

export async function putUser(user) {
  const putResponse = await fetch(`${userUrl}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  if (putResponse.ok) return putResponse.json();
  throw new Error("PUT failed!");
}
