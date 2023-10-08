//Contoh if,else,nested if

var nilaipraktikumBasisData = 80;
var nilaipraktikumPBO = 79;
var nilaipraktikumAlpro = 81;

if (nilaipraktikumBasisData >= 70) {
if (nilaipraktikumPBO >= 70) {
if (nilaipraktikumAlpro >= 70) {
    console.log("Selamat, Anda lulus semua praktikum!");
  } 
  else {
    console.log("Anda gagal dalam Alpro");
  }
 } else {
    console.log("Anda gagal dalam PBO");
 }
  } else {
    console.log("Anda gagal dalam Basis Data");
  }


//Contoh switch case

var Negara = "Korea";

switch (Negara) {
  case "Indonesia":
  case "Korea":
  case "Thailand":
    console.log("Ini merupakan negara asia.");
    break;
    case "Belanda":
    case "Australia":
    case "Prancis":
      console.log("Ini merupakan negara eropa.");
    break;
  default:
      console.log("Negara tidak terdefinisi.");
  }


//for statement 

  var manifesting = ["Jadi anak tunggal kaya raya", "Punya pulau pribadi", "Dia juga suka aku", "Punya Mercedes Benz AMG G65", "Jadi bos"];
  console.log("Aku dimasa depan:");

  for (var i = 0; i < manifesting.length; i++) {
  console.log((i + 1) + ". " + manifesting[i]);
  }

//Contoh while

  var namaPenyanyiLagu = [];
  var namaPenyanyi, namaLagu;

  console.log("Masukkan nama penyanyi dan lagu favorit Anda (ketik 'wokeh' untuk berhenti):");

  while (true) {
    namaPenyanyi = prompt("Nama Penyanyi: ");
    if (namaPenyanyi.toLowerCase() === 'wokeh') {
      break;
    }

    namaLagu = prompt("Judul lagu favorit dari " + namaPenyanyi + ": ");
    if (namaLagu.toLowerCase() === 'wokeh') {
      break;
    }

    namaPenyanyiLagu.push(namaPenyanyi + " - " + namaLagu);
  }

  console.log("Daftar Penyanyi dan lagu favorit Anda:");
  for (var i = 0; i < namaPenyanyiLagu.length; i++) {
    console.log((i + 1) + ". " + namaPenyanyiLagu[i]);
  }

  //Contoh do while 

  var namaPenyanyiLagu = [];
  var namaPenyanyi, namaLagu;

  console.log("Masukkan nama penyanyi dan lagu favorit Anda (ketik 'wokeh' untuk berhenti):");

  do {
    namaPenyanyi = prompt("Nama Penyanyi: ");
    if (namaPenyanyi.toLowerCase() === 'wokeh') {
      break;
    }

    namaLagu = prompt("Judul lagu favorit dari " + namaPenyanyi + ": ");
    if (namaLagu.toLowerCase() === 'wokeh') {
      break;
    }

    namaPenyanyiLagu.push(namaPenyanyi + " - " + namaLagu);
  } while (true);

  console.log("Daftar Penyanyi dan lagu favorit Anda:");
  for (var i = 0; i < namaPenyanyiLagu.length; i++) {
    console.log((i + 1) + ". " + namaPenyanyiLagu[i]);
  }

//Contoh Function

function hitungKalori(makanan, jumlah) {
  var kaloriPer100Gram = {
    brokoli: 34,
    mangga: 61,
    nilagoreng: 140,
    martabak: 146
  };

  if (kaloriPer100Gram[makanan]) {
    var kaloriTotal = (kaloriPer100Gram[makanan] / 100) * jumlah;
    return kaloriTotal;
  } else {
    return "Makanan tidak ditemukan dalam daftar.";
  }
}

var makanan = "nilagoreng";
var jumlah = 150; 
var totalKalori = hitungKalori(makanan, jumlah);

if (typeof totalKalori === "number") {
  console.log("Anda mengonsumsi " + makanan + " sebanyak " + jumlah + " gram.");
  console.log("Total kalori yang Anda konsumsi adalah: " + totalKalori + " kalori.");
} else {
  console.log(totalKalori);
}