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

export function deleteUser(id) {
  return fetch(`${userUrl}/${id}`, { method: "DELETE" }).then(
    createStandardResponse("DELETE was not OK")
  );
}

export function postUser(body) {
  return fetch(`${userUrl}`, { method: "POST" }).then(
    createStandardResponse("Failed to POST new user")
  );
}
