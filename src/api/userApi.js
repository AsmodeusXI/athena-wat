// API Proxy
const userUrl = "http://localhost:3001/users";

export function getUsers() {
  return fetch(userUrl).then(res => {
    if (res.ok) return res.json();
    throw new Error("Response was not okay!");
  });
}

export function deleteUser(id) {
  return fetch(`${userUrl}/${id}`, { method: "DELETE" }).then(res => {
    if (res.ok) return res.json();
    throw new Error("Delete failed!");
  });
}
