<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Bucket 14 - Medications</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        maroon: {
                            main: '#800020',
                            light: '#a11c3b',
                            dark: '#5c0015',
                            50: '#fdf2f4',
                            100: '#fbe5e9',
                            800: '#800020',
                            900: '#5c0015'
                        }
                    }
                }
            }
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f3f4f6; }
        
        /* Custom scrollbar for a native feel */
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        
        .fade-in { animation: fadeIn 0.2s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body class="h-screen flex flex-col overflow-hidden text-gray-800 bg-gray-100 selection:bg-maroon-100 selection:text-maroon-900">

    <!-- Global App Header with Smart Back Button -->
    <header class="bg-maroon-main text-white shadow-md z-20 flex-shrink-0">
        <div class="px-4 py-3 flex items-center justify-between">
            <button onclick="if(window.history.length > 1) { window.history.back(); return false; } else { window.location.href='index.html#bucket14'; }" 
                    class="flex items-center gap-2 text-white/90 hover:text-white transition-colors focus:outline-none bg-maroon-dark/50 px-3 py-1.5 rounded-lg active:scale-95">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
                <span class="font-semibold text-sm">Back</span>
            </button>
            <h1 class="text-lg font-bold tracking-wide">Bucket 14: Medications</h1>
            <div class="w-20"></div> <!-- Spacer for centering -->
        </div>
    </header>

    <div class="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        
        <!-- Left Sidebar: Search and List -->
        <aside id="medSidebar" class="absolute inset-0 md:relative md:w-1/3 lg:w-1/4 h-full bg-white border-r border-gray-200 flex flex-col shadow-lg z-10 shrink-0 transition-transform duration-200">
            <div class="p-3 border-b border-gray-200 bg-gray-50 flex-shrink-0">
                <div class="relative">
                    <input type="text" id="searchInput" placeholder="Search med name or class..." 
                           class="w-full pl-9 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-maroon-main focus:border-maroon-main transition-shadow shadow-sm">
                    <svg class="w-4 h-4 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
            <ul id="medList" class="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1 pb-20 md:pb-2">
                <!-- List items populated by JS -->
            </ul>
        </aside>

        <!-- Main Content Area: Medication Details -->
        <main id="medMain" class="hidden md:block w-full md:w-2/3 lg:w-3/4 h-full bg-gray-100 overflow-y-auto p-0 md:p-6 custom-scrollbar absolute inset-0 md:relative z-20 md:z-0">
            
            <div id="welcomeScreen" class="hidden md:flex h-full flex-col items-center justify-center text-gray-500 fade-in">
                <svg class="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <p class="text-lg font-medium">Select a medication to view details</p>
            </div>

            <div id="medDetails" class="hidden h-full md:h-auto min-h-full md:min-h-0 bg-white md:rounded-xl md:shadow-sm border-0 md:border md:border-gray-200 overflow-hidden fade-in">
                
                <!-- Mobile Only: Internal Back to List Button -->
                <div class="md:hidden bg-gray-50 border-b border-gray-200 p-2">
                    <button onclick="backToList()" class="flex items-center gap-2 text-maroon-main px-3 py-2 rounded-lg font-medium active:bg-gray-200 transition-colors w-full">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Medication List
                    </button>
                </div>

                <!-- Header -->
                <div class="bg-maroon-50 border-b border-maroon-100 p-6 relative">
                    <div class="absolute top-0 left-0 w-1.5 h-full bg-maroon-main"></div>
                    <h2 id="medName" class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Medication Name</h2>
                    <div class="flex items-center gap-2 text-sm flex-wrap">
                        <span class="font-semibold text-gray-600 uppercase tracking-wider text-xs">Class:</span>
                        <span id="medClass" class="bg-maroon-100 text-maroon-900 px-3 py-1 rounded-full font-semibold text-xs border border-maroon-200">Class Name</span>
                    </div>
                </div>
                
                <!-- Details Grid -->
                <div class="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-20 md:pb-6">
                    
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-purple-500"></span> Mechanism of Action
                            </h3>
                            <p id="medMoa" class="text-gray-700 text-sm leading-relaxed">...</p>
                        </div>
                        
                        <div>
                            <h3 class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-green-500"></span> Indications
                            </h3>
                            <p id="medInd" class="text-gray-700 text-sm leading-relaxed">...</p>
                        </div>

                        <div>
                            <h3 class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-red-500"></span> Contraindications
                            </h3>
                            <p id="medContra" class="text-gray-700 text-sm leading-relaxed">...</p>
                        </div>
                        
                        <div>
                            <h3 class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-yellow-500"></span> Adverse Reactions
                            </h3>
                            <p id="medAdv" class="text-gray-700 text-sm leading-relaxed">...</p>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-maroon-main"></span> Dosage & Admin
                            </h3>
                            <div id="medDose" class="bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm text-gray-800 leading-relaxed font-mono font-medium shadow-inner">...</div>
                        </div>

                        <div>
                            <h3 class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-indigo-500"></span> Drug Interactions
                            </h3>
                            <p id="medInt" class="text-gray-700 text-sm leading-relaxed">...</p>
                        </div>

                        <div>
                            <h3 class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-teal-500"></span> Duration of Action
                            </h3>
                            <p id="medDur" class="text-gray-700 text-sm leading-relaxed">...</p>
                        </div>

                        <div class="bg-amber-50 p-4 rounded-lg border border-amber-200 shadow-sm">
                            <h3 class="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                Special Considerations
                            </h3>
                            <p id="medSpec" class="text-amber-800 text-sm leading-relaxed">...</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    </div>

    <script>
        // Exact 43 Medication Array Provided
        const medications = [
            { name: "Activated Charcoal", class: "Adsorbent, Antidote", moa: "Binds to and adsorbs ingested toxins in the GI tract, preventing systemic absorption.", ind: "Most oral poisonings and medication overdoses (within 1 hr of ingestion).", contra: "Decreased LOC/unprotected airway, caustic or hydrocarbon ingestions, ileus.", adv: "Nausea, vomiting, constipation, aspiration pneumonitis, black stools.", int: "Reduces effectiveness of other orally administered medications.", dose: "Adult/Ped: 1-2 g/kg PO or via NGT. Typical adult dose is 50g.", dur: "Onset: Immediate. Peak: Varies. Duration: Until excreted.", spec: "Do not give with dairy. Messy; protect patient clothing. Ensure airway is patent." },
            { name: "Adenosine", class: "Antidysrhythmic", moa: "Slows conduction through the AV node; can interrupt reentry pathways.", ind: "Conversion of stable, narrow-complex SVT. Diagnostic for stable wide-complex tachycardias.", contra: "2nd or 3rd degree AV block, sick sinus syndrome, asthma (relative).", adv: "Flushing, chest pressure, brief asystole, dyspnea, hypotension.", int: "Methylxanthines (caffeine/theophylline) antagonize effects. Dipyridamole potentiates.", dose: "Adult: 6mg rapid IV push, followed by 20mL flush. May repeat 12mg in 1-2 mins. Ped: 0.1 mg/kg rapid IV, max 6mg. Repeat 0.2 mg/kg, max 12mg.", dur: "Onset: Seconds. Peak: Seconds. Duration: < 10 seconds (half-life < 5 seconds).", spec: "Must be given very rapidly via proximal IV port. Warn patient of terrible impending doom sensation." },
            { name: "Albuterol", class: "Sympathomimetic, Bronchodilator", moa: "Selective Beta-2 agonist that stimulates sympathetic nervous system, causing smooth muscle relaxation and bronchodilation.", ind: "Bronchospasm in asthma/COPD, allergic reactions with wheezing, hyperkalemia.", contra: "Hypersensitivity, symptomatic tachycardia (relative).", adv: "Tachycardia, tremors, anxiety, palpitations, hypokalemia.", int: "Beta blockers antagonize effects. Synergistic with other sympathomimetics.", dose: "Adult: 2.5mg in 3mL NS via nebulizer over 10-15 mins. Ped: 0.15 mg/kg (max 2.5mg) via nebulizer.", dur: "Onset: 5-15 mins. Peak: 30-120 mins. Duration: 3-4 hours.", spec: "Monitor lung sounds and ECG (heart rate will increase)." },
            { name: "Amiodarone", class: "Antidysrhythmic (Class III)", moa: "Prolongs action potential and refractory period; blocks potassium, sodium, and calcium channels.", ind: "V-Fib, pulseless V-Tach, stable wide-complex tachycardia.", contra: "Cardiogenic shock, 2nd/3rd degree AV blocks, bradycardia.", adv: "Hypotension, bradycardia, prolonged QT interval, pulmonary toxicity (long term).", int: "Increases levels of digoxin, warfarin. Risk of QT prolongation with other meds.", dose: "Cardiac Arrest: 300mg IV/IO. Repeat 150mg in 3-5 mins. Stable V-Tach: 150mg over 10 mins.", dur: "Onset: Minutes. Peak: Hours. Duration: Days to weeks.", spec: "If hypotension develops during infusion, slow rate or stop and administer fluids." },
            { name: "Amyl Nitrite", class: "Antidote, Cyanide Poisoning Adjunct", moa: "Converts hemoglobin to methemoglobin, which binds tightly with cyanide, freeing cytochrome oxidase.", ind: "Cyanide poisoning.", contra: "None in the setting of severe cyanide poisoning.", adv: "Headache, severe hypotension, tachycardia, nausea.", int: "Potentiates other vasodilators and antihypertensives.", dose: "Adult/Ped: Break 1-2 ampules, inhale for 30 seconds of every minute until IV access is established for sodium nitrite.", dur: "Onset: 10-30 seconds. Peak: Minutes. Duration: 3-5 minutes.", spec: "Highly flammable. Rarely used now; replaced mostly by Hydroxocobalamin (Cyanokit)." },
            { name: "Aspirin", class: "Platelet inhibitor, Anti-inflammatory", moa: "Prevents formation of thromboxane A2, which causes platelets to aggregate and form plugs.", ind: "New onset chest pain suggestive of Acute Coronary Syndrome (ACS).", contra: "Hypersensitivity, active GI ulcer/bleeding, hemorrhagic stroke.", adv: "Heartburn, GI bleeding, nausea, wheezing in allergic patients.", int: "Increases bleeding risk with other anticoagulants (e.g., Warfarin, Heparin).", dose: "Adult: 162-324 mg PO (chewable preferred). Ped: Not recommended.", dur: "Onset: 15-30 mins. Peak: 1-2 hours. Duration: 4-6 hours (antiplatelet effect lasts days).", spec: "Have patient chew tablets for faster absorption. Do not use enteric-coated." },
            { name: "Atropine", class: "Anticholinergic (Parasympatholytic)", moa: "Inhibits action of acetylcholine at postganglionic parasympathetic receptor sites; increases heart rate.", ind: "Hemodynamically unstable bradycardia, organophosphate poisoning, nerve agent exposure.", contra: "Tachycardia, narrow-angle glaucoma, hypothermic bradycardia.", adv: "Tachycardia, dry mouth, dilated pupils, blurred vision, urinary retention.", int: "Enhanced anticholinergic effects with antihistamines, tricyclic antidepressants.", dose: "Bradycardia: 1mg IV/IO every 3-5 mins (max 3mg). Organophosphate: 2-4mg or higher until secretions dry.", dur: "Onset: Immediate. Peak: 2-4 mins. Duration: 2-6 hours.", spec: "Paradoxical bradycardia can occur if pushed too slowly or if dose is too small (<0.5mg)." },
            { name: "Calcium Chloride", class: "Electrolyte", moa: "Increases cardiac contractile state (positive inotrope); antagonizes toxicity of hyperkalemia and magnesium.", ind: "Hyperkalemia, hypocalcemia, calcium channel blocker toxicity, magnesium sulfate overdose.", contra: "V-Fib, hypercalcemia, digitalis toxicity.", adv: "Bradycardia (if pushed too fast), local tissue necrosis (if IV infiltrates), metallic taste.", int: "Incompatible with sodium bicarbonate in same IV line (precipitates).", dose: "Adult: 500-1000 mg slow IV push. Ped: 20 mg/kg slow IV push.", dur: "Onset: Immediate. Peak: Immediate. Duration: 30-120 mins.", spec: "Ensure good IV patency. Give slowly. Calcium Gluconate is an alternative with less tissue necrosis risk." },
            { name: "Dextrose (50%, 25%, 10%)", class: "Carbohydrate, Antihypoglycemic", moa: "Rapidly increases serum glucose levels.", ind: "Hypoglycemia, altered mental status of unknown etiology.", contra: "Intracranial hemorrhage (relative), hyperglycemia.", adv: "Tissue necrosis if extravasation occurs, cerebral edema in children if given too rapidly.", int: "None significant in emergency setting.", dose: "Adult: 12.5-25g of D50 slow IV. Ped: 0.5-1 g/kg (Use D25 for toddlers, D10 for neonates).", dur: "Onset: 1 minute. Peak: Varies. Duration: Varies depending on degree of hypoglycemia.", spec: "Ensure patent IV. Recheck blood glucose after administration." },
            { name: "Diazepam", class: "Benzodiazepine (Schedule IV)", moa: "Binds to GABA receptors, causing sedation, amnesia, and muscle relaxation.", ind: "Active seizures, anxiety, skeletal muscle relaxation, pacing/cardioversion sedation.", contra: "Hypotension, respiratory depression, head injury.", adv: "Respiratory depression, hypotension, drowsiness, ataxia.", int: "Incompatible with most other medications in same IV line. Potentiates CNS depressants.", dose: "Seizures: 5-10 mg IV (max 30mg). Sedation: 5-15 mg slow IV. Ped: 0.1-0.2 mg/kg IV.", dur: "Onset: 1-5 mins. Peak: 15 mins. Duration: 20-50 mins.", spec: "Flumazenil is the reversal agent. Flush line well before and after administration." },
            { name: "Diltiazem", class: "Calcium Channel Blocker", moa: "Blocks calcium influx during depolarization, slowing AV node conduction and prolonging refractory period.", ind: "A-Fib or A-Flutter with rapid ventricular response (RVR), PSVT refractory to adenosine.", contra: "Hypotension, 2nd/3rd degree AV block, WPW syndrome, sick sinus syndrome.", adv: "Hypotension, bradycardia, heart block, dizziness.", int: "Caution with beta blockers (synergistic depression of contractility and AV conduction).", dose: "Adult: 0.25 mg/kg slow IV over 2 mins. May repeat at 0.35 mg/kg in 15 mins.", dur: "Onset: 2-5 mins. Peak: 7 mins. Duration: 1-3 hours.", spec: "Monitor BP closely. Keep calcium available to reverse severe hypotension." },
            { name: "Diphenhydramine HCI", class: "Antihistamine (H1 Blocker)", moa: "Blocks histamine binding at H1 receptors; has significant anticholinergic properties.", ind: "Allergic reactions, anaphylaxis (adjunct to Epi), dystonic reactions (phenothiazine OD).", contra: "Asthma/lower respiratory diseases, narrow-angle glaucoma.", adv: "Drowsiness, dry mouth, blurred vision, tachycardia, palpitations, thickening of bronchial secretions.", int: "Potentiates CNS depressants, alcohol, MAOIs.", dose: "Adult: 25-50 mg IV/IM. Ped: 1-2 mg/kg IV/IM (max 50 mg).", dur: "Onset: 15-30 mins. Peak: 1 hour. Duration: 3-12 hours.", spec: "Does not reverse anaphylaxis by itself; Epinephrine is first-line." },
            { name: "Dopamine", class: "Sympathomimetic, Inotrope", moa: "Dose-dependent: Renal/Mesenteric vasodilation (low), Beta-1 cardiac stimulation (moderate), Alpha-1 vasoconstriction (high).", ind: "Cardiogenic and distributive shock, hemodynamically significant hypotension/bradycardia.", contra: "Hypovolemic shock (unless volume replaced), pheochromocytoma, tachydysrhythmias.", adv: "Tachycardia, hypertension, palpitations, increased myocardial oxygen demand, tissue necrosis (extravasation).", int: "Inactivated by sodium bicarbonate. MAOIs potentiate effects.", dose: "Adult: 2-20 mcg/kg/min IV infusion, titrated to effect.", dur: "Onset: 1-4 mins. Peak: 5-10 mins. Duration: Ceases quickly when infusion stops.", spec: "Ensure adequate fluid resuscitation first. Administer phentolamine if extravasation occurs." },
            { name: "Epinephrine (1:1000, 1:10,000)", class: "Sympathomimetic", moa: "Direct-acting Alpha and Beta agonist. Causes vasoconstriction, increased heart rate, and bronchodilation.", ind: "Cardiac arrest (1:10k), Anaphylaxis (1:1k), severe asthma, symptomatic bradycardia.", contra: "None in life-threatening emergency. Relative: hypertension, hypothermia.", adv: "Tachycardia, hypertension, anxiety, tremors, arrhythmias, increased myocardial oxygen demand.", int: "Beta blockers may blunt response. Potentiates other sympathomimetics.", dose: "Arrest: 1mg (1:10k) IV q 3-5 mins. Anaphylaxis: 0.3-0.5mg (1:1k) IM. Brady Infusion: 2-10 mcg/min.", dur: "Onset: Immediate (IV), 5-10m (IM). Peak: Minutes. Duration: 5-10 mins.", spec: "Always double-check concentration. 1:10,000 is for IV/IO. 1:1,000 is for IM." },
            { name: "Etomidate", class: "Nonbarbiturate Hypnotic, Anesthetic", moa: "Short-acting hypnotic that depresses the reticular activating system (RAS).", ind: "Premedication for Rapid Sequence Intubation (RSI) or procedural sedation.", contra: "Hypersensitivity, sepsis (due to adrenal suppression risk in some protocols).", adv: "Myoclonus (muscle twitching), respiratory depression, adrenal suppression, nausea/vomiting.", int: "Effects enhanced by other CNS depressants.", dose: "Adult: 0.3 mg/kg IV push over 30-60 seconds. Ped: 0.3 mg/kg IV.", dur: "Onset: < 1 minute. Peak: 1 minute. Duration: 5-10 mins.", spec: "Maintains hemodynamic stability better than other induction agents. Does not provide analgesia." },
            { name: "Fentanyl", class: "Opioid Analgesic (Schedule II)", moa: "Binds to opiate receptors, producing profound analgesia and euphoria.", ind: "Pain management, adjunct to RSI/sedation.", contra: "Hypersensitivity, traumatic brain injury (relative), respiratory depression.", adv: "Respiratory depression, hypotension (less than morphine), chest wall rigidity (if pushed fast).", int: "Enhanced by CNS depressants, alcohol, sedatives.", dose: "Adult: 1-2 mcg/kg slow IV/IM/IN. Ped: 1-2 mcg/kg slow IV/IN.", dur: "Onset: 1-3 mins. Peak: 3-5 mins. Duration: 30-60 mins.", spec: "100x more potent than Morphine. Reversible with Naloxone." },
            { name: "Furosemide", class: "Loop Diuretic", moa: "Inhibits reabsorption of sodium and chloride in the loop of Henle; causes venous dilation.", ind: "Heart failure, pulmonary edema, hypertensive emergencies.", contra: "Hypovolemia, anuria, severe hypotension, suspected electrolyte imbalance.", adv: "Hypotension, hypokalemia, dehydration, tinnitus/deafness (if pushed too fast).", int: "Digitalis toxicity risk increases with hypokalemia.", dose: "Adult: 40-80 mg IV (or 0.5-1 mg/kg). Push slowly.", dur: "Onset: 5 mins (vasodilation), 20 mins (diuresis). Peak: 30-60 mins. Duration: 2-6 hours.", spec: "Protect from light. Ensure patient is truly fluid overloaded, not just in redistributive shock." },
            { name: "Glucagon", class: "Hormone, Antihypoglycemic", moa: "Stimulates liver to convert stored glycogen into glucose. Positive inotrope/chronotrope.", ind: "Hypoglycemia when IV access is unavailable, Beta-blocker/Calcium Channel Blocker overdose.", contra: "Hypersensitivity, pheochromocytoma, insulinoma.", adv: "Nausea, vomiting, tachycardia, hypertension.", int: "Incompatible in solution with most other substances.", dose: "Hypoglycemia: 1mg IM/IN. Beta-blocker OD: 3-10mg IV slow push.", dur: "Onset: 1 min. Peak: 5-20 mins. Duration: 60-90 mins.", spec: "Requires reconstituting powder with supplied diluent. Ineffective if glycogen stores are depleted (starvation)." },
            { name: "Glucose", class: "Carbohydrate", moa: "Absorbed in the GI tract and distributed to tissues to increase circulating blood glucose.", ind: "Hypoglycemia in conscious patients who can swallow.", contra: "Unconscious, unable to swallow, absent gag reflex.", adv: "Nausea, aspiration (if mental status deteriorates).", int: "None.", dose: "Adult/Ped: 15-45g PO.", dur: "Onset: 10 mins. Peak: Varies. Duration: Varies.", spec: "Must be swallowed; is not absorbed sublingually or buccally." },
            { name: "Haloperidol", class: "Antipsychotic", moa: "Blocks dopamine receptors in the brain.", ind: "Acute psychotic episodes, severe agitation/chemical restraint.", contra: "Agitation secondary to shock/hypoxia, Parkinson's disease, CNS depression.", adv: "Extrapyramidal symptoms (dystonia), QT prolongation, hypotension, sedation.", int: "Enhanced CNS depression with alcohol, sedatives.", dose: "Adult: 2-5 mg IM/IV. Ped: Not routinely recommended.", dur: "Onset: 10-20 mins (IM). Peak: 30-45 mins. Duration: 12-24 hours.", spec: "If dystonic reaction occurs, treat with Diphenhydramine." },
            { name: "Hydralazine", class: "Vasodilator, Antihypertensive", moa: "Directly relaxes vascular smooth muscle, primarily arterial, causing vasodilation.", ind: "Severe hypertension (e.g., preeclampsia/eclampsia in some systems).", contra: "Coronary artery disease, mitral valve rheumatic heart disease.", adv: "Tachycardia, headache, angina, hypotension.", int: "Other antihypertensives potentiate effects.", dose: "Adult: 10-20 mg slow IV.", dur: "Onset: 10-20 mins. Peak: 10-80 mins. Duration: 3-8 hours.", spec: "Rarely used in prehospital setting today, often replaced by Labetalol or Nitroglycerin." },
            { name: "Intravenous Fluids (D5W, NS, LR)", class: "Crystalloid Solutions", moa: "Replaces water and electrolytes (NS/LR) or provides free water (D5W).", ind: "Hypovolemia, shock, medication mixing/infusions.", contra: "Heart failure/pulmonary edema (give with caution).", adv: "Fluid overload, hemodilution, electrolyte imbalance (in large volumes).", int: "Some meds precipitate in LR (e.g., Amiodarone, blood products).", dose: "Titrate to effect or local protocol (e.g., 20 mL/kg bolus for shock).", dur: "Onset: Immediate. Duration: Varies (distributes to interstitial space quickly).", spec: "LR contains potassium; use caution in crush injuries. NS is preferred for blood product administration." },
            { name: "Ipratropium", class: "Anticholinergic, Bronchodilator", moa: "Inhibits interaction of acetylcholine at receptor sites on bronchial smooth muscle, resulting in bronchodilation.", ind: "Asthma, COPD exacerbation (often in conjunction with Albuterol).", contra: "Hypersensitivity to atropine or soy/peanut products.", adv: "Dry mouth, headache, blurred vision, palpitations.", int: "None significant in emergency setting.", dose: "Adult/Ped: 0.5 mg in 2.5 mL nebulized, usually mixed with Albuterol (Duoneb).", dur: "Onset: 1-3 mins. Peak: 1.5-2 hours. Duration: 4-6 hours.", spec: "Should not be used as a primary agent for acute bronchospasm; always combine with a beta-agonist." },
            { name: "Ketamine", class: "Dissociative Anesthetic", moa: "Blocks NMDA receptors, causing a trance-like state (dissociation), amnesia, and profound analgesia.", ind: "Excited delirium, pain management, RSI induction.", contra: "Conditions where significant elevation in BP is dangerous (e.g., severe hypertension).", adv: "Emergence reactions (hallucinations), increased HR/BP, hypersalivation, laryngospasm.", int: "Enhanced sedation with CNS depressants.", dose: "Pain: 0.1-0.3 mg/kg IV. RSI: 1-2 mg/kg IV. Excited Delirium: 4 mg/kg IM.", dur: "Onset: < 1 min (IV). Peak: 1 min. Duration: 10-15 mins.", spec: "Does not depress respiratory drive like opioids/benzodiazepines." },
            { name: "Labetalol", class: "Alpha and Beta Adrenergic Blocker", moa: "Lowers BP by blocking Alpha-1, Beta-1, and Beta-2 receptors.", ind: "Hypertensive emergencies, acute ischemic stroke (BP control).", contra: "Asthma/COPD, bradycardia, 2nd/3rd degree heart block, cardiogenic shock.", adv: "Hypotension, bradycardia, bronchospasm, dizziness.", int: "Calcium channel blockers can cause severe hypotension/bradycardia.", dose: "Adult: 10-20 mg IV push over 1-2 mins. May repeat or double dose every 10 mins (max 300mg).", dur: "Onset: 2-5 mins. Peak: 5-15 mins. Duration: 2-4 hours.", spec: "Monitor BP every 5 mins. Patient must be supine." },
            { name: "Lidocaine", class: "Antidysrhythmic (Class Ib), Local Anesthetic", moa: "Decreases automaticity by slowing phase 4 depolarization; raises ventricular fibrillation threshold.", ind: "V-Fib, pulseless V-Tach, stable V-Tach, IO infusion pain control.", contra: "2nd/3rd degree AV block, idioventricular rhythm, hypersensitivity to 'caines'.", adv: "Seizures (toxicity), confusion, hypotension, bradycardia.", int: "Metabolic clearance decreased in liver disease.", dose: "Arrest: 1-1.5 mg/kg IV/IO. IO Pain: 40mg slow push.", dur: "Onset: 1-5 mins. Peak: 5-10 mins. Duration: Variable (15-120 mins).", spec: "Reduce maintenance infusion dose by 50% in patients >70 yrs or with liver failure." },
            { name: "Lorazepam", class: "Benzodiazepine (Schedule IV)", moa: "Enhances GABA, causing sedation, anxiolysis, amnesia, and anticonvulsant effects.", ind: "Status epilepticus, severe anxiety, sedation.", contra: "Hypersensitivity, acute narrow-angle glaucoma, severe hypotension.", adv: "Respiratory depression, hypotension, excessive sedation.", int: "Synergistic with CNS depressants/alcohol.", dose: "Adult: 2-4 mg IV/IM. Ped: 0.05-0.1 mg/kg IV/IM.", dur: "Onset: 2-5 mins (IV). Peak: 15-20 mins. Duration: 6-8 hours.", spec: "Longer duration of action than Diazepam. Must be diluted with equal volume of NS for IV administration in some formulations." },
            { name: "Magnesium Sulfate", class: "Electrolyte, Antidysrhythmic, Anticonvulsant", moa: "Reduces striated muscle contractions; blocks peripheral neuromuscular transmission.", ind: "Torsades de Pointes, Eclampsia (seizures), severe asthma exacerbation.", contra: "Heart blocks, myocardial damage, renal impairment.", adv: "Hypotension, respiratory depression, flushing, loss of deep tendon reflexes.", int: "Enhances effects of CNS depressants and neuromuscular blockers.", dose: "Arrest (Torsades): 1-2g IV. Eclampsia: 4g IV over 10-20 mins. Asthma: 2g IV over 10 mins.", dur: "Onset: Immediate. Peak: Varies. Duration: 30 mins.", spec: "Calcium chloride is the antidote for magnesium toxicity (respiratory depression)." },
            { name: "Methyl-Prednisone", class: "Corticosteroid", moa: "Potent synthetic glucocorticoid that suppresses acute and chronic inflammation.", ind: "Anaphylaxis, severe asthma, COPD exacerbation.", contra: "Systemic fungal infections, premature infants.", adv: "Hyperglycemia, fluid retention, hypertension.", int: "None significant in single emergency dose.", dose: "Adult: 125 mg IV/IM. Ped: 1-2 mg/kg IV/IM.", dur: "Onset: 1-2 hours. Peak: Varies. Duration: 8-24 hours.", spec: "Requires reconstitution. Does not act immediately; use bronchodilators/epinephrine for acute relief." },
            { name: "Midazolam", class: "Benzodiazepine (Schedule IV)", moa: "Enhances GABA, providing sedation, amnesia, and anticonvulsant properties.", ind: "Seizures, sedation for pacing/cardioversion, RSI premedication, chemical restraint.", contra: "Hypotension, narrow-angle glaucoma, shock.", adv: "Respiratory depression, apnea, hypotension.", int: "Enhanced by CNS depressants.", dose: "Adult: 2-5 mg IV/IM/IN. Ped: 0.1-0.2 mg/kg IV/IM/IN.", dur: "Onset: 1-3 mins (IV). Peak: 5-7 mins. Duration: 20-30 mins.", spec: "Shortest acting benzo. Flumazenil is reversal agent. Excellent for IN (intranasal) administration." },
            { name: "Morphine", class: "Opioid Analgesic (Schedule II)", moa: "Binds to opiate receptors in CNS; reduces preload and afterload by increasing venous capacitance.", ind: "Severe pain, chest pain associated with ACS, pulmonary edema.", contra: "Hypotension, head injury, respiratory depression, undiagnosed abdominal pain.", adv: "Hypotension, respiratory depression, nausea, vomiting, pinpoint pupils.", int: "CNS depressants enhance effects.", dose: "Adult: 2-10 mg slow IV. Ped: 0.1 mg/kg IV.", dur: "Onset: 1-2 mins. Peak: 20 mins. Duration: 2-4 hours.", spec: "Causes histamine release, which can drop BP. Reversible with Naloxone." },
            { name: "Naloxone", class: "Opioid Antagonist", moa: "Competitively binds to opiate receptors, displacing opioid molecules.", ind: "Opioid overdose with respiratory depression.", contra: "Hypersensitivity.", adv: "Acute withdrawal syndrome, combativeness, vomiting, tachycardia, diaphoresis.", int: "Reverses analgesia.", dose: "Adult: 0.4-2.0 mg IV/IM/IN, titrate to adequate respiratory rate. Ped: 0.1 mg/kg.", dur: "Onset: < 2 mins (IV). Peak: Varies. Duration: 30-60 mins.", spec: "Half-life is shorter than most opioids; patient may relapse into coma and require additional doses." },
            { name: "Nitroglycerin (Paste, Spray, Tablets)", class: "Vasodilator", moa: "Relaxes vascular smooth muscle, decreasing preload and afterload; decreases myocardial oxygen demand.", ind: "ACS chest pain, pulmonary edema/CHF.", contra: "Hypotension (SBP < 90), use of ED meds (Viagra, Cialis) in past 24-48 hrs, right ventricular infarction.", adv: "Headache, hypotension, reflex tachycardia, syncope.", int: "Severe hypotension with alcohol and phosphodiesterase inhibitors (ED meds).", dose: "Tablet/Spray: 0.4 mg SL q 5 mins (max 3 doses). Paste: 1-2 inches topically.", dur: "Onset: 1-3 mins. Peak: 5-10 mins. Duration: 20-30 mins (SL), hours (Paste).", spec: "Always check BP before and after administration. Wear gloves when applying paste." },
            { name: "NorEpinepherine", class: "Sympathomimetic", moa: "Potent alpha agonist (vasoconstriction) and beta-1 agonist (inotropy).", ind: "Cardiogenic shock, neurogenic shock, severe septic shock (hemodynamically significant hypotension).", contra: "Hypovolemia (without volume replacement).", adv: "Hypertension, reflex bradycardia, tissue necrosis (extravasation), increased myocardial oxygen demand.", int: "Alpha/beta blockers antagonize. MAOIs potentiate.", dose: "Adult: 0.1-0.5 mcg/kg/min IV infusion, titrated to effect.", dur: "Onset: 1-3 mins. Peak: Varies. Duration: 1 min after infusion stops.", spec: "First-line pressor for sepsis. Monitor BP continuously. Ensure patent large-bore IV." },
            { name: "Ondansetron", class: "Antiemetic", moa: "Blocks serotonin 5-HT3 receptors in the GI tract and chemoreceptor trigger zone.", ind: "Nausea and vomiting.", contra: "Hypersensitivity, prolonged QT syndrome.", adv: "Headache, dizziness, QT prolongation.", int: "Other QT-prolonging drugs (Amiodarone, Haloperidol).", dose: "Adult: 4-8 mg IV/IM/PO/ODT. Ped: 0.15 mg/kg IV.", dur: "Onset: 15-30 mins. Peak: 2 hours. Duration: 3-6 hours.", spec: "Non-sedating. Highly effective for prophylactic use before administering opioids." },
            { name: "Oxygen", class: "Naturally occurring atmospheric gas", moa: "Reverses hypoxemia.", ind: "Hypoxia, suspected hypoxia, respiratory distress, shock, trauma, CO poisoning.", contra: "None in emergency setting. Use caution in COPD (titrate to SpO2 88-92%).", adv: "Dry mucous membranes, potential oxygen toxicity with prolonged high concentrations.", int: "None.", dose: "Nasal Cannula: 1-6 L/min. NRB: 10-15 L/min. BVM: 15 L/min.", dur: "Onset: Immediate. Peak: Immediate. Duration: Depleted rapidly when removed.", spec: "Treat the patient, not the pulse oximeter. High concentrations in neonates can cause retrolental fibroplasia." },
            { name: "Pancuronium", class: "Nondepolarizing Neuromuscular Blocker", moa: "Competitively binds to acetylcholine receptors, preventing muscle contraction (paralysis).", ind: "Maintenance of paralysis after intubation.", contra: "Inability to control airway, hypersensitivity.", adv: "Tachycardia, hypertension, prolonged paralysis, apnea.", int: "Enhanced by magnesium sulfate, general anesthetics.", dose: "Adult: 0.06-0.1 mg/kg IV.", dur: "Onset: 3-5 mins. Peak: 3-5 mins. Duration: 45-60 mins.", spec: "Long-acting paralytic. Does NOT provide sedation or analgesia; always sedate patient concurrently." },
            { name: "Promethazine HCI", class: "Antiemetic, Phenothiazine, Antihistamine", moa: "Blocks H1 receptors and alters dopamine in the CNS; has anticholinergic properties.", ind: "Nausea, vomiting, motion sickness, potentiate effects of analgesics.", contra: "Coma, severe CNS depression, children < 2 years.", adv: "Tissue necrosis (if IV infiltrates), sedation, dystonia, QT prolongation.", int: "Potentiates CNS depressants.", dose: "Adult: 12.5-25 mg deep IM or slow IV (diluted).", dur: "Onset: 5-20 mins (IV). Peak: Varies. Duration: 4-6 hours.", spec: "High risk of tissue injury with IV administration; give deeply IM if possible or highly diluted in flowing IV line." },
            { name: "Rocuronium", class: "Nondepolarizing Neuromuscular Blocker", moa: "Competitively binds to acetylcholine receptors, paralyzing skeletal muscle.", ind: "RSI (Rapid Sequence Intubation), maintenance of paralysis.", contra: "Inability to control airway, hypersensitivity.", adv: "Apnea, transient tachycardia.", int: "Effects enhanced by magnesium sulfate.", dose: "Adult/Ped: 1 mg/kg IV.", dur: "Onset: 1-2 mins. Peak: 1-2 mins. Duration: 30-45 mins.", spec: "Does NOT provide sedation or analgesia. Used often as an alternative to Succinylcholine when contraindicated." },
            { name: "Sodium Bicarbonate", class: "Alkalinizing Agent", moa: "Buffers metabolic acidosis by reacting with hydrogen ions to form water and carbon dioxide.", ind: "Tricyclic antidepressant overdose, hyperkalemia, prolonged cardiac arrest (with known acidosis), crush injuries.", contra: "Alkalosis, hypocalcemia.", adv: "Metabolic alkalosis, tissue necrosis (extravasation), hypernatremia.", int: "Deactivates catecholamines (Epi/Dopamine) and precipitates with Calcium in same IV line.", dose: "Adult/Ped: 1 mEq/kg IV push. May repeat 0.5 mEq/kg q 10 mins.", dur: "Onset: Immediate. Peak: Immediate. Duration: 1-2 hours.", spec: "Ensure adequate ventilation (flush out CO2) for it to work properly." },
            { name: "Succinylcholine", class: "Depolarizing Neuromuscular Blocker", moa: "Binds to acetylcholine receptors causing initial depolarization (fasciculations) followed by paralysis.", ind: "RSI (Rapid Sequence Intubation).", contra: "Malignant hyperthermia, hyperkalemia, burns/crush injuries > 72 hours old, neuromuscular disease (e.g., ALS).", adv: "Hyperkalemia, bradycardia, fasciculations, increased ICP/IOP.", int: "Enhances digitalis toxicity.", dose: "Adult: 1.5-2 mg/kg rapid IV. Ped: 1-2 mg/kg IV.", dur: "Onset: < 1 minute. Peak: 1 min. Duration: 5-10 mins.", spec: "Does NOT provide sedation or analgesia. Have Atropine ready for bradycardia (esp in children)." },
            { name: "Tranexamic Acid (TXA)", class: "Antifibrinolytic", moa: "Inhibits plasminogen activation, preventing the breakdown of fibrin clots.", ind: "Severe hemorrhage (trauma) < 3 hours from injury, massive bleeding.", contra: "Injury > 3 hours old, subarachnoid hemorrhage, active intravascular clotting.", adv: "Hypotension (if pushed too fast), thromboembolic events, visual disturbances.", int: "Risk of clotting increased with estrogen/oral contraceptives.", dose: "Adult: 1g in 100mL NS infused over 10 mins. Ped: Varies by protocol (often 15 mg/kg).", dur: "Onset: Unknown. Peak: Varies. Duration: 7-8 hours.", spec: "MUST be given over 10 minutes; rapid push causes severe hypotension." },
            { name: "Vecuronium", class: "Nondepolarizing Neuromuscular Blocker", moa: "Competitively blocks acetylcholine at the neuromuscular junction.", ind: "Maintenance of paralysis after intubation.", contra: "Inability to control airway.", adv: "Apnea, prolonged paralysis.", int: "Enhanced by magnesium sulfate.", dose: "Adult: 0.1 mg/kg IV.", dur: "Onset: 1-3 mins. Peak: 3-5 mins. Duration: 30-45 mins.", spec: "Reconstitute powder. Does NOT provide sedation or analgesia." }
        ];

        const searchInput = document.getElementById('searchInput');
        const medList = document.getElementById('medList');
        const welcomeScreen = document.getElementById('welcomeScreen');
        const medDetails = document.getElementById('medDetails');
        
        // Mobile layout elements
        const medSidebar = document.getElementById('medSidebar');
        const medMain = document.getElementById('medMain');

        // Fields to populate
        const fields = {
            name: document.getElementById('medName'),
            class: document.getElementById('medClass'),
            moa: document.getElementById('medMoa'),
            ind: document.getElementById('medInd'),
            contra: document.getElementById('medContra'),
            adv: document.getElementById('medAdv'),
            dose: document.getElementById('medDose'),
            int: document.getElementById('medInt'),
            dur: document.getElementById('medDur'),
            spec: document.getElementById('medSpec'),
        };

        let selectedMedication = null;

        function renderList(filter = '') {
            medList.innerHTML = '';
            
            const filtered = medications.filter(med => 
                med.name.toLowerCase().includes(filter.toLowerCase()) || 
                med.class.toLowerCase().includes(filter.toLowerCase())
            );

            if (filtered.length === 0) {
                medList.innerHTML = `<li class="p-4 text-sm text-gray-500 text-center italic">No medications found.</li>`;
                return;
            }

            filtered.forEach(med => {
                const li = document.createElement('li');
                
                // Add active state styling
                const isActive = selectedMedication && selectedMedication.name === med.name;
                
                li.className = `p-3 rounded-lg cursor-pointer transition-colors border shadow-sm ${
                    isActive 
                    ? 'bg-maroon-main text-white border-maroon-800' 
                    : 'bg-white hover:bg-maroon-50 border-gray-100'
                }`;
                
                li.innerHTML = `
                    <div class="font-semibold text-sm ${isActive ? 'text-white' : 'text-gray-900'}">${med.name}</div>
                    <div class="text-xs mt-1 truncate ${isActive ? 'text-maroon-100' : 'text-gray-500'}">${med.class}</div>
                `;
                
                li.onclick = () => selectMedication(med);
                medList.appendChild(li);
            });
        }

        function selectMedication(med) {
            selectedMedication = med;
            
            // Re-render list to show active state
            renderList(searchInput.value);

            // Hide welcome, show details
            welcomeScreen.classList.add('hidden');
            welcomeScreen.classList.remove('md:flex');
            medDetails.classList.remove('hidden');

            // Populate fields
            fields.name.textContent = med.name;
            fields.class.textContent = med.class;
            fields.moa.textContent = med.moa;
            fields.ind.textContent = med.ind;
            fields.contra.textContent = med.contra;
            fields.adv.textContent = med.adv;
            fields.dose.textContent = med.dose;
            fields.int.textContent = med.int;
            fields.dur.textContent = med.dur;
            fields.spec.textContent = med.spec;
            
            // Mobile Transition: Hide sidebar, show main
            if(window.innerWidth < 768) {
                medSidebar.classList.add('hidden');
                medMain.classList.remove('hidden');
                medMain.classList.add('flex', 'flex-col'); // override hidden
            }
        }

        function backToList() {
            // Mobile Transition: Show sidebar, hide main
            medSidebar.classList.remove('hidden');
            medMain.classList.add('hidden');
            medMain.classList.remove('flex', 'flex-col');
        }

        // Handle resizing window so layout resets gracefully
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 768) {
                medSidebar.classList.remove('hidden');
                medMain.classList.remove('hidden');
            } else {
                // If a med is selected, hide sidebar. Else hide main.
                if(selectedMedication) {
                    medSidebar.classList.add('hidden');
                } else {
                    medMain.classList.add('hidden');
                }
            }
        });

        // Event Listeners
        searchInput.addEventListener('input', (e) => {
            renderList(e.target.value);
        });

        // Initialize App
        renderList();
        
        // Initial mobile setup
        if(window.innerWidth < 768) {
            medMain.classList.add('hidden');
        }

    </script>
</body>
</html>
