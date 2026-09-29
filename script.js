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


function hitungRataRata(data) {
    let total = 0;

    for (const item of data) {
        total += item.ipk;
    }

    return total / data.length;
}


function cariNilaiBagus(data) {
    for (const item of data) {
        if (item.nilai === "A" || item.nilai === "A-") {
            console.log(item.nama + " - Nilai: " + item.nilai);
        }
    }
}


console.log("=== DATA NILAI ===");

for (const item of mataKuliah) {
    console.log(item.nama + " - " + item.nilai);
}


console.log("=== RATA-RATA IPK ===");

const rataRata = hitungRataRata(dataIPK);

console.log(rataRata.toFixed(2));


console.log("=== NILAI A DAN A- ===");

cariNilaiBagus(mataKuliah);


console.log("=== STATUS IPK ===");

for (const item of dataIPK) {
    if (item.ipk >= 3.50) {
        console.log("Semester " + item.semester + ": IPK Baik");
    } else {
        console.log("Semester " + item.semester + ": Perlu ditingkatkan");
    }
}