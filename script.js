/* =========================================================
   NEXTERA GEOGUARD
   Premium Website JavaScript
   ========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        if (preloader) {
            preloader.classList.add("hidden");
        }

    }, 700);

});



/* ================= NAVBAR ================= */

const navbar = document.querySelector(".navbar");


function handleNavbar() {

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    handleNavbar,
    { passive: true }
);


handleNavbar();



/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* ================= SMOOTH ANCHOR SCROLL ================= */

const anchorLinks =
    document.querySelectorAll('a[href^="#"]');


anchorLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");


        if (!targetId || targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        const navbarHeight =
            navbar ? navbar.offsetHeight : 0;


        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});



/* ================= PHONE PARALLAX ================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual) {

    window.addEventListener(
        "mousemove",
        (event) => {

            /*
             * Keep the movement very subtle.
             * This prevents the phone from moving
             * too much and keeps the premium feel.
             */

            const x =
                (event.clientX / window.innerWidth - 0.5) * 8;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 8;


            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}



/* ================= DOWNLOAD BUTTON ================= */

const downloadButton =
    document.querySelector(".download-main");


if (downloadButton) {

    downloadButton.addEventListener(
        "click",
        () => {

            console.log(
                "NEXTERA GeoGuard APK download started."
            );

        }
    );

}



/* ================= CURRENT YEAR ================= */

const footerYear =
    document.querySelector(".footer-year");


if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}



/* ================= IMAGE FALLBACK ================= */

const appImages =
    document.querySelectorAll(
        ".app-screen, .showcase-frame img"
    );


appImages.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        const parent =
            image.parentElement;


        if (parent) {

            parent.style.display = "grid";

            parent.style.placeItems = "center";

            parent.innerHTML = `
                <div style="
                    color:#697386;
                    text-align:center;
                    font-family:Inter,sans-serif;
                    font-size:11px;
                    padding:25px;
                ">
                    NEXTERA GeoGuard<br>
                    <span style="
                        opacity:.6;
                        font-size:9px;
                    ">
                        App screenshot
                    </span>
                </div>
            `;

        }

    });

});



/* ================= KEYBOARD ACCESSIBILITY ================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            if (mobileMenu) {

                mobileMenu.classList.remove(
                    "active"
                );

            }

        }

    }
);