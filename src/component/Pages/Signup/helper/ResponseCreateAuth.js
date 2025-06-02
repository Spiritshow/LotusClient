const ResponseCreateAuth = async (email, password, idcompany) => {
  const res = await fetch("http://localhost:3000/CreateAuthCompany", {
    method: "POST",
    credentials: "include", // для передачи HttpOnly refresh-токена
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, idcompany }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Ошибка входа");
  }

  const accessToken = data.accessToken; // сохраняем accessToken в оперативной памяти
  const idClient = data.idClient;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("idClient", idClient);
  return idClient;
};

export default ResponseCreateAuth;