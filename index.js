let searchcontainer = document.querySelector(".searchcontainer");
let searchicon = document.querySelector(".searchicon");
let navitems = document.querySelector(".navitems");
let menubar = document.querySelector("#menubar");
let vidbtn = document.querySelectorAll(".vidbtn");

window.onscroll = () => {
  searchcontainer.classList.remove("active");
  navitems.classList.remove("active");
};

searchicon.addEventListener("click", () => {
  searchcontainer.classList.toggle("active");
  navitems.classList.remove("active");
});

menubar.addEventListener("click", () => {
  navitems.classList.toggle("active");
  searchcontainer.classList.remove("active");
});

vidbtn.forEach((butt) => {
  butt.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    butt.classList.add("active");
    let videosrc = butt.getAttribute("data-src");
    console.log(videosrc);
    document.querySelector("#videoslider").src = videosrc;
  });
});

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const packages = document.getElementById("packages").value;

    if (name && email && phone && date && packages) {
      alert(
        "Booking Successful!\n" +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Date: ${date}\n` +
          `Package: ${packages}`
      );
    } else {
      alert("Please fill out all fields.");
    }
  });

function learnMore() {
  alert(
    "Discover more about our tours, packages, and exclusive deals by contacting us or visiting our website!"
  );
}

function bookNow(packageName) {
  alert(
    `You have selected the ${packageName} package. Proceeding to booking...`
  );
}

// ///////

// Toggle between registration and login forms
function toggleform() {
  document.getElementById("registerform").style.display =
    document.getElementById("registerform").style.display === "none"
      ? "block"
      : "none";
  document.getElementById("loginform").style.display =
    document.getElementById("loginform").style.display === "none"
      ? "block"
      : "none";
}

// Register user function
function register(event) {
  event.preventDefault();
  const username = document.getElementById("regusername").value;
  const password = document.getElementById("regpassword").value;

  if (localStorage.getItem(username)) {
    alert("Username already exists. Please choose another.");
  } else {
    localStorage.setItem(username, password);
    alert("Registration successful! Please login.");
    toggleform();
  }
}

function login(event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  const username = document.getElementById("loginusername").value; // Gets the entered username
  const password = document.getElementById("loginpassword").value; // Gets the entered password

  // Retrieve the stored password for the entered username from localStorage
  const storedPassword = localStorage.getItem(username, password);

  // Check if the entered password matches the stored password
  if (storedPassword && storedPassword === password) {
    alert("Login successful! Welcome to SG Tours.");

    //set logged in

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", username);

    hideOverlay(); // Calls a function to hide the login form and display the main content
  } else {
    alert("Incorrect username or password. Please try again.");
  }
}

// Hide the form overlay and display the main content clearly
function hideOverlay() {
  document.getElementById("formoverlay").style.display = "none"; // Hide overlay
  document.getElementById("maincontent").style.filter = "none"; // Remove blur
  document.getElementById("maincontent").style.opacity = "1"; // Reset opacity
}

// Initial display of registration form on page load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("registerform").style.display = "block";
});

// Logout function
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedInUser");
  location.reload();
}

// Check if the user is already logged in when the page loads
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    hideOverlay();
  } else {
    document.getElementById("registerform").style.display = "block";
  }
});
