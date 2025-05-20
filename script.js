// Button click to change color
document.getElementById("colorBtn")?.addEventListener("click", function () {
  this.style.backgroundColor = this.style.backgroundColor === "green" ? "#222" : "green";
  this.textContent = this.textContent === "Click to Change Me!" ? "Changed!" : "Click to Change Me!";
});

// Image gallery/slideshow
let gallery = ["images/ai1.jpg", "images/ai2.jpg", "images/ai3.jpg"];
let slider = document.getElementById("slider");
let i = 0;
if (slider) {
  setInterval(() => {
    i = (i + 1) % gallery.length;
    slider.src = gallery[i];
  }, 3000);
}

// Tabs
function openTab(id) {
  let contents = document.getElementsByClassName("tabContent");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// Form validation
function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email.includes("@")) {
    alert("Enter a valid email!");
    return false;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters!");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}





