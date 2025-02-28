document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); 

   
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!username ) {
            errorMessage.textContent = "Username required!";
            return;
        }
        if( !password){
            errorMessage.textContent = "Password required!";
            return;
        }

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Login success!");
                window.location.href = "dashboard.html";
            } else {
                errorMessage.textContent = result.message;
            }
        } catch (error) {
            errorMessage.textContent = "Internal Server Error";
        }
    });
});
