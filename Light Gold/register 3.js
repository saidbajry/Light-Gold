function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Kata sandi tidak cocok!";
        return false;
    }

    // Tambahkan logika untuk menyimpan data pengguna di sini

    alert("Pendaftaran berhasil!");
    return true; // Mengizinkan form untuk disubmit
}