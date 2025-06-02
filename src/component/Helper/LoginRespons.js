const loginResponse = async (email, password) => {
  const res = await fetch("http://localhost:3000/loginClient", {
    method: "POST",
    credentials: "include", // для передачи HttpOnly refresh-токена
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Ошибка входа");
  }

  const accessToken = data.accessToken; // сохраняем accessToken в оперативной памяти
  const idClient = data.idClient;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("idClient", idClient);
  return accessToken;
};

export default loginResponse;