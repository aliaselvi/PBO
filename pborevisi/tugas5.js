// Class utama Kapal
class Kapal { 
    constructor(nama, jenis, tahun, kapasitas) {
        this.nama = nama;
        this.jenis = jenis;
        this.tahun = tahun;
        this.kapasitas = kapasitas; // dalam ton
    }

    infoKapal() {
        return `Kapal ${this.nama} adalah jenis ${this.jenis}, diproduksi pada tahun ${this.tahun}, dengan kapasitas ${this.kapasitas} ton.`;
    }
}

// Subclass KapalKargo
class KapalKargo extends Kapal {
    constructor(nama, jenis, tahun, kapasitas, jenisMuatan) {
        super(nama, jenis, tahun, kapasitas);
        this.jenisMuatan = jenisMuatan; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini membawa muatan berupa ${this.jenisMuatan}.`;
    }
}

// Subclass KapalPenumpang
class KapalPenumpang extends Kapal {
    constructor(nama, jenis, tahun, kapasitas, jumlahPenumpang) {
        super(nama, jenis, tahun, kapasitas);
        this.jumlahPenumpang = jumlahPenumpang; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat menampung ${this.jumlahPenumpang} penumpang.`;
    }
}

// Subclass KapalPerang
class KapalPerang extends Kapal {
    constructor(nama, jenis, tahun, kapasitas, persenjataan) {
        super(nama, jenis, tahun, kapasitas);
        this.persenjataan = persenjataan; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dipersenjatai dengan ${this.persenjataan}.`;
    }
}

// Subclass KapalLautDalam
class KapalLautDalam extends Kapal {
    constructor(nama, jenis, tahun, kapasitas, kedalamanMaks) {
        super(nama, jenis, tahun, kapasitas);
        this.kedalamanMaks = kedalamanMaks; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat menyelam hingga kedalaman maksimum ${this.kedalamanMaks} meter.`;
    }
}

// Polimorfisme
const kapalKargo = new KapalKargo("CargoMax", "Kargo", 2015, 5000, "barang kontainer");
const kapalPenumpang = new KapalPenumpang("SeaStar", "Penumpang", 2020, 15000, 2000);
const kapalPerang = new KapalPerang("DestroyerX", "Perang", 2018, 3000, "meriam dan rudal");
const kapalLautDalam = new KapalLautDalam("DeepExplorer", "Laut Dalam", 2022, 2000, 500);

// Daftar kapal
const kapalList = [kapalKargo, kapalPenumpang, kapalPerang, kapalLautDalam];

// Menampilkan informasi dengan polimorfisme
kapalList.forEach(kapal => {
    console.log(kapal.infoKapal());
});
