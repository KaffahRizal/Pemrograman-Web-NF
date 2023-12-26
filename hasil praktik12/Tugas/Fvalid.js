document.getElementById("formValidasi").addEventListener("submit", function(event) {
    event.preventDefault(); // menghentikan aksi default dari form
   
    var namaPelanggan = document.getElementById("namaPelanggan").value;
    var email = document.getElementById("email").value;
    var jamKeberangkatan = document.getElementById("jamKeberangkatan").value;
    var tujuanKeberangkatan = document.getElementById("tujuanKeberangkatan").value;
    var jumlahTiket = document.getElementById("jumlahTiket").value;
   
    // Validasi nama pelanggan
    if(namaPelanggan.length > 30) {
       document.getElementById("errorNama").textContent = "Nama tidak boleh melebihi 30 karakter";
       document.getElementById("errorNama").style.color = "red";
    } else {
       document.getElementById("errorNama").textContent = "";
    }
   
    // Validasi email
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!pattern.test(email)) {
       document.getElementById("errorEmail").textContent = "Format email tidak valid";
       document.getElementById("errorEmail").style.color = "red";
    } else {
       document.getElementById("errorEmail").textContent = "";
    }
   
    // Validasi jam keberangkatan
    var jam = jamKeberangkatan.split(":")[0];
    var menit = jamKeberangkatan.split(":")[1];
    if(jam < 0 || jam > 23 || menit < 0 || menit > 59) {
       document.getElementById("errorJam").textContent = "Jam keberangkatan tidak valid";
       document.getElementById("errorJam").style.color = "red";

      // tapi sebenernya gk usah si soalnya dri pilihan di web nya gk mungkin pilih jam 25.00

    } else {
       document.getElementById("errorJam").textContent = "";
    }
   
    // Validasi tujuan keberangkatan
    if(tujuanKeberangkatan.trim() === "") {
       document.getElementById("errorTujuan").textContent = "Tujuan keberangkatan tidak boleh kosong";
       document.getElementById("errorTujuan").style.color = "red";
    } else {
       document.getElementById("errorTujuan").textContent = "";
    }
   
    // Validasi jumlah tiket
    if(jumlahTiket < 1 || jumlahTiket > 10) {
       document.getElementById("errorJumlah").textContent = "Jumlah tiket harus antara 1 dan 10";
       document.getElementById("errorJumlah").style.color = "red";
    } else {
       document.getElementById("errorJumlah").textContent = "";
    }
   
    // Jika semua validasi berhasil, tampilkan data yang divalidasi
    if(document.getElementById("errorNama").textContent === "" &&
       document.getElementById("errorEmail").textContent === "" &&
       document.getElementById("errorJam").textContent === "" &&
       document.getElementById("errorTujuan").textContent === "" &&
       document.getElementById("errorJumlah").textContent === "") {
   
       var dataValid = "Nama Pelanggan: " + namaPelanggan + "\n";
       dataValid += "Email: " + email + "\n";
       dataValid += "Jam Keberangkatan: " + jamKeberangkatan + "\n";
       dataValid += "Tujuan Keberangkatan: " + tujuanKeberangkatan + "\n";
       dataValid += "Jumlah Tiket: " + jumlahTiket;
   
       document.getElementById("dataValid").textContent = dataValid;
       document.getElementById("dataValid").style.whiteSpace = "pre-wrap";
    }
   });