document.addEventListener("DOMContentLoaded", () => {
    const currentYearEl = document.getElementById("currentyear");
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            menuToggle.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
        });
    }

    const clubData = [
        { 
            title: "Intercontinental Cup", 
            details: "World champions after defeating Liverpool 3-0 in Tokyo, cementing the ultimate golden era led by Zico.", 
            type: "Global",
            logo: "images/Intercontinentallogo.png"
        },
        { 
            title: "Copa Libertadores Information", 
            details: "Flamengo has built an elite continental dynasty by becoming the first Brazilian club to capture four Copa Libertadores titles (1981, 2019, 2022, and 2025). Their glorious history began magically in 1981 when a golden generation spearheaded by the legendary Zico claimed the crown in their tournament debut by defeating Cobreloa in Montevideo. However, the most dramatic triumph occurred in 2019; after a painful 38-year championship drought, manager Jorge Jesus and a miraculous two-goal blitz by Gabigol in the final three minutes of the match orchestrated a historic 2-1 comeback against River Plate in Lima, restoring the 'Nação Rubro-Negra' to its rightful throne and paving the way for their subsequent triumphs in 2022 and 2025.", 
            type: "International",
            logo: "images/libertadoreslogo.jpeg" 
        },
        { 
            title: "Brasileirão", 
            details: "Flamengo has established supreme domestic dominance by conquering eight Brasileirão titles (1980, 1982, 1983, 1992, 2009, 2019, 2020, and 2025). Among these national triumphs, the 2009 championship remains unforgettable for its legendary late-season comeback, driven by the historic partnership of Adriano Imperador and Dejan Petković to snatch the trophy on the very final matchday. Even more spectacular was the 2019 campaign under Jorge Jesus, where the club completely rewritten football history by shattering the all-time tournament record with an astonishing 90 points, cementing that squad as one of the most dominant and overwhelming machines ever witnessed in Brazilian sports history.", 
            type: "National",
            logo: "images/brasileiraologo.jpg"
        },
        { 
            title: "Copa do Brasil", 
            details: "Flamengo has also proven its elite status in knockout tournaments by capturing five Copa do Brasil titles (1990, 2006, 2013, 2022, and 2024). The 2013 campaign stands out as an extraordinary, emotionally charged triumph; despite facing severe financial struggles and a difficult domestic season, the team was lifted by the unmatched energy of the Maracanã crowd, leading to a heroic run culminated by Hernane 'Brocador' scoring vital goals to secure a dramatic title that etched itself into the club's folklore.", 
            type: "National",
            logo: "images/copabrlogo.jpeg"
        },
        { 
            title: "Campeonato Carioca", 
            details: "Flamengo also holds undisputed regional supremacy by conquering a record-breaking 40 Campeonato Carioca titles. This impressive milestone cements the club as the most successful team in the history of Rio de Janeiro's state championship, reflecting decades of consistent elite performance and regional dominance since their very first provincial trophy.", 
            type: "Regional",
            logo: "images/cariocalogo.jpg"
        }
    ];

    const container = document.getElementById("achievements-container");
    if (container) {
        let dynamicHtml = "";
        
        clubData.forEach(item => {
            dynamicHtml += `
                <article class="achievement-card">
                    <div class="icon-box">
                        <img src="${item.logo}" alt="${item.title} logo" loading="lazy">
                    </div>
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.details}</p>
                    </div>
                </article>
            `;
        });
        container.innerHTML = dynamicHtml;
    }

    const visitsKey = "flamengoPageVisits";
    const counterDisplay = document.getElementById("visit-counter");

    if (counterDisplay) {
        let visitCount = localStorage.getItem(visitsKey);
        
        if (visitCount === null) {
            visitCount = 0;
        } else {
            visitCount = parseInt(visitCount, 10);
        }

        visitCount += 1;
        localStorage.setItem(visitsKey, visitCount);
        
        counterDisplay.textContent = `${visitCount}`;
    }

    const heroImages = [
        "images/flahero.jpeg",    
        "images/flahero2.jpg",   
        "images/flahero3.jpg"    
    ];

    const heroImgElement = document.querySelector(".hero img");
    let currentImageIndex = 0;

    if (heroImgElement) {
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            
            heroImgElement.style.opacity = "0.2";
            
            setTimeout(() => {
                heroImgElement.src = `${heroImages[currentImageIndex]}`;
                heroImgElement.style.opacity = "0.7"; 
            }, 300); 

        }, 4000); 
    }
});
