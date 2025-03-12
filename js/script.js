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
document.getElementById("male").checked = true;
// Validasi dan submit form
const form = document.getElementById("message-form");
const output = document.getElementById("output");

// validasi on focus type input nama
const nama = document.getElementById('name');

nama.addEventListener('click', (e)=>{
  e.preventDefault();
  const namaOutput = document.getElementById("nama_output");
  const tgllhrOutput = document.getElementById("tgllhr_output");
  const kelaminOutput = document.getElementById("kelamin_output");
  const pesanOutput = document.getElementById("pesan_output");
      namaOutput.innerHTML = "";
      tgllhrOutput.innerHTML = "";
      kelaminOutput.innerHTML = "";
      pesanOutput.innerHTML = "";
})

form.addEventListener("submit", function (event) {
  // outputReset();
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    // const gender = document.getElementById("gender").value;
    const messageText = document.getElementById("message-text").value.trim();
    const error = document.getElementById("error-message");
    const radioButtons = document.querySelectorAll(".radio-group input[type='radio']");
    const maleRadio = document.getElementById("male");

    if (!name || name == '') {
      alert("Nama harus diisi!");
      error.innerHTML = "Nama harus diisi!";
      setInterval(() => {
        error.innerHTML = "";
      }, 3000);
      return false;
      } else if (!birthdate) {
        alert("Tanggal harus dilengkapin!!");
        error.innerHTML = "Tanggal harus dilengkapin!!";
        return false;
      }
    
      
      const namaOutput = document.getElementById("nama_output");
      const tgllhrOutput = document.getElementById("tgllhr_output");
      const kelaminOutput = document.getElementById("kelamin_output");
      const pesanOutput = document.getElementById("pesan_output");

      radioButtons.forEach(radio => {
          if (radio.checked === true) {
            kelaminOutput.innerHTML = radio.value;
          }
      });

    namaOutput.innerHTML = name;
    tgllhrOutput.innerHTML = formatTanggal(birthdate);
    // kelaminOutput.innerHTML = gender;
    pesanOutput.innerHTML = messageText;
    
    
    // output.innerHTML = `<p><strong>Nama:</strong> ${name}</p>
    //                     <p><strong>Tanggal Lahir:</strong> ${formatTanggal(birthdate)}</p>
    //                     <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    //                     <p><strong>Pesan:</strong> ${messageText}</p>`;
    
    form.reset();
    document.getElementById("birthdate").value = today;
    maleRadio.checked = true;
    // function outputReset() {
    //   namaOutput.innerHTML = "";
    //   tgllhrOutput.innerHTML = "";
    //   kelaminOutput.innerHTML = "";
    //   pesanOutput.innerHTML = "";
    // }

    // Fungsi untuk format tanggal ke DD-Month-YYYY
    function formatTanggal(tanggal) {
        let options = { day: "2-digit", month: "long", year: "numeric" };
                return new Date(tanggal).toLocaleDateString("en-GB", options).replace(" ", "-");
    }


});

