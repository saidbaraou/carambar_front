const yearSpan = document.getElementById('current-year');
        currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
        console.log(`Nous sommes en ${currentYear}`);