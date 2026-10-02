// DRUG MATH CALCULATORS (Bucket 15)

// 1. Get the current date and month
const today = new Date();
const currentMonth = today.getMonth() + 1; // (1 = Jan, 12 = Dec)

// 2. Lockout Logic: November (11) through March (3).
// It will automatically open on April 1st.
let isLocked = false;
if (currentMonth >= 11 || currentMonth <= 3) {
    isLocked = true;
}

if (isLocked) {
    // WHAT THEY SEE DURING LOCKOUT MONTHS
    protocolsDatabase[15] = [
        {
            id: "LOCKED",
            title: "Calculators Disabled",
            content: `
                <div class="protocol-content text-center py-8 px-2">
                    
                    <!-- Stop Sign Visual -->
                    <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-50 mb-6 border-4 border-red-200 shadow-sm">
                        <i class="fa-solid fa-hand text-5xl text-red-500 mt-1"></i>
                    </div>
                    
                    <h2 class="text-2xl font-black text-gray-800 mb-4 border-none mt-0 tracking-tight">Not So Fast!</h2>
                    
                    <p class="text-gray-800 text-base leading-relaxed mb-4 font-semibold">
                        Sorry, all medication calculators are currently disabled.
                    </p>
                    
                    <p class="text-gray-600 text-sm leading-relaxed mb-8">
                        These tools will become available later on in your training. For now, please utilize the manual calculation methods recommended by your instructors to build your muscle memory.
                    </p>
                    
                    <!-- Unlock Date Badge -->
                    <div class="bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-inner inline-block w-full max-w-xs">
                        <p class="font-bold text-xs text-[var(--maroon-main)] uppercase tracking-wider mb-1">Calculators Unlock On</p>
                        <p class="text-xl font-black text-gray-800">April 1st</p>
                    </div>

                </div>
            `
        }
    ];
} else {
    // WHAT THEY SEE WHEN CALCULATORS ARE ACTIVE
    protocolsDatabase[15] = [
        {
            id: "15A",
            title: "Medication Bolus",
            content: `
                <div class="protocol-content text-center py-8">
                    <i class="fa-solid fa-calculator text-4xl text-[var(--maroon-main)] mb-4"></i>
                    <h3 style="border:none; margin-top:0;">Medication Bolus</h3>
                    <p class="text-gray-600 mb-6">Launch the interactive Medication Bolus tool.</p>
                    
                    <a href="medbolus.html" class="inline-block bg-[var(--maroon-main)] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:opacity-80 transition">
                        Open Calculator
                    </a>
                </div>
            `
        }
        // When you add more calculators, just paste them right below here!
    ];
}
