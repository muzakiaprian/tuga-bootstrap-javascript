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


const tabelNilai = document.getElementById("tabelNilai");
const tabelIPK = document.getElementById("tabelIPK");


function tampilkanNilai(data) {
    tabelNilai.innerHTML = "";

    data.forEach(function(item, index) {

        const baris = document.createElement("tr");

        baris.innerHTML = `
            <td>${index + 1}</td>
            <td class="text-start">${item.nama}</td>
            <td class="nilai">${item.nilai}</td>
        `;

        tabelNilai.appendChild(baris);
    });
}


function tampilkanIPK() {
    tabelIPK.innerHTML = "";

    dataIPK.forEach(function(item) {

        const baris = document.createElement("tr");

        baris.innerHTML = `
            <td>Semester ${item.semester}</td>
            <td class="nilai">${item.ipk}</td>
        `;

        tabelIPK.appendChild(baris);
    });
}


tampilkanNilai(mataKuliah);
tampilkanIPK();


// Pencarian mata kuliah
const cari = document.getElementById("cari");

cari.addEventListener("input", function() {

    const kataKunci = cari.value.toLowerCase();

    const hasil = mataKuliah.filter(function(item) {
        return item.nama.toLowerCase().includes(kataKunci);
    });

    tampilkanNilai(hasil);
});


// Tombol tampil/sembunyikan IPK
const tombolIPK = document.getElementById("tombolIPK");
const dataIPKElement = document.getElementById("dataIPK");

tombolIPK.addEventListener("click", function() {

    dataIPKElement.classList.toggle("sembunyi");

    if (dataIPKElement.classList.contains("sembunyi")) {
        tombolIPK.textContent = "Tampilkan IPK";
    } else {
        tombolIPK.textContent = "Sembunyikan IPK";
    }

});


// Form tambah mata kuliah
const formNilai = document.getElementById("formNilai");
const namaMataKuliah = document.getElementById("namaMataKuliah");
const nilaiMataKuliah = document.getElementById("nilaiMataKuliah");
const pesanError = document.getElementById("pesanError");

formNilai.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = namaMataKuliah.value.trim();
    const nilai = nilaiMataKuliah.value;

    if (nama === "" || nilai === "") {

        pesanError.classList.remove("error");
        pesanError.textContent = "Nama mata kuliah dan nilai harus diisi.";

        return;
    }

    mataKuliah.push({
        nama: nama,
        nilai: nilai
    });

    pesanError.classList.add("error");

    tampilkanNilai(mataKuliah);

    formNilai.reset();
});