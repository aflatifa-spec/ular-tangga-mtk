// Bank Soal Matematika
const quizBank = {
  quiz: [
    {
      q: "Akar-akar dari persamaan kuadrat x² - 5x + 6 = 0 adalah...",
      options: ["x = 2 dan x = 3", "x = -2 dan x = -3", "x = 1 dan x = 6", "x = -1 dan x = -6"],
      answer: 0
    },
    {
      q: "Bentuk pemfaktoran dari x² - 9 = 0 adalah...",
      options: ["(x - 3)(x - 3)", "(x + 3)(x - 3)", "(x + 9)(x - 1)", "(x - 9)(x + 1)"],
      answer: 1
    }
  ],
  super: [
    {
      q: "Sebuah lapangan berbentuk persegi panjang memiliki luas (x² + 7x + 12) m². Jika panjangnya (x + 4) m, maka lebarnya adalah...",
      options: ["(x + 3) m", "(x - 3) m", "(x + 2) m", "(x + 5) m"],
      answer: 0
    },
    {
      q: "Diskriminan dari persamaan kuadrat 2x² - 4x + 3 = 0 adalah...",
      options: ["-8", "8", "-24", "40"],
      answer: 0
    }
  ]
};

// Kalimat Motivasi & Resiliensi
const resilienceQuotes = [
  "Tidak apa-apa! Kesalahan adalah bukti bahwa kamu sedang belajar.",
  "Tetap semangat! Setiap mencoba, pemahamanmu tentang Matematika makin terasah.",
  "Jangan menyerah! Coba analisis kembali di giliran berikutnya ya!",
  "Kegagalan kecil adalah tangga menuju pemahaman yang lebih besar. Kamu pasti bisa!"
];

// Peta Ular & Tangga (Pangkal -> Ujung)
const snakesAndLadders = {
  // Tangga Naik
  14: 38,
  28: 55,
  50: 72,
  71: 92,
  // Ular Turun
  32: 10,
  48: 26,
  88: 52,
  95: 73
};

// Petak Khusus
const specialCells = {
  quiz: [5, 18, 33, 42, 57, 68, 83],
  super: [12, 39, 63, 77, 91],
  bonus: [8, 25, 45, 60, 85]
};

// State Aplikasi
let teams = [];
let currentTeamIndex = 0;

// Fungsi Inisialisasi Papan
function buildBoard() {
  const boardEl = document.getElementById('board');
  boardEl.innerHTML = '';

  for (let i = 100; i >= 1; i--) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.number = i;
    cell.innerText = i;

    // Klasifikasi Petak
    if (specialCells.quiz.includes(i)) cell.classList.add('cell-quiz');
    if (specialCells.super.includes(i)) cell.classList.add('cell-super');
    if (specialCells.bonus.includes(i)) cell.classList.add('cell-bonus');
    if (snakesAndLadders[i] && snakesAndLadders[i] < i) cell.classList.add('cell-snake');
    if (snakesAndLadders[i] && snakesAndLadders[i] > i) cell.classList.add('cell-ladder');

    boardEl.appendChild(cell);
  }
}