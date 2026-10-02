// DRUG MATH CALCULATORS (Bucket 15)

protocolsDatabase[15] = [
    {
        id: "15A",
        title: "Medication Bolus Calculator",
        content: `
            <div class="protocol-content text-center py-8">
                <i class="fa-solid fa-calculator text-4xl text-[var(--maroon-main)] mb-4"></i>
                <h3 style="border:none; margin-top:0;">Medication Bolus</h3>
                <p class="text-gray-600 mb-6">Launch the interactive Medication Bolus tool.</p>
                
                <!-- This button links out to your separate calculator page -->
                <a href="medbolus.html" class="inline-block bg-[var(--maroon-main)] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:opacity-80 transition">
                    Open Calculator
                </a>
            </div>
        `
    }
    
    /* 
    WHEN YOU ADD MORE CALCULATORS, JUST COPY THE BLOCK ABOVE AND PASTE IT BELOW.
    Change the ID (e.g., "15B"), the Title, and the href="yournewline.html"
    */
];
