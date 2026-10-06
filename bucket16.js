// Ensure the global database object exists
if (typeof protocolsDatabase === 'undefined') {
    var protocolsDatabase = {};
}

// ---------------------------------------------------------
// Global Calculator Functions for Bucket 16
// Attached to 'window' so they can be called from inline HTML
// ---------------------------------------------------------

window.calcIBW = function() {
    const sex = document.getElementById('ibw_sex').value;
    const ft = parseFloat(document.getElementById('ibw_ft').value) || 0;
    const inc = parseFloat(document.getElementById('ibw_in').value) || 0;
    
    const totalInches = (ft * 12) + inc;
    let ibw = 0;
    
    if (totalInches > 0) {
        const base = sex === 'male' ? 50 : 45.5;
        const formulaText = sex === 'male' ? '50kg + 2.3kg for each inch over 5ft' : '45.5kg + 2.3kg for each inch over 5ft';
        document.getElementById('ibw_formula_text').textContent = `Formula: ${formulaText}`;
        
        if (totalInches <= 60) {
            ibw = base;
        } else {
            ibw = base + (2.3 * (totalInches - 60));
        }
    }
    document.getElementById('ibw_out').textContent = ibw.toFixed(1);
};

window.calcBurns = function() {
    const wt = parseFloat(document.getElementById('burn_wt').value) || 0;
    const bsa = parseFloat(document.getElementById('burn_bsa').value) || 0;
    const mult = parseFloat(document.getElementById('burn_mult').value) || 0;
    
    const total = mult * wt * bsa;
    const first8 = total / 2;
    const hourly8 = first8 / 8;
    
    document.getElementById('burn_24h').textContent = total.toLocaleString();
    document.getElementById('burn_8h_tot').textContent = first8.toLocaleString();
    document.getElementById('burn_8h_rate').textContent = hourly8.toFixed(1);
};

window.calcMAP = function() {
    const sbp = parseFloat(document.getElementById('map_sbp').value) || 0;
    const dbp = parseFloat(document.getElementById('map_dbp').value) || 0;
    
    let map = 0;
    if (sbp > 0 && dbp > 0) {
        map = (sbp + (2 * dbp)) / 3;
    }
    document.getElementById('map_out').textContent = map.toFixed(0);
};

window.calcMV = function() {
    const tv = parseFloat(document.getElementById('mv_tv').value) || 0;
    const rr = parseFloat(document.getElementById('mv_rr').value) || 0;
    
    const mvMl = tv * rr;
    const mvL = mvMl / 1000;
    
    document.getElementById('mv_out_ml').textContent = mvMl.toLocaleString();
    document.getElementById('mv_out_l').textContent = mvL.toFixed(2);
};

window.calcKE = function() {
    const mass = parseFloat(document.getElementById('ke_mass').value) || 0;
    const vel = parseFloat(document.getElementById('ke_vel').value) || 0;
    
    const ke = 0.5 * mass * (vel * vel);
    document.getElementById('ke_out').textContent = Math.round(ke).toLocaleString();
};

window.calcOhm = function() {
    const v = parseFloat(document.getElementById('ohm_v').value) || 0;
    const r = parseFloat(document.getElementById('ohm_r').value) || 0;
    
    let i = 0;
    if (r > 0) {
        i = v / r;
    }
    document.getElementById('ohm_out').textContent = i.toFixed(4);
};

// ---------------------------------------------------------
// Bucket 16: Weights & Measures Data
// ---------------------------------------------------------

protocolsDatabase[16] = [
    {
        id: "calc_weight",
        title: "Weight Conversion",
        content: `
            <p class="text-gray-500 mb-6 text-sm">Convert pounds to kilograms using the standard medical method (/2.2) and the rapid field method (/2 - 10%).</p>
            <div class="space-y-6 pb-8">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Patient Weight (lbs)</label>
                    <input type="number" oninput="
                        const lbs = parseFloat(this.value) || 0;
                        document.getElementById('wt_out_std').textContent = (lbs / 2.2).toFixed(1);
                        document.getElementById('wt_out_fld').textContent = ((lbs / 2) * 0.9).toFixed(1);
                    " class="w-full text-2xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800020] focus:border-[#800020] transition-all outline-none" placeholder="e.g. 150">
                </div>
                
                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-blue-50 p-5 rounded-xl border border-blue-100 flex justify-between items-center">
                        <div>
                            <h3 class="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">Standard (/2.2)</h3>
                        </div>
                        <div class="text-3xl font-bold text-gray-800"><span id="wt_out_std">0.0</span> <span class="text-base text-gray-500 font-medium">kg</span></div>
                    </div>
                    <div class="bg-[#fdf2f4] p-5 rounded-xl border border-[#a31535] flex justify-between items-center">
                        <div>
                            <h3 class="text-xs font-bold text-[#800020] uppercase tracking-wider mb-1">Field (/2 - 10%)</h3>
                        </div>
                        <div class="text-3xl font-bold text-gray-800"><span id="wt_out_fld">0.0</span> <span class="text-base text-gray-500 font-medium">kg</span></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "calc_ibw",
        title: "Ideal Body Weight (IBW)",
        content: `
            <p class="text-gray-500 mb-6 text-sm">Calculates estimated ideal body weight based on biological sex and height.</p>
            <div class="space-y-6 pb-8">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Biological Sex</label>
                    <select id="ibw_sex" onchange="calcIBW()" class="w-full text-lg p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800020] outline-none">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Height (Feet)</label>
                        <input type="number" id="ibw_ft" oninput="calcIBW()" class="w-full text-lg p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800020] outline-none" placeholder="e.g. 5">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Height (Inches)</label>
                        <input type="number" id="ibw_in" oninput="calcIBW()" class="w-full text-lg p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800020] outline-none" placeholder="e.g. 10">
                    </div>
                </div>
                
                <div class="bg-gray-800 p-6 rounded-xl text-center shadow-md mt-4">
                    <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Estimated Ideal Body Weight</h3>
                    <div class="text-5xl font-bold text-white"><span id="ibw_out">0.0</span> <span class="text-2xl text-gray-400 font-medium">kg</span></div>
                    <p class="text-gray-400 text-xs mt-3" id="ibw_formula_text">Formula: 50kg + 2.3kg for each inch over 5ft</p>
                </div>
            </div>
        `
    },
    {
        id: "calc_pedsbp",
        title: "Pediatric Blood Pressure",
        content: `
            <p class="text-gray-500 mb-6 text-sm">Estimates average normal and lower-limit systolic blood pressure for children (1-10 years).</p>
            <div class="space-y-6 pb-8">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Patient Age (Years)</label>
                    <input type="number" oninput="
                        const age = parseFloat(this.value) || 0;
                        if (age > 0) {
                            document.getElementById('peds_norm').textContent = 80 + (2 * age);
                            document.getElementById('peds_low').textContent = 70 + (2 * age);
                        } else {
                            document.getElementById('peds_norm').textContent = '0';
                            document.getElementById('peds_low').textContent = '0';
                        }
                    " class="w-full text-2xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800020] outline-none" placeholder="e.g. 5">
                </div>
                
                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-emerald-50 p-5 rounded-xl border border-emerald-200 flex justify-between items-center">
                        <div>
                            <h3 class="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Normal Systolic</h3>
                            <p class="text-[10px] text-emerald-600">80 + (2 × age)</p>
                        </div>
                        <div class="text-3xl font-bold text-gray-800"><span id="peds_norm">0</span> <span class="text-sm text-gray-500 font-medium">mmHg</span></div>
                    </div>
                    <div class="bg-rose-50 p-5 rounded-xl border border-rose-200 flex justify-between items-center">
                        <div>
                            <h3 class="text-xs font-bold text-rose-800 uppercase tracking-wider mb-1">Lower Limit (Shock)</h3>
                            <p class="text-[10px] text-rose-600">70 + (2 × age)</p>
                        </div>
                        <div class="text-3xl font-bold text-gray-800"><span id="peds_low">0</span> <span class="text-sm text-gray-500 font-medium">mmHg</span></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "calc_burns",
        title: "Consensus Burn Formula",
        content: `
            <p class="text-gray-500 mb-6 text-sm">Calculates fluid resuscitation requirements for burn patients over the first 24 hours.</p>
            <div class="space-y-6 pb-8">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">Weight (kg)</label>
                        <input type="number" id="burn_wt" oninput="calcBurns()" class="w-full text-xl p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="e.g. 70">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">TBSA Burned (%)</label>
                        <input type="number" id="burn_bsa" oninput="calcBurns()" class="w-full text-xl p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="e.g. 30">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Multiplier</label>
                    <select id="burn_mult" onchange="calcBurns()" class="w-full text-lg p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none">
                        <option value="2">2 mL (Thermal, Adult)</option>
                        <option value="3">3 mL (Pediatric)</option>
                        <option value="4">4 mL (Electrical/Severe)</option>
                    </select>
                </div>
                
                <div class="bg-orange-50 p-5 rounded-xl border border-orange-200 shadow-sm mt-4 space-y-4">
                    <div class="flex justify-between items-center border-b border-orange-200 pb-3">
                        <h3 class="text-xs font-bold text-orange-800 uppercase tracking-wider">Total 24h Fluids</h3>
                        <div class="text-2xl font-bold text-gray-800"><span id="burn_24h">0</span> <span class="text-xs font-normal text-gray-500">mL</span></div>
                    </div>
                    <div class="flex justify-between items-center border-b border-orange-200 pb-3">
                        <h3 class="text-xs font-bold text-orange-800 uppercase tracking-wider">1st 8h Total</h3>
                        <div class="text-2xl font-bold text-gray-800"><span id="burn_8h_tot">0</span> <span class="text-xs font-normal text-gray-500">mL</span></div>
                    </div>
                    <div class="flex justify-between items-center pt-1">
                        <h3 class="text-xs font-bold text-rose-600 uppercase tracking-wider">1st 8h Drip Rate</h3>
                        <div class="text-2xl font-bold text-rose-600"><span id="burn_8h_rate">0</span> <span class="text-xs font-normal text-rose-400">mL/hr</span></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "calc_map",
        title: "Mean Arterial Pressure (MAP)",
        content: `
            <p class="text-gray-500 mb-6 text-sm">Calculates the average pressure in a patient's arteries during one cardiac cycle.</p>
            <div class="space-y-6 pb-8">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">Systolic (mmHg)</label>
                        <input type="number" id="map_sbp" oninput="calcMAP()" class="w-full text-xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800020] outline-none" placeholder="120">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">Diastolic (mmHg)</label>
                        <input type="number" id="map_dbp" oninput="calcMAP()" class="w-full text-xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800020] outline-none" placeholder="80">
                    </div>
                </div>
                
                <div class="bg-[#fdf2f4] p-6 rounded-xl border border-[#a31535] flex items-center justify-between">
                    <div>
                        <h3 class="text-sm font-bold text-[#800020] uppercase tracking-wider mb-1">Calculated MAP</h3>
                        <p class="text-xs text-[#a31535]">(SBP + 2DBP) ÷ 3</p>
                    </div>
                    <div class="text-4xl font-bold text-gray-800"><span id="map_out">0</span> <span class="text-base text-gray-500 font-normal">mmHg</span></div>
                </div>
            </div>
        `
    },
    {
        id: "calc_mv",
        title: "Minute Volume",
        content: `
            <p class="text-gray-500 mb-6 text-sm">Calculates the volume of gas inhaled or exhaled from a person's lungs per minute.</p>
            <div class="space-y-6 pb-8">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">Tidal Volume (mL)</label>
                        <input type="number" id="mv_tv" oninput="calcMV()" class="w-full text-xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-600 outline-none" placeholder="500">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">Resp. Rate (per min)</label>
                        <input type="number" id="mv_rr" oninput="calcMV()" class="w-full text-xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-600 outline-none" placeholder="12">
                    </div>
                </div>
                
                <div class="bg-sky-50 p-6 rounded-xl border border-sky-200">
                    <h3 class="text-xs font-bold text-sky-800 uppercase tracking-wider mb-4 border-b border-sky-200 pb-2">Minute Volume (TV × RR)</h3>
                    <div class="flex justify-between items-center">
                        <div class="text-2xl font-bold text-gray-800"><span id="mv_out_ml">0</span> <span class="text-sm text-gray-500 font-normal">mL/min</span></div>
                        <div class="text-3xl font-bold text-sky-700 border-l-2 border-sky-200 pl-4"><span id="mv_out_l">0.00</span> <span class="text-sm text-sky-600 font-normal">L/min</span></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "calc_ke",
        title: "Kinetic Energy",
        content: `
            <p class="text-gray-500 mb-6 text-sm">Calculates relative kinetic energy units dissipated during rapid deceleration (Trauma).</p>
            <div class="space-y-6 pb-8">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">Mass/Weight (lbs)</label>
                        <input type="number" id="ke_mass" oninput="calcKE()" class="w-full text-xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" placeholder="150">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">Velocity (mph)</label>
                        <input type="number" id="ke_vel" oninput="calcKE()" class="w-full text-xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" placeholder="40">
                    </div>
                </div>
                
                <div class="bg-amber-50 p-6 rounded-xl border border-amber-200 text-center">
                    <h3 class="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">Kinetic Energy Units</h3>
                    <div class="text-5xl font-bold text-amber-600"><span id="ke_out">0</span></div>
                    <p class="text-[10px] text-amber-600 mt-2">Force = ½ Mass × Velocity²</p>
                </div>
            </div>
        `
    },
    {
        id: "calc_ohms",
        title: "Ohm's Law",
        content: `
            <p class="text-gray-500 mb-6 text-sm">Calculates electrical current passing through tissues based on voltage and resistance.</p>
            <div class="space-y-6 pb-8">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">Voltage (Volts)</label>
                        <input type="number" id="ohm_v" oninput="calcOhm()" class="w-full text-xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="120">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-700 mb-2">Resistance (Ohms)</label>
                        <input type="number" id="ohm_r" oninput="calcOhm()" class="w-full text-xl p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="100000">
                    </div>
                </div>
                
                <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex items-center justify-between">
                    <div>
                        <h3 class="text-sm font-bold text-yellow-800 uppercase tracking-wider mb-1">Current (I)</h3>
                        <p class="text-xs text-yellow-600">Amperes (I = V / R)</p>
                    </div>
                    <div class="text-4xl font-bold text-gray-800"><span id="ohm_out">0.000</span> <span class="text-base text-gray-500 font-normal">A</span></div>
                </div>
            </div>
        `
    }
];
