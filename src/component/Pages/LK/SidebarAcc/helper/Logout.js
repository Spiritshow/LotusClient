const Logout = () => {
    fetch('http://localhost:3000/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            withCredentials: true,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при создании компании и заказа');
            }
            return response.json();
        })
        .then(  
            localStorage.clear()
        )
        .catch(error => {
            console.error('Ошибка при отправке:', error);
        });
}

export default Logout;