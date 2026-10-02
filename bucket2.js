// AIRWAY BUCKET (Bucket 2)

protocolsDatabase[2] = [
    {
        id: "2A",
        title: "2A: Airway Assessment - Adult & Pediatric",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult and Pediatric patients.</li>
                    <li><strong>Treatment Priorities:</strong> Use the least invasive method of airway management appropriate to the patient, use a method with which you are procedurally comfortable, utilize meticulous suctioning to keep the airway clear of debris, and continuously monitor to ensure oxygenation and ventilation are as effective as intended and as needed.</li>
                </ul>

                <h3>2. General Supportive & Initial Assessment</h3>
                <ul>
                    <li><strong>Primary & Secondary Survey:</strong> EMS professionals should always work in developing "Plan B" approaches in airway management to anticipate and be capable of effective care when facing obstacles to usually successful airway management methods.</li>
                    <li><strong>Core Concepts of Airway Management:</strong>
                        <ul>
                            <li><strong>Patency:</strong> How open and clear is the airway, free of foreign substances, blood, vomitus, and tongue obstruction?</li>
                            <li><strong>Ventilation:</strong> The amount of air the patient is able to inhale and exhale in a given time, promoting exhalation of carbon dioxide. Use waveform capnography if equipped.</li>
                            <li><strong>Oxygenation:</strong> The amount of oxygen the patient is able to convey to the circulation for tissue/organ perfusion. Use pulse oximetry when available.</li>
                        </ul>
                    </li>
                </ul>

                <h3>3. Assessment & Diagnostic Tables</h3>
                <h4 class="font-bold mt-4 mb-2">LEMON Airway Evaluation Criteria</h4>
                <p class="text-xs text-gray-600 mb-3">Assessment for difficult airway characteristics should precede intubation attempt(s).</p>
                
                <div class="space-y-2 mb-4 text-sm">
                    <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <strong class="text-blue-900 block font-bold">L - Look Externally</strong>
                        <span class="text-gray-700">Heavy perioral facial hair? Mis-shaped or missing dentition?</span>
                    </div>
                    <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <strong class="text-blue-900 block font-bold">E - Evaluate 3-3-2</strong>
                        <span class="text-gray-700">Can at least 3 fingers fit in the vertical axis of the mouth? Can 3 fingers fit between chin apex and top of neck? Can 2 fingers fit between top of thyroid cartilage and top of neck? (Three "yes" answers = lesser difficulty).</span>
                    </div>
                    <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <strong class="text-blue-900 block font-bold">M - Mallampati Scoring</strong>
                        <span class="text-gray-700">View of posterior pharyngeal structures correlated to anticipated laryngeal view (see visual guide below).</span>
                    </div>
                    <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <strong class="text-blue-900 block font-bold">O - Obstructions</strong>
                        <span class="text-gray-700">Oral or upper neck masses? Large tongue?</span>
                    </div>
                    <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <strong class="text-blue-900 block font-bold">N - Neck Mobility</strong>
                        <span class="text-gray-700">Unable to assess if there are concerns of a cervical spine injury.</span>
                    </div>
                </div>

                <h4 class="font-bold mt-4 mb-2">Mallampati Scoring Visual Guide</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
                    <div class="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
                        <span class="font-bold text-emerald-800">Class 1 (Grade 1)</span>
                        <p class="text-gray-700 mt-1">Entire posterior pharynx is fully exposed.</p>
                    </div>
                    <div class="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
                        <span class="font-bold text-emerald-800">Class 2 (Grade 2)</span>
                        <p class="text-gray-700 mt-1">Posterior pharynx is partially exposed.</p>
                    </div>
                    <div class="bg-amber-50 border border-amber-200 p-3 rounded-lg">
                        <span class="font-bold text-amber-800">Class 3 (Grade 3)</span>
                        <p class="text-gray-700 mt-1">Posterior pharynx cannot be seen; only the base of the uvula is exposed.</p>
                    </div>
                    <div class="bg-rose-50 border border-rose-200 p-3 rounded-lg">
                        <span class="font-bold text-rose-800">Class 4 (Grade 4)</span>
                        <p class="text-gray-700 mt-1">No posterior pharyngeal structures can be seen.</p>
                    </div>
                </div>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <ul>
                    <li><strong>EMT:</strong>
                        <ul>
                            <li><strong>Medical Respiratory Arrest:</strong> Open airway using head tilt-chin lift. Oxygenate/ventilate with BVM with 100% FiO2. Insert NPA(s) and/or OPA as needed. Suction as needed. Place a supraglottic airway if advanced personnel are unavailable or unable to intubate.</li>
                            <li><strong>Trauma Respiratory Arrest:</strong> Open airway using jaw thrust maneuver with in-line spinal stabilization. Oxygenate/ventilate with BVM (100% FiO2). Insert NPA only if no head/facial trauma, and/or OPA. Suction as needed. Place supraglottic airway if advanced personnel unavailable/unable.</li>
                            <li><strong>Medical Respiratory Insufficiency:</strong> Establish patency spontaneously, by positioning, or with NPA(s). Suction as needed. Apply supplemental O2 via NC, NRB, BVM, or Bi/CPAP as indicated. Assist ventilations by BVM or Bi/CPAP as needed.</li>
                            <li><strong>Trauma Respiratory Insufficiency:</strong> Establish patency spontaneously, by positioning, or NPA(s) if no facial trauma. Suction as needed. Apply O2 via NC, NRB, or BVM. Assist ventilations by BVM as needed.</li>
                        </ul>
                    </li>
                    <li><strong>AEMT / Paramedic:</strong>
                        <ul>
                            <li><strong>Medical & Trauma Respiratory Insufficiency:</strong> Intubate if basic actions (patency, suction, O2, BVM) do not achieve needed oxygenation/ventilation.</li>
                        </ul>
                    </li>
                </ul>

                <h3>7. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Documentation Note:</strong> Advanced procedures should only be attempted if clinically indicated after less invasive measures fail or are futile to attempt. Airway management decisions and actions should always be thoroughly documented in the PCR.</li>
                </ul>
            </div>
        `
    },
    {
        id: "2B",
        title: "2B: Airway Establishment / Obstruction Management - Adult & Pediatric",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult and Pediatric patients with foreign body airway obstructions.</li>
                    <li><strong>Entry Criteria:</strong> Verified choking patient.</li>
                    <li><strong>Treatment Priorities:</strong> 1) Remove the obstruction, 2) Oxygenation/Ventilation support.</li>
                </ul>

                <h3>2. General Supportive & Initial Assessment</h3>
                <ul>
                    <li><strong>Primary & Secondary Survey:</strong> Verify if the patient is choking. Encourage coughing and breathing efforts. Avoid back slaps.</li>
                    <li>Instruct callers or bystanders in the Heimlich maneuver if indicated before taking over care.</li>
                </ul>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <ul>
                    <li><strong>EMT:</strong>
                        <ul>
                            <li><strong>Adults:</strong> Perform Heimlich maneuver or abdominal thrusts if supine. (Use chest compressions if pregnant or morbidly obese).</li>
                            <li><strong>Pediatrics:</strong> Perform Heimlich maneuver or abdominal thrusts if supine. (Use chest compressions if child is &lt; 1 year old).</li>
                            <li>Obtain vital signs and apply cardiac monitor (if equipped).</li>
                            <li>Administer O2 via NC, NRB, or BVM as appropriate.</li>
                            <li>Measure End-Tidal CO2 and monitor waveform capnography (mandatory if intubated).</li>
                            <li>Place a supraglottic airway if indicated, but only if BVM ventilations are ineffective.</li>
                        </ul>
                    </li>
                    <li><strong>AEMT:</strong>
                        <ul>
                            <li>Perform direct laryngoscopy and removal of foreign body.</li>
                            <li><strong>Adult:</strong> Intubate if indicated.</li>
                            <li>Establish IV access (if needed).</li>
                        </ul>
                    </li>
                    <li><strong>Paramedic:</strong>
                        <ul>
                            <li><strong>Adult:</strong> Perform medication-assisted intubation if indicated.</li>
                            <li><strong>Adult:</strong> Perform cricothyrotomy for complete, intractable obstruction.</li>
                            <li><strong>Pediatric (&gt; 6 years old):</strong> Perform cricothyrotomy for complete, intractable obstruction.</li>
                            <li>Consult Online Medical Control (OLMC) if obstruction persists.</li>
                            <li>Provide continuous assessment and treatment per applicable protocol(s).</li>
                        </ul>
                    </li>
                </ul>

                <h3>7. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Textbook Alignment Note:</strong> AHA guidelines specify back slaps followed by chest thrusts for infants under 1 year old. The protocol dictates chest compressions for this age group, which functionally aligns with the chest thrust mechanism taught in AHA BLS.</li>
                </ul>
            </div>
        `
    },
    {
        id: "2C",
        title: "2C: Airway Suctioning - Adult & Pediatric",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult and Pediatric patients.</li>
                    <li><strong>Indications:</strong> Trauma to face/upper airway with obstruction; vomitus, food, or liquid foreign material; excess secretions or pulmonary edema fluid; amniotic fluid/meconium in non-vigorous newborn with obstruction.</li>
                    <li><strong>Contraindications:</strong> Airway patency is effective without suctioning; amniotic fluid or meconium in a vigorous, non-dyspneic newborn.</li>
                </ul>

                <h3>2. General Supportive & Initial Assessment</h3>
                <ul>
                    <li>Open airway and inspect for visible foreign material.</li>
                    <li>Turn patient on their side if possible to facilitate clearance.</li>
                    <li>Power on the suction machine.</li>
                </ul>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <ul>
                    <li><strong>EMT / AEMT / Paramedic:</strong>
                        <ul>
                            <li><strong>Manual Removal:</strong> Remove large foreign particulates with gloved hands. Sweep finger ACROSS posterior pharynx in adults, or only if visible material is present in pediatrics. Use bite precautions.</li>
                            <li><strong>Suction of Oropharynx:</strong> Attach tonsil tip (or open end of suction tubing for large debris). Pre-oxygenate/ventilate. Insert tip under direct vision with a sweeping motion. Intermittent suction with active oxygenation. Clear clogged tubing with water/saline.</li>
                            <li><strong>Catheter Suction of Endotracheal Tube:</strong> Attach suction catheter to tubing. Ventilate 4-5 times for preoxygenation. Detach bag and insert sterile catheter tip without suction applied. Advance gently to estimated carina depth, apply suction, and withdraw slowly. Rinse catheter tip and ventilate between attempts.</li>
                        </ul>
                    </li>
                </ul>

                <h3>7. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Precautions:</strong> Limit suction time to a few seconds on withdrawal. Exception: continue suctioning if vomitus continually wells up and obstructs the airway.</li>
                    <li><strong>Equipment Preparation:</strong> Have a container of water/saline ready to flush tubing. Do NOT insert suction catheter with suction functioning.</li>
                    <li><strong>Complications:</strong> Monitor for hypoxia, persistent obstruction, lung injury/aspiration, asphyxia, trauma to pharynx, vomiting, and vagal-induced cardio-respiratory arrest.</li>
                </ul>
            </div>
        `
    },
    {
        id: "2D",
        title: "2D: Bag Valve Mask (BVM) Management - Adult & Pediatric",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult and Pediatric patients.</li>
                    <li><strong>Indications:</strong> Respiratory arrest, or inadequate oxygenation/ventilation not improved by non-positive pressure methods.</li>
                    <li><strong>Contraindications:</strong> Mild dyspnea; active or impending emesis.</li>
                </ul>

                <h3>2. General Supportive & Initial Assessment</h3>
                <ul>
                    <li>Optimal BVM technique takes two (sometimes three) EMS professionals to achieve.</li>
                    <li>Proper technique improves ventilation while reducing gastric insufflation, vomiting, and aspiration.</li>
                </ul>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <h4 class="font-bold mt-4 mb-2">COPES Mnemonic for Correct BVM Management</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-4">
                    <div class="bg-slate-100 p-2.5 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)]">C - C-clamp (E-clamp):</strong> Hold mask with c-clamp using one or both hands.
                    </div>
                    <div class="bg-slate-100 p-2.5 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)]">O - Oropharyngeal / Nasopharyngeal:</strong> Use OPA and/or NPA(s).
                    </div>
                    <div class="bg-slate-100 p-2.5 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)]">P - Position:</strong> Place in sniffing position (unless spinal injury suspected).
                    </div>
                    <div class="bg-slate-100 p-2.5 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)]">E - Elevate:</strong> Elevate jaw to open airway.
                    </div>
                    <div class="bg-slate-100 p-2.5 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)]">S - Seal:</strong> Seal mask over mouth and nose without excessive force.
                    </div>
                    <div class="bg-slate-100 p-2.5 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)]">S - Sellick Maneuver (BURP):</strong> Backward, upward, rightward pressure on cricoid cartilage in unconscious patients.
                    </div>
                    <div class="bg-slate-100 p-2.5 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)]">O - Oxygen:</strong> Use 100% O2 concentration (FiO2 = 1.0) and titrate.
                    </div>
                    <div class="bg-slate-100 p-2.5 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)]">S - Squeeze:</strong> Squeeze bag slowly over 1 second (6-8 mL/kg for arrest/shock; 8-10 mL/kg up to 1000 mL for non-shock).
                    </div>
                </div>

                <h3>6. Procedural & Decision Algorithms</h3>
                <h4 class="font-bold mt-4 mb-2">BVM Target Ventilation Rates</h4>
                <div class="overflow-x-auto mb-4">
                    <table class="protocol-table w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th>Patient Population / Condition</th>
                                <th>Initial Target Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Adults (13+ Yrs): Perfusing Rhythms Without Shock</td><td>12-15 / min</td></tr>
                            <tr><td>Adults: In Shock</td><td>10-12 / min</td></tr>
                            <tr><td>Adults: In Cardiac Arrest</td><td>8-10 / min</td></tr>
                            <tr><td>Head Injury (Any Age)</td><td>20 / min</td></tr>
                            <tr><td>Pediatric (Less Than Age 1)</td><td>20 / min</td></tr>
                            <tr><td>Pediatric (Age 1 to 12)</td><td>15 / min</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>7. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Textbook Alignment Note:</strong> While AHA specifies 10 breaths/min for adults in continuous CPR arrest, 8-10 breaths/min achieves the exact same physiological target range.</li>
                </ul>
            </div>
        `
    },
    {
        id: "2E",
        title: "2E: Supraglottic Airways - Adult & Pediatric",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult and Pediatric patients.</li>
                    <li><strong>Entry Criteria (Indications):</strong>
                        <ul>
                            <li>Hypoxia/hypoventilation refractory to non-invasive airway management.</li>
                            <li>Airway protection to reduce aspiration for sustained GCS &lt; 8.</li>
                            <li>Three unsuccessful oral and/or nasal intubation attempts.</li>
                            <li><strong>Special Note:</strong> It is not necessary to attempt intubation first if a difficult airway is anticipated/visualized. Supraglottic airways may be used as a first-line airway.</li>
                        </ul>
                    </li>
                    <li><strong>Exclusion Criteria (Contraindications):</strong>
                        <ul>
                            <li>Ability to maintain oxygenation/ventilation by less invasive methods (e.g., BVM).</li>
                            <li>Intact gag reflex.</li>
                            <li>Known esophageal disease.</li>
                            <li>Ingestion of caustic substance or extensive airway burns.</li>
                            <li>Tracheotomy or laryngectomy.</li>
                            <li>Suspected Foreign Body Airway Obstruction.</li>
                            <li><strong>Relative Contraindication:</strong> Patient size outside manufacturer-recommended range (may be utilized if the fit allows appropriate oxygenation/ventilation).</li>
                        </ul>
                    </li>
                    <li><strong>Treatment Priorities:</strong> Establish secure airway. Do not use supraglottic airways when other methods work, due to concerns regarding reduction in cerebral arterial flow and impedance of cerebral venous return from cuff pressure effects.</li>
                </ul>

                <h3>2. General Supportive & Initial Assessment</h3>
                <ul>
                    <li><strong>Anatomy & Design:</strong> The King LT-D/LTS-D airway has two cuffs inflating from one port. The smaller distal cuff isolates the laryngopharynx from the esophagus. The larger proximal cuff isolates the laryngopharynx from the oropharynx and nasopharynx.</li>
                    <li><strong>Removal of the Airway:</strong>
                        <ul>
                            <li>Suction MUST always be available during removal.</li>
                            <li>Anticipate vomiting; position patient in lateral recumbent position unless contraindicated.</li>
                            <li>A suction catheter up to 18 Fr can be inserted through the gastric access lumen of the King LTS-D.</li>
                            <li>Completely deflate cuffs prior to removal.</li>
                        </ul>
                    </li>
                </ul>

                <h3>3. Assessment & Diagnostic Tables</h3>
                <h4 class="font-bold mt-4 mb-2">Supraglottic Sizing Guide (King LT-D/LTS-D)</h4>
                <div class="overflow-x-auto mb-4">
                    <table class="protocol-table w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th>Patient Size</th>
                                <th>Airway Size</th>
                                <th>Connector Color</th>
                                <th>Typical Cuff Inflation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>35-45 in height (12-25 kg)</td><td>Size 2</td><td>Green</td><td>25-35 mL</td></tr>
                            <tr><td>41-51 in height (25-35 kg)</td><td>Size 2.5</td><td>Orange</td><td>30-40 mL</td></tr>
                            <tr><td>4 ft - 5 ft height</td><td>Size 3</td><td>Yellow</td><td>45-60 mL</td></tr>
                            <tr><td>5 ft - 6 ft height</td><td>Size 4</td><td>Red</td><td>60-80 mL</td></tr>
                            <tr><td>6 ft + height</td><td>Size 5</td><td>Purple</td><td>70-90 mL</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <ul>
                    <li><strong>Airway Preparation:</strong> Test cuff inflation by injecting air, then remove all air prior to insertion. Do not introduce lubricant near ventilation portals.</li>
                    <li><strong>Placement Verification & Documentation:</strong> Document all confirmation methods (absence of epigastric sounds, presence of lung sounds, chest rise/fall, improved oxygenation, condensation, and waveform capnography). Re-verify after any movement.</li>
                </ul>

                <h3>6. Procedural & Decision Algorithms</h3>
                <h4 class="font-bold mt-4 mb-2">Insertion Technique (King LT-D/LTS-D)</h4>
                <ol class="list-decimal pl-5 space-y-1.5 text-sm text-gray-700 mb-4">
                    <li>Hold connector with dominant hand.</li>
                    <li>Hold mouth open and apply chin lift with non-dominant hand (unless C-spine contraindicated).</li>
                    <li>Introduce tip from a lateral right approach.</li>
                    <li>Advance tip behind tongue base while rotating tube midline (blue orientation line faces chin).</li>
                    <li>Advance without excessive force until connector aligns with teeth/gums.</li>
                    <li>Inflate cuffs with supplied syringe (use minimum mL necessary to achieve seal). <strong class="text-rose-600">WARNING: Excessive inflation compromises cerebral blood flow!</strong></li>
                    <li>Attach bag-valve.</li>
                    <li>Gently ventilate while withdrawing tube until ventilation is easy and portals align with laryngeal inlet.</li>
                    <li>Confirm placement via auscultation, physiologic changes, and capnography.</li>
                    <li>If unable to place in three attempts, utilize BVM ventilation.</li>
                </ol>

                <h3>7. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Equipment Note:</strong> Check with local medical oversight for specific equipment protocols if not using the King LT-D.</li>
                    <li><strong>Textbook Alignment Note:</strong> All advanced airways should ideally be monitored with continuous waveform capnography, though physiologic and auscultatory confirmation is allowed if capnography is unavailable.</li>
                </ul>
            </div>
        `
    },
    {
        id: "2F",
        title: "2F: Oral Intubation - Adult",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult.</li>
                    <li><strong>Entry Criteria:</strong> Hypoxia/hypoventilation refractory to non-invasive management; airway protection for GCS &lt; 8; impending airway edema (burns/anaphylaxis).</li>
                    <li><strong>Contraindications:</strong> 3 unsuccessful oral/nasal intubation attempts; waveform capnography not immediately available.</li>
                </ul>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <ul>
                    <li><strong>AEMT / Paramedic:</strong>
                        <ul>
                            <li><strong>Tube Selection:</strong> Strong preference for 8.0 mm ET tube in appropriate adults to enable inpatient pulmonary care.</li>
                            <li><strong>Laryngoscopy Technique:</strong> Walk laryngoscope down tongue to avoid esophagus. Place left forearm on patient head for leverage if needed. Block ambient light with a blanket if needed.</li>
                            <li><strong>Bimanual Laryngoscopy:</strong> Manipulate thyroid cartilage with right hand until cords are visualized, then have colleague hold position.</li>
                            <li><strong>Obese Patient Positioning:</strong> Elevate head, neck, and shoulders with blankets/pillows until chin or nose is level with chest.</li>
                        </ul>
                    </li>
                </ul>

                <h3>6. Procedural & Decision Algorithms</h3>
                <h4 class="font-bold mt-4 mb-2">Flex-Guide™ Introducer (Bougie) Technique</h4>
                <p class="text-xs text-gray-600 mb-2">Contraindicated in patients &lt; 16 years of age.</p>
                <ol class="list-decimal pl-5 space-y-1.5 text-sm text-gray-700 mb-4">
                    <li>Advance angled tip anteriorly under direct laryngoscopy. Stop if resistance met.</li>
                    <li>Feel for "washboard" sensation down tracheal rings. Absence indicates esophageal placement.</li>
                    <li>Advance to carina until resistance is met to confirm placement.</li>
                    <li>Stabilize Flex-Guide™ while maintaining laryngoscopy.</li>
                    <li>Slide ET tube over Flex-Guide™ while colleague holds proximal end.</li>
                    <li>Slide tube to estimated depth without migrating guide.</li>
                    <li>Hold ET tube in place and withdraw Flex-Guide™ before removing laryngoscope.</li>
                </ol>

                <h3>7. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Textbook Alignment Note:</strong> Bimanual laryngoscopy (external laryngeal manipulation) aligns with Caroline 9th Edition guidelines for optimizing glottic view without compressing airway.</li>
                </ul>
            </div>
        `
    },
    {
        id: "2G",
        title: "2G: Medication-Assisted Intubation - Adult",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult.</li>
                    <li><strong>Entry Criteria:</strong> Intact gag reflex or requires sedation for intubation compliance.</li>
                    <li><strong>Treatment Priorities:</strong> Ensure oxygenation/ventilation while facilitating intubation and preventing extubation.</li>
                </ul>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <h4 class="font-bold mt-4 mb-2">The 7 Ps of Rapid Sequence Intubation (RSI)</h4>
                <div class="space-y-2 mb-4 text-sm">
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">1. Preparation</strong>
                        <span class="text-gray-700">Assess airway for difficulties (LEMON criteria), assemble 3-person team, set up rescue tools, select medications.</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">2. Preoxygenation</strong>
                        <span class="text-gray-700">Administer 100% high-flow O2 for 3-5 mins to wash out nitrogen and extend safe apnea time.</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">3. Pre-intubation Optimization</strong>
                        <span class="text-gray-700">Correct physiological stressors before sedatives (administer IV fluids or vasopressors to prevent cardiovascular collapse).</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">4. Paralysis with Induction</strong>
                        <span class="text-gray-700">Simultaneously administer fast-acting sedative (ketamine/etomidate) followed immediately by neuromuscular blocker (rocuronium/succinylcholine).</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">5. Positioning & Protection</strong>
                        <span class="text-gray-700">Place in sniffing position to align airway axes for direct visualization.</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">6. Placement with Proof</strong>
                        <span class="text-gray-700">Pass ETT through vocal cords and immediately confirm tracheal placement using waveform capnography.</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">7. Post-intubation Management</strong>
                        <span class="text-gray-700">Secure tube, obtain chest X-ray for depth, and begin continuous post-intubation sedation and mechanical ventilation.</span>
                    </div>
                </div>

                <h3>5. Medication Formulary & Dosages</h3>
                <div class="overflow-x-auto mb-4">
                    <table class="protocol-table w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th>Medication</th>
                                <th>Route</th>
                                <th>Adult Dose</th>
                                <th>Notes / Contraindications</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Etomidate</strong> (Induction)</td>
                                <td>IVP/IOP</td>
                                <td>0.3 mg/kg</td>
                                <td>Single dose.</td>
                            </tr>
                            <tr>
                                <td><strong>Midazolam</strong> (Induction)</td>
                                <td>IVP/IOP</td>
                                <td>0.1 mg/kg (Max 5 mg)</td>
                                <td>Repeat once if SBP &gt; 100 mmHg.</td>
                            </tr>
                            <tr>
                                <td><strong>Midazolam</strong> (Post-Sedation)</td>
                                <td>IVP/IOP</td>
                                <td>0.1 mg/kg (Max 5 mg)</td>
                                <td>Repeat once if SBP &ge; 100 mmHg.</td>
                            </tr>
                            <tr>
                                <td><strong>Diazepam</strong> (Post-Sedation)</td>
                                <td>IVP/IOP</td>
                                <td>0.1 mg/kg (Max 5 mg)</td>
                                <td>Repeat once if SBP &ge; 100 mmHg.</td>
                            </tr>
                            <tr>
                                <td><strong>Lorazepam</strong> (Post-Sedation)</td>
                                <td>IVP/IOP</td>
                                <td>0.1 mg/kg (Max 2 mg)</td>
                                <td>Repeat once if SBP &ge; 100 mmHg.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>7. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Textbook Alignment Note:</strong> Withhold repeat benzodiazepine doses if Systolic BP drops below 100 mmHg to avoid severe hypotension.</li>
                </ul>
            </div>
        `
    },
    {
        id: "2H",
        title: "2H: Nasal Intubation - Adult",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult.</li>
                    <li><strong>Entry Criteria:</strong> Refractory hypoxia/hypoventilation; GCS &lt; 8; impending airway edema; sitting position required; jaw clenching or oral trauma.</li>
                    <li><strong>Contraindications:</strong> Apnea (must be breathing spontaneously); age &le; 12; basilar skull fracture / facial instability; combativeness; 3 failed attempts; capnography unavailable.</li>
                    <li><strong>Relative Contraindications:</strong> Anticoagulant use (Warfarin, Plavix, Aspirin) - orotracheal preferred.</li>
                </ul>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <ul>
                    <li><strong>AEMT / Paramedic:</strong>
                        <ul>
                            <li><strong>Preparation:</strong> 2 sprays Phenylephrine 2% per nare. Apply Lidocaine 2% gel to ET cuff. Do NOT use stylet or Bougie.</li>
                            <li><strong>Insertion:</strong> Advance along floor of most patent nare with bevel facing septum. Pass straight back with gentle pressure.</li>
                            <li><strong>Advancement & Passage:</strong> Listen at adaptor as tube enters pharynx. Have awake patient inspire deeply to guide tube through vocal cords.</li>
                            <li><strong>Verification:</strong> Patient should be unable to speak. Ability to speak denotes nasoesophageal intubation (withdraw slightly and reattempt).</li>
                        </ul>
                    </li>
                </ul>

                <h3>5. Medication Formulary & Dosages</h3>
                <div class="overflow-x-auto mb-4">
                    <table class="protocol-table w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th>Medication</th>
                                <th>Route</th>
                                <th>Adult Dose</th>
                                <th>Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Phenylephrine 2%</td><td>IN</td><td>2 sprays / nare</td><td>Vasoconstrictor to prevent epistaxis.</td></tr>
                            <tr><td>Lidocaine 2% Gel</td><td>Topical</td><td>Apply to ET cuff</td><td>Lubricant and local anesthetic.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    {
        id: "2I",
        title: "2I: Emergency Cricothyrotomy - Adult",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult.</li>
                    <li><strong>Entry Criteria:</strong> Upper airway obstruction AND inability to oxygenate/ventilate using less invasive methods.</li>
                    <li><strong>Contraindications:</strong> Ability to ventilate/oxygenate by other means; fractured larynx/cricoid; tracheal transection; inability to find landmarks; pediatric patients (contact OLMC).</li>
                </ul>

                <h3>3. Assessment & Diagnostic Tables</h3>
                <h4 class="font-bold mt-4 mb-2">Airway Anatomy Identification</h4>
                <div class="space-y-2 mb-4 text-sm">
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">Hyoid Bone</strong>
                        <span class="text-gray-700">Superior neck structure. <span class="text-rose-600 font-bold">WARNING:</span> Do NOT confuse for thyroid cartilage (lacks distinct notch).</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">Thyroid Cartilage</strong>
                        <span class="text-gray-700">Mid-neck structure containing prominent notch ("Adam's apple").</span>
                    </div>
                    <div class="bg-emerald-50 p-3 rounded border border-emerald-300">
                        <strong class="text-emerald-900 block font-bold">Cricothyroid Membrane (TARGET SITE)</strong>
                        <span class="text-emerald-800">Located directly between the thyroid and cricoid cartilages. Target for incision/puncture.</span>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <strong class="text-[var(--maroon-main)] block">Cricoid Cartilage</strong>
                        <span class="text-gray-700">Inferior to the cricothyroid membrane.</span>
                    </div>
                </div>

                <h3>6. Procedural & Decision Algorithms</h3>
                <h4 class="font-bold mt-4 mb-2">Surgical Technique (6.0 ET Tube & Tracheal Hook)</h4>
                <ol class="list-decimal pl-5 space-y-1.5 text-sm text-gray-700 mb-4">
                    <li>Clean anterior neck with ChloraPrep®, Betadine®, or alcohol wipe.</li>
                    <li>Aspirate all air from ET tube cuff.</li>
                    <li>Make vertical midline incision through skin/fat from lower edge of thyroid cartilage to middle of cricoid.</li>
                    <li>Spread incision open horizontally using sterile hemostats.</li>
                    <li>Make short horizontal incision (&lt; 0.5 inch / 1 cm) in middle of cricothyroid membrane.</li>
                    <li>Pass 6.0 mm ET tube inferiorly/posteriorly into trachea.</li>
                    <li>Inflate cuff and verify placement per Protocol 2J.</li>
                    <li>Secure airway. (Cut tube shorter above inflation port if needed to facilitate ventilation).</li>
                </ol>

                <h4 class="font-bold mt-4 mb-2">Non-Surgical Technique (PerTrach® Kit)</h4>
                <ol class="list-decimal pl-5 space-y-1.5 text-sm text-gray-700 mb-4">
                    <li>Puncture cricothyroid membrane at 45-degree angle chestward with break-away needle/syringe until air aspirated.</li>
                    <li>Make single vertical stab incision next to needle.</li>
                    <li>Place tracheal hook to pull anterior/superior on inferior thyroid cartilage.</li>
                    <li>Advance dilator stylet through needle.</li>
                    <li>Split and remove needle while maintaining inward pressure.</li>
                    <li>Advance airway into trachea, remove hook, inflate cuff, and verify.</li>
                </ol>

                <h4 class="font-bold mt-4 mb-2">Modified Non-Surgical Technique (For Edema / Obesity)</h4>
                <p class="text-sm text-gray-700 mb-4">Make a 2-inch (5 cm) vertical midline incision down to subcutaneous fat, palpate structures through incision with gloved finger, then proceed with standard non-surgical technique.</p>
            </div>
        `
    },
    {
        id: "2J",
        title: "2J: Confirmation of Endotracheal Airway Placement - Adult",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult with artificial endotracheal airway.</li>
                    <li><strong>Ultimate Responsibility:</strong> The intubator (or primary paramedic/RN if transferred) is responsible for ensuring complete confirmation sequence.</li>
                </ul>

                <h3>3. Assessment & Diagnostic Tables</h3>
                <h4 class="font-bold mt-4 mb-2">Capnography Waveform Analysis Visual Guide</h4>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
                    <div class="bg-blue-50 border border-blue-200 p-3 rounded">
                        <strong class="text-blue-900 block">Phase 1: Exhalation Start</strong>
                        <span class="text-gray-700">Rapid upstroke on waveform.</span>
                    </div>
                    <div class="bg-blue-50 border border-blue-200 p-3 rounded">
                        <strong class="text-blue-900 block">Phase 2: Exhalation Plateau</strong>
                        <span class="text-gray-700">Flat plateau ending at peak EtCO2.</span>
                    </div>
                    <div class="bg-blue-50 border border-blue-200 p-3 rounded">
                        <strong class="text-blue-900 block">Phase 3: Inhalation Start</strong>
                        <span class="text-gray-700">Rapid downstroke back to baseline.</span>
                    </div>
                </div>
                <p class="text-xs text-rose-700 bg-rose-50 p-2 rounded border border-rose-200 mb-4">Any non-rhythmic waveform requires immediate ET tube withdrawal.</p>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <h4 class="font-bold mt-4 mb-2">Mandatory Confirmation Sequence</h4>
                <ol class="list-decimal pl-5 space-y-1.5 text-sm text-gray-700 mb-4">
                    <li><strong>Visualization:</strong> Direct visualization of tube passing cords.</li>
                    <li><strong>Capnography:</strong> Continuous EtCO2 waveform detection within 60 seconds.</li>
                    <li><strong>Auscultation:</strong> Epigastrium first (no sounds), then bilateral thorax (equal breath sounds).</li>
                    <li><strong>Physiologic Changes:</strong> Equal chest rise, tube condensation, improved color/vitals.</li>
                    <li><strong>Securement:</strong> Commercial holder + rigid cervical collar to restrict neck movement.</li>
                </ol>

                <h3>6. Procedural & Decision Algorithms</h3>
                <ul>
                    <li><strong>Movement Reassessment:</strong> Recheck capnography every time the patient is moved.</li>
                    <li><strong>Transfer of Care:</strong> Obtain and document capnography waveform immediately after physical transfer onto destination bed/stretcher.</li>
                </ul>
            </div>
        `
    },
    {
        id: "2K",
        title: "2K: Stoma/Tracheostomy Management - Adult & Pediatric",
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult and Pediatric patients with stomas or tracheostomies.</li>
                    <li><strong>Entry Criteria (Indications):</strong>
                        <ul>
                            <li>Cardio-respiratory arrest from obstruction (e.g., thick plug, clot, kinking).</li>
                            <li>Audible/visual signs of secretions in the tube.</li>
                            <li>Signs of respiratory distress.</li>
                            <li>Suspicion of a blocked/partially blocked tube.</li>
                            <li>Inability to clear tube by coughing.</li>
                            <li>Increased ventilation pressures (in ventilated patients).</li>
                            <li>Patient request for suctioning.</li>
                        </ul>
                    </li>
                </ul>

                <h3>2. General Supportive & Initial Assessment</h3>
                <ul>
                    <li><strong>Assessment of Obstruction:</strong> Early signs include tachypnea, tachycardia, and desaturation. Late signs include cyanosis, bradycardia, and apnea. Do NOT wait for late signs to develop before intervening.</li>
                    <li><strong>Complications to Monitor For:</strong> Obstruction, aspiration, bleeding, tracheal trauma, pneumothorax, subcutaneous emphysema, dislodged tube, tracheo-esophageal fistula, and infection.</li>
                </ul>

                <h3>3. Assessment & Diagnostic Tables</h3>
                <h4 class="font-bold mt-4 mb-2">Recommended Suction Catheter Sizes</h4>
                <div class="overflow-x-auto mb-4">
                    <table class="protocol-table w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th>Tracheostomy Tube Size</th>
                                <th>Catheter Size (Fr)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>3.0 mm</td><td>7 Fr</td></tr>
                            <tr><td>3.5 mm / 4.0 mm</td><td>8 Fr</td></tr>
                            <tr><td>4.5 mm / 5.0 mm</td><td>10 Fr</td></tr>
                            <tr><td>6.0 mm</td><td>10-12 Fr</td></tr>
                            <tr><td>7.0 mm</td><td>14 Fr</td></tr>
                            <tr><td>7.5 mm / 8.0 mm</td><td>14-16 Fr</td></tr>
                            <tr><td>9.0 mm / 10.0 mm</td><td>16 Fr</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3>4. Treatment Steps by Scope of Practice</h3>
                <ul>
                    <li><strong>General Guidelines:</strong> Suctioning removes mucus and avoids blockages.</li>
                    <li><strong>Depth Determination:</strong> Use patient's spare tube (if available) to estimate depth and avoid trauma.</li>
                    <li><strong>Oxygenation:</strong> Oxygenate and ventilate as needed throughout.</li>
                </ul>

                <h3>5. Medication Formulary & Dosages</h3>
                <div class="overflow-x-auto mb-4">
                    <table class="protocol-table w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th>Medication</th>
                                <th>Route</th>
                                <th>Dose</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Normal Saline (Sterile)</td>
                                <td>Tracheal Instillation</td>
                                <td>1-2 mL</td>
                                <td>Use ONLY if mucus is very thick/hard to suction. Routine use not necessary.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>6. Procedural & Decision Algorithms</h3>
                <h4 class="font-bold mt-4 mb-2">Tracheal Suctioning Procedure</h4>
                <ol class="list-decimal pl-5 space-y-1.5 text-sm text-gray-700 mb-4">
                    <li>Inform the patient and maintain PPE.</li>
                    <li>Set suction pressure: 50-100 mmHg for small children; 100-120 mmHg for adults/older children.</li>
                    <li>Instill 1-2 mL sterile saline ONLY if needed for thick secretions.</li>
                    <li>Insert catheter gently to estimated depth without suction.</li>
                    <li>Apply suction (cover opening) and use circular/twirling motion while withdrawing.</li>
                    <li>Limit duration of suctioning to 5-10 seconds to prevent oxygen loss.</li>
                    <li>Suction saline from a container to clear catheter if needed.</li>
                    <li>Deflate tracheostomy cuffs (if applicable) periodically to prevent secretion pooling.</li>
                    <li>Allow 30 seconds of rest/breathing between attempts.</li>
                </ol>

                <h4 class="font-bold mt-4 mb-2">Tracheostomy Tube Tie Changes</h4>
                <p class="text-xs text-rose-700 bg-rose-50 p-2 rounded border border-rose-200 mb-2">High risk of dislodgment. Requires two competent personnel.</p>
                <ol class="list-decimal pl-5 space-y-1.5 text-sm text-gray-700 mb-4">
                    <li><strong>Person One:</strong> Secure tube in place. Do not remove hand until new ties are applied.</li>
                    <li><strong>Person Two:</strong> Change ties and attend to stoma care.</li>
                    <li>If a tie becomes loose, re-securing it is the immediate priority.</li>
                </ol>
            </div>
        `
    }
];
