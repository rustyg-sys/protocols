<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medical Math Calculator</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom styles to remove the number input spinners for a cleaner math look */
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }
        input[type=number] {
            -moz-appearance: textfield;
            font-family: 'Times New Roman', Times, serif; /* Mathematical serif font */
        }
        
        .math-font {
            font-family: 'Times New Roman', Times, serif;
        }

        /* Subtle focus glow for inputs */
        .math-input:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
            border-color: #3b82f6;
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">

    <div class="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full border border-gray-200">
        
        <div class="mb-8 text-center">
            <h1 class="text-2xl font-bold text-gray-800 tracking-tight">Medication Dosage Calculator</h1>
            <p class="text-gray-500 mt-2 text-sm">Enter the values below to automatically calculate the dose to give.</p>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center overflow-x-auto py-6">
            
            <!-- Result Output Side -->
            <div class="flex items-center text-xl md:text-2xl math-font text-blue-900 mb-6 md:mb-0 md:mr-6 whitespace-nowrap">
                <span>Dose to give (mL)</span>
                <span class="mx-3">=</span>
                <span id="result-display" class="font-bold text-3xl text-blue-700 min-w-[3rem] text-center bg-blue-50 px-3 py-1 rounded border border-blue-100 shadow-inner">?</span>
            </div>

            <div class="flex flex-col items-center">
                
                <!-- Numerator (Top of fraction) -->
                <div class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 border-b-2 border-black pb-3 w-full justify-center px-4">
                    
                    <div class="flex flex-col items-center">
                        <input type="number" id="desired-dose" 
                               class="math-input w-28 sm:w-32 p-2 border-2 border-gray-300 rounded-lg text-center text-xl text-gray-800 transition-all bg-gray-50" 
                               placeholder="0" step="any">
                        <label for="desired-dose" class="text-xs text-gray-500 mt-1 font-sans font-medium">Desired Dose</label>
                    </div>

                    <span class="text-2xl font-bold text-gray-700 math-font sm:pb-5">×</span>

                    <div class="flex flex-col items-center">
                        <input type="number" id="volume" 
                               class="math-input w-28 sm:w-32 p-2 border-2 border-gray-300 rounded-lg text-center text-xl text-gray-800 transition-all bg-gray-50" 
                               placeholder="0" step="any">
                        <label for="volume" class="text-xs text-gray-500 mt-1 font-sans font-medium">Volume (mL)</label>
                    </div>

                </div>

                <!-- Denominator (Bottom of fraction) -->
                <div class="flex flex-col items-center pt-3 w-full px-4">
                    <div class="flex flex-col items-center">
                        <input type="number" id="dose-on-hand" 
                               class="math-input w-36 sm:w-40 p-2 border-2 border-gray-300 rounded-lg text-center text-xl text-gray-800 transition-all bg-gray-50" 
                               placeholder="0" step="any">
                        <label for="dose-on-hand" class="text-xs text-gray-500 mt-1 font-sans font-medium">Dose on Hand</label>
                    </div>
                </div>

            </div>
        </div>

        <!-- Info / Error Message Area -->
        <div id="message-area" class="mt-8 text-center min-h-[1.5rem] text-sm text-red-500 font-medium"></div>

    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Get DOM elements
            const desiredDoseInput = document.getElementById('desired-dose');
            const volumeInput = document.getElementById('volume');
            const doseOnHandInput = document.getElementById('dose-on-hand');
            const resultDisplay = document.getElementById('result-display');
            const messageArea = document.getElementById('message-area');

            // Array of inputs for easy event binding
            const inputs = [desiredDoseInput, volumeInput, doseOnHandInput];

            // Function to perform the calculation
            function calculateDose() {
                const desiredDose = parseFloat(desiredDoseInput.value);
                const volume = parseFloat(volumeInput.value);
                const doseOnHand = parseFloat(doseOnHandInput.value);

                // Clear previous messages
                messageArea.textContent = "";
                messageArea.className = "mt-8 text-center min-h-[1.5rem] text-sm text-red-500 font-medium";

                // Check if any input is empty or not a number
                if (isNaN(desiredDose) || isNaN(volume) || isNaN(doseOnHand)) {
                    resultDisplay.textContent = "?";
                    resultDisplay.classList.add('text-blue-700');
                    resultDisplay.classList.remove('text-green-600');
                    return; // Wait for user to enter all fields
                }

                // Check for division by zero
                if (doseOnHand === 0) {
                    resultDisplay.textContent = "Error";
                    messageArea.textContent = "Dose on hand cannot be zero.";
                    return;
                }
                
                // Prevent negative inputs just in case
                if (desiredDose < 0 || volume < 0 || doseOnHand < 0) {
                    resultDisplay.textContent = "Error";
                    messageArea.textContent = "Values cannot be negative.";
                    return;
                }

                // Perform the calculation: (Desired Dose * Volume) / Dose on Hand
                const doseToGive = (desiredDose * volume) / doseOnHand;

                // Format the output (up to 2 decimal places, remove trailing zeros)
                // parseFloat is used to format 2.50 to 2.5, but keep 2.55 as 2.55
                const formattedDose = parseFloat(doseToGive.toFixed(2));

                // Update the UI
                resultDisplay.textContent = formattedDose;
                
                // Add success color to result
                resultDisplay.classList.remove('text-blue-700');
                resultDisplay.classList.add('text-green-600');
                
                messageArea.className = "mt-8 text-center min-h-[1.5rem] text-sm text-green-600 font-medium";
                messageArea.textContent = `Give ${formattedDose} mL`;
            }

            // Attach input event listeners to all fields to calculate in real-time
            inputs.forEach(input => {
                input.addEventListener('input', calculateDose);
            });
        });
    </script>
</body>
</html>
