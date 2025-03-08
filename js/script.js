// Menampilkan nama pengunjung di home
const visitorName = prompt("Masukkan nama Anda:");
document.getElementById("visitor-name").textContent = visitorName || "Pengunjung";

//Carousel image slide sources w3school.com
//automatic slide
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
//manual slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

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

