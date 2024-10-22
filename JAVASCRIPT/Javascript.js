function updateName() {
    // Get the value from the input field
    const name = document.getElementById("nameInput").value;

    // Check if the name is empty, if not update the span
    if (name.trim()) {
        document.getElementById("userName").textContent = name;
    } else {
        alert("Masukkan nama yang valid.");
    }
}

document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tanggal = document.getElementById("tanggal").value;
    const message = document.getElementById("message").value;
    const errorMsg = document.getElementById("errorMsg");
    const output = document.getElementById("output");

    if (name === "" || email === "" || tanggal === "" || message === "") {
        errorMsg.textContent = "Semua kolom harus diisi!";
    } else {
        errorMsg.textContent = "";
        output.innerHTML = `
                <h3>Data Terkirim:</h3>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
                <p><strong>Pesan:</strong> ${message}</p>
            `;
    }
});
