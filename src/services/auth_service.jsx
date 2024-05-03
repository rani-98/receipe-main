function SignupService(userData) {
    // userData -> {username: "username", password: "password"}

    const formData = new FormData();

    formData.append("username", userData.username);
    formData.append("password", userData.password);

    const url = "https://widespread-mellisent-vj0.koyeb.app/signup"
    return fetch(url , {
        method: "POST",
        body: formData,
    })
}