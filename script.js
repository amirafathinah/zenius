const questions = [
  {
    text: "Dari pilihan berikut, aktivitas mana yang paling menarik buatmu?",
    options: [
      "Menulis artikel atau naskah",
      "Mengatur strategi bisnis",
      "Menganalisis data atau grafik",
      "Membuat ilustrasi atau desain",
      "Membantu orang lain memecahkan masalah pribadi"
    ]
  }
];

let currentIndex = 0;

// Ambil elemen
const questionText = document.querySelector(".soal-left p");
const questionTitle = document.querySelector(".soal-left h3");
const optionsContainer = document.querySelector(".options");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.getElementById("progressText");
const nextBtn = document.querySelector(".next-btn");

// Fungsi untuk load soal
function loadQuestion(index) {
  questionTitle.textContent = "Pertanyaan " + (index + 1);
  questionText.textContent = questions[index].text;
  optionsContainer.innerHTML = "";

  questions[index].options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option";

    btn.onclick = () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      btn.classList.add("selected");
    };

    optionsContainer.appendChild(btn);
  });

  let progress = ((index + 1) / questions.length) * 100;
  progressFill.style.width = progress + "%";
  progressText.textContent = Math.round(progress) + "%";
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  } else {
    alert("Tes selesai! 🎉");
  }
});

loadQuestion(currentIndex);
