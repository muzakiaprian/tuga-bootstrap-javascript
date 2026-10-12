// Data mata kuliah dalam bentuk array of object
const mataKuliah = [
    {
        nama: "Pengembangan Sistem Berbasis Web",
        nilai: "A"
    },
    {
        nama: "Sistem Enterprise",
        nilai: "A-"
    },
    {
        nama: "Desain Jaringan Komputer dan Komunikasi Data",
        nilai: "B+"
    },
    {
        nama: "Rekayasa Kebutuhan Perangkat Lunak",
        nilai: "A-"
    },
    {
        nama: "Manajemen Data dan Keamanan Siber",
        nilai: "B+"
    },
    {
        nama: "Manajemen Sistem Informasi",
        nilai: "A"
    },
    {
        nama: "Aljabar Linier",
        nilai: "B"
    }
];

// Data IPK
const dataIPK = [
    {
        semester: 1,
        ipk: 3.65
    },
    {
        semester: 2,
        ipk: 3.72
    },
    {
        semester: 3,
        ipk: 3.78
    }
];

// Menampilkan data nilai menggunakan DOM
function tampilkanNilai(data) {
    const tabelNilai = document.getElementById("tabelNilai");

    tabelNilai.innerHTML = "";

    data.forEach(function (item, index) {
        const baris = document.createElement("tr");

        baris.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>${item.nilai}</td>
        `;

        tabelNilai.appendChild(baris);
    });
}

// Menampilkan data IPK menggunakan DOM
function tampilkanIPK() {
    const tabelIPK = document.getElementById("tabelIPK");

    tabelIPK.innerHTML = "";

    dataIPK.forEach(function (item) {
        const baris = document.createElement("tr");

        baris.innerHTML = `
            <td>Semester ${item.semester}</td>
            <td>${item.ipk}</td>
        `;

        tabelIPK.appendChild(baris);
    });
}

// Menampilkan data saat halaman dibuka
tampilkanNilai(mataKuliah);
tampilkanIPK();


// INTERAKSI 1: Pencarian mata kuliah
const cari = document.getElementById("cari");

cari.addEventListener("input", function () {
    const kataKunci = cari.value.toLowerCase();

    const hasil = mataKuliah.filter(function (item) {
        return item.nama.toLowerCase().includes(kataKunci);
    });

    tampilkanNilai(hasil);
});


// INTERAKSI 2: Tambah data dan validasi form
const formNilai = document.getElementById("formNilai");
const namaMataKuliah = document.getElementById("namaMataKuliah");
const nilaiMataKuliah = document.getElementById("nilaiMataKuliah");
const pesanError = document.getElementById("pesanError");

formNilai.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaMataKuliah.value.trim();
    const nilai = nilaiMataKuliah.value;

    // Validasi input
    if (nama === "" || nilai === "") {
        pesanError.classList.add("error");
        pesanError.textContent = "Nama mata kuliah dan nilai harus diisi.";
        return;
    }

    // Menambahkan data baru ke array
    mataKuliah.push({
        nama: nama,
        nilai: nilai
    });

    pesanError.classList.remove("error");
    pesanError.textContent = "Data berhasil ditambahkan.";

    tampilkanNilai(mataKuliah);

    formNilai.reset();
});


// INTERAKSI 3 + FITUR JQUERY:
// Tombol untuk menampilkan dan menyembunyikan data IPK
$(function () {

    $("#dataIPK").hide();

    $("#tombolIPK").on("click", function () {

        $("#dataIPK").slideToggle(300);

        if ($(this).text() === "Tampilkan IPK") {
            $(this).text("Sembunyikan IPK");
        } else {
            $(this).text("Tampilkan IPK");
        }
    });

});