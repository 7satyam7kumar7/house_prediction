// Fetch locations when page loads
window.onload = async function () {
    try {
        const response = await fetch("http://127.0.0.1:8000/get_location_names");
        const data = await response.json();

        if (data && data.locations) {
            const locationSelect = document.getElementById("location");

            data.locations.forEach((loc) => {
                const option = document.createElement("option");
                option.value = loc;
                option.textContent = loc;
                locationSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error("Error fetching locations:", error);

        document.getElementById("location").innerHTML +=
            '<option value="">Backend Offline</option>';
    }
};

// Predict price
document
    .getElementById("predict-btn")
    .addEventListener("click", async function () {

        console.log("Predict button clicked");

        const location = document.getElementById("location").value;
        const sqft = document.getElementById("sqft").value;

        const bhkEle = document.querySelector(
            'input[name="bhk"]:checked'
        );

        const bathEle = document.querySelector(
            'input[name="bath"]:checked'
        );

        console.log(location, sqft, bhkEle, bathEle);

        const bhk = bhkEle ? bhkEle.value : null;
        const bath = bathEle ? bathEle.value : null;

        if (!location || !sqft || !bhk || !bath) {
            alert("Please fill in all fields.");
            return;
        }

        const payload = {
            location,
            total_sqft: parseFloat(sqft),
            bhk: parseInt(bhk),
            bath: parseInt(bath)
        };

        console.log(payload);

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/predictor",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            );

            console.log("Status:", response.status);

            const data = await response.json();

            console.log(data);

        } catch (error) {
            console.error(error);
        }
    });