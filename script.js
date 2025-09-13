// this is the toggle theme script
const toggleBtn = document.getElementById("theme-toggle");
    const themeLink = document.getElementById("theme-link");

    // Load saved theme on refresh
    if (localStorage.getItem("theme")) {
        themeLink.href = localStorage.getItem("theme");
    }

    toggleBtn.addEventListener("click", () => {
        if (themeLink.getAttribute("href") === "lightScreen.css") {
            themeLink.href = "darkScreen.css";
            localStorage.setItem("theme", "darkScreen.css");
        } else {
            themeLink.href = "lightScreen.css";
            localStorage.setItem("theme", "lightScreen.css");
        }
    });

// this is the sign up script



// this is the sign in script

