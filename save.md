    <!-- Navbar -->
<header class="navbar">
  <div class="container">
    <a href="index.html" class="logo">
      <img src="./assets/gotogo final logos/g2g corporate.png" alt="Logo" />
    </a>

    <nav>
      <ul class="desktop-links">
        <li><a href="index.html" class="menu-item">Home</a></li>
        <li><a href="fleet.html" class="menu-item active">Fleet</a></li>
        <li><a href="roomsnvenues.html" class="menu-item">Rooms & Venues</a></li>
        <li><a href="shuttletoagra.html" class="menu-item">Shuttle To Agra</a></li>
        <li><a href="airport-shuttle.html" class="menu-item">Airport Shuttle</a></li>
        <li><a href="partner.html" class="menu-item">Partner</a></li>
        <li><a href="#contact" class="menu-item">Contact</a></li>
      </ul>
    </nav>

    <img src="/burger.png" class="burger" id="burger" alt="menu" />

    <div class="mobile-menu" id="mobile-menu">
      <img src="/X.png" class="close" id="close" alt="close" />
      <ul class="mobile-links">
        <li><a href="index.html" class="menu-item">Home</a></li>
        <li><a href="fleet.html" class="menu-item active">Fleet</a></li>
        <li><a href="roomsnvenues.html" class="menu-item">Rooms & Venues</a></li>
        <li><a href="shuttletoagra.html" class="menu-item">Shuttle To Agra</a></li>
        <li><a href="airport-shuttle.html" class="menu-item">Airport Shuttle</a></li>
        <li><a href="partner.html" class="menu-item">Partner</a></li>
        <li><a href="#contact" class="menu-item">Contact</a></li>
      </ul>
    </div>
  </div>
</header>

<!-- CSS -->
<style>
/* CSS is fine, no changes needed */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: clip;
}

.navbar {
  background: #fff;
  border-bottom: 1px solid #eee;
  width: 100%;
  padding: 8px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar .container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 70px;
  width: auto;
}

/* Desktop Menu */
.desktop-links {
  list-style: none;
  display: flex;
  gap: 25px;
}

.menu-item {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: 0.3s ease;
  padding: 6px 10px;
}

.menu-item:hover,
.menu-item.active {
  color: #0c52a2; /* heading blue shade */
  border-bottom: 2px solid #0c52a2;
}

/* Hamburger */
.burger {
  display: none;
  width: 35px;
  cursor: pointer;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  height: 100vh;
  width: 250px;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.mobile-menu.active {
  right: 0;
}

.mobile-menu .close {
  width: 30px;
  margin-left: auto;
  cursor: pointer;
  margin-bottom: 20px;
}

.mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-links a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 500;
}

.mobile-links a:hover {
  color: #0c52a2;
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-links {
    display: none;
  }
  .burger {
    display: block;
  }
}
</style>
<script>
  document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const closeBtn = document.getElementById("close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  // (Optional) close menu when clicking any link
  document.querySelectorAll(".mobile-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }
    });
  });
});
</script>