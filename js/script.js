// Menampilkan nama pengunjung di home
const visitorName = prompt("Masukkan nama Anda:");
document.getElementById("visitor-name").textContent = visitorName || "Pengunjung";

// Carousel otomatis
let currentIndex = 0;
const slidesContainer = document.querySelector(".carousel");

const imageUrls = [
    "assets/image1.jpg",
    "assets/image2.jpg",
    "assets/image3.jpg"
];

imageUrls.forEach((url, index) => {
    const img = document.createElement("img");
    img.src = url;
    img.classList.add("slide");
    img.alt = `Gambar ${index + 1}`;
    img.style.width = "100%";
    img.style.height = "auto";
    slidesContainer.appendChild(img);
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;
    
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
});
// Set default tanggal lahir ke hari ini
const today = new Date().toISOString().split('T')[0];
document.getElementById("birthdate").value = today;

// Validasi dan submit form
const form = document.getElementById("message-form");
const output = document.getElementById("output");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const messageText = document.getElementById("message-text").value.trim();
    
    if (!name || !birthdate) {
        alert("Nama dan Tanggal Lahir harus diisi!");
        return;
    }
    
    output.innerHTML = `<p><strong>Nama:</strong> ${name}</p>
                        <p><strong>Tanggal Lahir:</strong> ${formatTanggal(birthdate)}</p>
                        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
                        <p><strong>Pesan:</strong> ${messageText}</p>`;
    
    form.reset();

    // Fungsi untuk format tanggal ke DD-Month-YYYY
    function formatTanggal(tanggal) {
        let options = { day: "2-digit", month: "long", year: "numeric" };
                return new Date(tanggal).toLocaleDateString("en-GB", options).replace(" ", "-");
    }
});

