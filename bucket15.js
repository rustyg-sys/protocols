// DRUG MATH CALCULATORS (Bucket 15)

// Global database reference fallback
if (typeof protocolsDatabase === 'undefined') {
    var protocolsDatabase = {};
}

// 1. Get the current date and month
const today = new Date();
const currentMonth = today.getMonth() + 1; // (1 = Jan, 12 = Dec)

// 2. Lockout Logic: November (11) through March (3).
// Automatically opens on April 1st.
let isLocked = false;
if (currentMonth >= 11 || currentMonth <= 3) {
    isLocked = true;
}

// 3. Define the protocols list for Bucket 15
let bucket15Data = [];

if (isLocked) {
    // WHAT THEY SEE DURING LOCKOUT MONTHS
    bucket15Data = [
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
    bucket15Data = [
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
        },
        {
            id: "15B",
            title: "IV Drip Rate",
            content: `
                <div class="protocol-content text-center py-8">
                    <i class="fa-solid fa-droplet text-4xl text-[var(--maroon-main)] mb-4"></i>
                    <h3 style="border:none; margin-top:0;">IV Drip Rate</h3>
                    <p class="text-gray-600 mb-6">Launch the interactive IV Drip Rate tool.</p>
                    
                    <a href="volume.html" class="inline-block bg-[var(--maroon-main)] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:opacity-80 transition">
                        Open Calculator
                    </a>
                </div>
            `
        },
        {
            id: "15C",
            title: "Non-Weight-Based Drip",
            content: `
                <div class="protocol-content text-center py-8">
                    <i class="fa-solid fa-clock-rotate-left text-4xl text-[var(--maroon-main)] mb-4"></i>
                    <h3 style="border:none; margin-top:0;">Non-Weight-Based Drip</h3>
                    <p class="text-gray-600 mb-6">Launch the interactive Non-Weight-Based Drip Rate tool.</p>
                    
                    <a href="nwdrip.html" class="inline-block bg-[var(--maroon-main)] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:opacity-80 transition">
                        Open Calculator
                    </a>
                </div>
            `
        },
        {
            id: "15D",
            title: "Weight-Based Drip",
            content: `
                <div class="protocol-content text-center py-8">
                    <i class="fa-solid fa-weight-scale text-4xl text-[var(--maroon-main)] mb-4"></i>
                    <h3 style="border:none; margin-top:0;">Weight-Based Drip</h3>
                    <p class="text-gray-600 mb-6">Launch the interactive Weight-Based Drip Rate tool.</p>
                    
                    <a href="wbdrip.html" class="inline-block bg-[var(--maroon-main)] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:opacity-80 transition">
                        Open Calculator
                    </a>
                </div>
            `
        },
        {
            id: "15E",
            title: "Rule of Nines",
            content: `
                <div class="protocol-content text-center py-8">
                    <i class="fa-solid fa-fire text-4xl text-[var(--maroon-main)] mb-4"></i>
                    <h3 style="border:none; margin-top:0;">Rule of Nines</h3>
                    <p class="text-gray-600 mb-6">Interactive Adult TBSA Burn Assessment tool.</p>
                    
                    <a href="burns.html" class="inline-block bg-[var(--maroon-main)] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:opacity-80 transition">
                        Open Calculator
                    </a>
                </div>
            `
        }
    ];
}

// Assign to global variable and window object
protocolsDatabase[15] = bucket15Data;
if (typeof window !== 'undefined') {
    window.protocolsDatabase = protocolsDatabase;
}
