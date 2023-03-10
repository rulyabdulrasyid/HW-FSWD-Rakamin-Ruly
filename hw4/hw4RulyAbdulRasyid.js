//  Deklarasi Array 100 bilangan random (1 - 50)
let arrayBilanganRandom = [];
let arrayGenap = [];
let arrayGanjil = [];

// Pengulangan pengisian array
for (let iterasi = 1; iterasi <= 100; iterasi++) {
  let bilRandom = Math.floor(Math.random() * 50) + 1;
  arrayBilanganRandom.push(bilRandom);
}
console.log("Array Bilangan Random");
console.log(arrayBilanganRandom);

// Cek Banyak angka pada array
console.log("Jumlah Angka pd Array = " + arrayBilanganRandom.length);

// Pecah ke Array index ganjil dan genap
for (let nomerIndex = 0; nomerIndex < arrayBilanganRandom.length; nomerIndex++) {
  if (nomerIndex % 2 === 0) {
    arrayGenap.push(arrayBilanganRandom[nomerIndex]);
  } else {
    arrayGanjil.push(arrayBilanganRandom[nomerIndex]);
  }
}
console.log("Array Genap");
console.log(arrayGenap);
console.log("Array Ganjil");
console.log(arrayGanjil);

// Nilai Min
function nilaiMin(tipeArray) {
  var min = tipeArray[0];
  for (var i in tipeArray) {
    if (tipeArray[i] < min) {
      min = tipeArray[i];
    }
  }
  return min;
}

// Nilai Max
function nilaiMax(tipeArray) {
  var max = tipeArray[0];
  for (var i in tipeArray) {
    if (tipeArray[i] > max) {
      max = tipeArray[i];
    }
  }
  return max;
}

// Total Nilai pd Array dan rerata
function totalNilaiArray(tipeArray) {
  var total = 0;
  for (let i = 0; i < tipeArray.length; i++) {
    total += tipeArray[i];
  }

  return total;
}

// Rata-rata Nilai pd Array
function averageNilaiArray(tipeArray) {
  let average = 0;
  for (let i = 0; i < tipeArray.length; i++) {
    average += tipeArray[i] / tipeArray.length;
  }
  return average;
}

// compare MIN
function compereNilai(genap, ganjil) {
  if (genap > ganjil) {
    return "genap lebih besar = " + genap;
  } else if (genap < ganjil) {
    return "ganjil lebih besar = " + ganjil;
  } else {
    return "genap dan ganjil sama besar = " + genap || ganjil;
  }
}

console.log("Nilai MIN pada array Genap adalah");
console.log(nilaiMin(arrayGenap));
console.log("Nilai MIN pada array Ganjil adalah");
console.log(nilaiMin(arrayGanjil));
console.log("Nilai MAX pada array Genap adalah");
console.log(nilaiMax(arrayGenap));
console.log("Nilai MAX pada array Ganjil adalah");
console.log(nilaiMax(arrayGanjil));
console.log("Total Nilai pada array Genap adalah");
console.log(totalNilaiArray(arrayGenap));
console.log("Total Nilai pada array Ganjil adalah");
console.log(totalNilaiArray(arrayGanjil));
console.log("Rata-rata nilai pada array Genap adalah");
console.log(averageNilaiArray(arrayGenap));
console.log("Rata-rata nilai pada array Ganjil adalah");
console.log(averageNilaiArray(arrayGanjil));

console.log("Compare Nilai");
console.log("Nilai MIN " + compereNilai(nilaiMin(arrayGenap), nilaiMin(arrayGanjil)));
console.log("Nilai MAX " + compereNilai(nilaiMax(arrayGenap), nilaiMax(arrayGanjil)));
console.log("Total Nilai " + compereNilai(totalNilaiArray(arrayGenap), totalNilaiArray(arrayGanjil)));
console.log("Nilai Rata-rata " + compereNilai(averageNilaiArray(arrayGenap), averageNilaiArray(arrayGanjil)));
