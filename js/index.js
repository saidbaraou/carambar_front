const blagueQuestion = document.getElementById('blague-question');
const blagueReponse = document.getElementById('blague-reponse');
const newBlagueBtn = document.getElementById('new-blague-btn');
const API_URL = 'https://carambar-api-rd87.onrender.com/api/v1/blagues'; 


const fetchRandomBlague = async () => {
    try {
        blagueQuestion.textContent = 'Chargement de la blague...';
        blagueReponse.textContent = ''; // Clear previous response

        const response = await fetch(`${API_URL}/random`);

        if (!response.ok) {
            
            const errorData = await response.json();
            throw new Error(errorData.error || `Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();

        blagueQuestion.textContent = data.question;
        blagueReponse.textContent = data.reponse;

    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:');
        blagueQuestion.textContent = 'Oups ! Impossible de charger une blague.';
        blagueReponse.textContent = 'Vérifiez que le serveur backend est en ligne et que l\'URL est correcte.';
    }
}


document.addEventListener('DOMContentLoaded', fetchRandomBlague);

newBlagueBtn.addEventListener('click', fetchRandomBlague);


const yearSpan = document.getElementById('current-year');
        currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;