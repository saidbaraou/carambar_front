const blagueQuestion = document.getElementById('blague-question');
const blagueReponse = document.getElementById('blague-reponse');
const newBlagueBtn = document.getElementById('new-blague-btn');
const API_URL = 'https://carambar-api-gcpu.onrender.com/api/blagues'; 

/**
 * Fetches a random blague from the backend API.
 */
async function fetchRandomBlague() {
    try {
        blagueQuestion.textContent = 'Chargement de la blague...';
        blagueReponse.textContent = ''; // Clear previous response

        // Construct the URL for the random blague endpoint
        // Assuming your backend route for random blague is /api/blagues/random
        const response = await fetch(`${API_URL}/random`);

        if (!response.ok) {
            // If the response is not OK (e.g., 404, 500)
            const errorData = await response.json();
            throw new Error(errorData.error || `Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();

        // Display the blague
        blagueQuestion.textContent = data.question;
        blagueReponse.textContent = data.reponse;

    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
        blagueQuestion.textContent = 'Oups ! Impossible de charger une blague.';
        blagueReponse.textContent = 'Vérifiez que le serveur backend est en ligne et que l\'URL est correcte.';
    }
}

// 1. Display a random blague as soon as the page opens
document.addEventListener('DOMContentLoaded', fetchRandomBlague);

// 2. Add event listener for the button
newBlagueBtn.addEventListener('click', fetchRandomBlague);




const yearSpan = document.getElementById('current-year');
        currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;