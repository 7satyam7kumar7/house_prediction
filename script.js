// 1. Fetch locations on page load
window.onload = async function() {
    try {
        const response = await fetch('http://127.0.0.1:5000/get_location_names');
        const data = await response.json();
        
        if (data && data.locations) {
            const locationSelect = document.getElementById('location');
            data.locations.forEach(loc => {
                const option = document.createElement('option');
                option.value = loc;
                option.textContent = loc;
                locationSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error fetching locations:', error);
        document.getElementById('location').innerHTML += '<option value="test">Backend Offline - Test Mode</option>';
    }
};

// 2. Handle Oval Button Click to Predict
document.getElementById('predict-btn').addEventListener('click', async function() {
    const location = document.getElementById('location').value;
    const sqft = document.getElementById('sqft').value;
    
    const bhkEle = document.querySelector('input[name="bhk"]:checked');
    const bhk = bhkEle ? bhkEle.value : null;

    const bathEle = document.querySelector('input[name="bath"]:checked');
    const bath = bathEle ? bathEle.value : null;

    if (!location || !sqft || !bhk || !bath) {
        alert("Please fill in all fields.");
        return;
    }

    const formData = new FormData();
    formData.append('location', location);
    formData.append('total_sqft', sqft);
    formData.append('bhk', bhk);
    formData.append('bath', bath);

    try {
        const response = await fetch('http://127.0.0.1:5000/predictor', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        const displayElement = document.getElementById('predicted-price');
        displayElement.textContent = `₹ ${data.estimated_price} Lakh`; 
        displayElement.style.color = "#000"; 
        displayElement.style.fontWeight = "900";

    } catch (error) {
        console.error('Error making prediction:', error);
        document.getElementById('predicted-price').textContent = "Error calculating price";
    }
});