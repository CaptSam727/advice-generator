document.getElementById("dice-button").addEventListener("click", fetchAdvice);

async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        document.getElementById('advice-id').textContent = data.slip.id;
        document.getElementById('advice-text').textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}
