document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('Currency-form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        // Fetch values from form
        const fromCurrency = document.getElementById('Currency_from').value.toUpperCase();
        const toCurrency = document.getElementById('Currency_to').value.toUpperCase();
        const amount = document.getElementById('amount').value;

        // API Key and endpoint
        const apiKey = "cur_live_mKNwiGS3ATQTZXO3Fc6RCfoFD99km2I46LNDC51F";
        const endpoint = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=${fromCurrency},${toCurrency}`;

        try {
            const response = await fetch(endpoint);
            const data = await response.json();

            if (data && data.data && data.data[fromCurrency] && data.data[toCurrency]) {
                const fromRate = data.data[fromCurrency].value;
                const toRate = data.data[toCurrency].value;
                const conversionRate = toRate / fromRate; 
                const convertedAmount = amount * conversionRate;
                document.getElementById('result').textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
            } else {
                document.getElementById('result').textContent = 'Error: Unable to fetch conversion rate.';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'Error: Unable to fetch conversion rate.';
        }
    });
});
