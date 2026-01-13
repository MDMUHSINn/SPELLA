async function login() {
  const u = username.value;
  const p = password.value;

  const res = await fetch("users.json");
  const users = await res.json();

  const local = JSON.parse(localStorage.getItem("users")) || [];
  const all = users.concat(local);

  const ok = all.find(x => x.username === u && x.password === p);

  if (ok) location.href = "dashboard.html";
  else alert("Invalid login");
}

function signup() {
  const u = su_user.value;
  const p = su_pass.value;

  if (!u || !p) return alert("Fill all fields");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ username: u, password: p });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup saved in browser");
}
