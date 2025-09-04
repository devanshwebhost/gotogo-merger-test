<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Bar</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    
    <style>
        /* --- General Setup --- */
        body { margin: 0; font-family: sans-serif; }
        * { box-sizing: border-box; padding: 0; margin: 0; }

        /* --- Main Navbar Styles --- */
        .main-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-wrapper {
            max-width: 1200px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        /* --- Logo Styles --- */
        .logo-pic {
            width: 70px !important;
            transition: transform 0.3s;
        }
        .logo-pic:hover {
            transform: scale(1.1);
        }

        /* --- Desktop Navigation Links --- */
        .desktop-links {
            display: flex;
            gap: 20px !important;
            list-style: none;
        }

        .menu-item {
            color: black;
            text-decoration: none;
            padding: 6px 12px;
            border-radius: 6px;
            transition: background 0.3s, color 0.3s;
        }
        .menu-item:hover {
            background: rgba(0, 0, 0, 0.1);
        }

        /* Active link style */
        .menu-item.active {
            background: #f4be30;
            color: black;
            font-weight: 600;
        }

        /* --- Mobile Menu & Burger Button --- */
        .burger-button {
            display: none;
            font-size: 22px;
            color: #333;
            background: none;
            border: none;
            cursor: pointer;
        }

        .mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #ffffff;
            padding: 20px 0;
            transform: translateY(-200%);
            transition: transform 0.4s ease-in-out;
            box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
            z-index: -1;
        }

        /* Active state for mobile menu */
        .mobile-menu.show {
            transform: translateY(0);
        }
        
        .mobile-menu ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: center;
        }
        
        .mobile-menu .menu-item {
            color: black;
            width: 100%;
            text-align: center;
        }

        /* --- Media Query for Responsiveness --- */
        @media (max-width: 850px) {
            .desktop-links {
                display: none;
            }
            .burger-button {
                display: block;
            }
        }
    </style>
</head>
<body>



<script>
    // JavaScript to toggle the mobile menu
    const burgerButton = document.getElementById('burgerButton');
    const mobileMenu = document.getElementById('mobileMenu');

    burgerButton.addEventListener('click', () => {
        // This toggles the 'show' class on the mobile menu
        mobileMenu.classList.toggle('show');
    });
</script>

</body>
</html>