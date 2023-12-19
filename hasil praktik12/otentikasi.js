function auth(){
    const username = "kaffah"
    const password = "12345678"

    // tangkap input User
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value

    if (username == userInput && password == passwordInput){
        alert("Login berhasil..!")
        document.location = "home.html"
    }   else{
        alert("Login gagal..!")
    }
}