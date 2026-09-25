// This file holds all the text and data for the protocols.
// The main index.html file will automatically read this data.

const protocolsDatabase = {
    1: [ // ASSESSMENT BUCKET
        { 
            id: "1A", 
            title: "1A: Medical General Assessment - Adult & Pediatric", 
            content: `
                <div class="protocol-content">
                    <h3>1. Overview & Scope</h3>
                    <ul>
                        <li><strong>Target Population:</strong> Adult and pediatric patients.[cite: 4]</li>
                        <li><strong>Entry Criteria:</strong> Patients presenting with medical (non-trauma) complaints.[cite: 4]</li>
                        <li><strong>Treatment Priorities:</strong> Ensure scene safety, utilize protective equipment, and conduct a primary survey followed by a secondary survey when appropriate.[cite: 4]</li>
                    </ul>

                    <h3>2. General Supportive & Initial Assessment</h3>
                    <ul>
                        <li><strong>Primary Survey Care (A-B-C Approach):</strong>
                            <ul>
                                <li><strong>Airway:</strong> Evaluate patency and mechanics; rapid intervention may be required if airway patency and protection are compromised.[cite: 4]</li>
                                <li><strong>Breathing:</strong> Expose the chest to assess respiration mechanics (rate, depth, pattern, and distress/effort) and auscultate breath sounds bilaterally.[cite: 4] Liberally obtain pulse oximetry and waveform capnography (mandatory use if the patient is intubated).[cite: 4]</li>
                                <li><strong>Circulation:</strong> Evaluate level of consciousness, pulse (location, rate, character), and obtain a manual blood pressure.[cite: 4] Apply the cardiac monitor if equipped.[cite: 4]</li>
                                <li><strong>Cardiac Arrest Exception:</strong> Aggressively initiate chest compressions and search for shockable rhythms at appropriate intervals rather than following the standard A-B-C order.[cite: 4]</li>
                            </ul>
                        </li>
                        <li><strong>Scene Time:</strong> Minimize scene time for critical cases (unless working a cardiac arrest) and initiate timely transport for time-sensitive medical conditions.[cite: 4]</li>
                        <li><strong>Enroute Care:</strong> Reassess primary care, support oxygenation/ventilation, obtain vascular access, complete the secondary survey (if able), and keep the patient warm/avoid hypothermia.[cite: 4]</li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Reassessment:</strong> Reassess patients at least every 10 minutes, or every 5 minutes if the patient is unstable or hemodynamic changes are occurring.[cite: 4]</li>
                        <li><strong>Pediatric Respiratory Distress:</strong> Signs may include slowing respirations, cyanosis, accessory muscle use, paleness, nasal flaring, lethargy/listlessness, retractions, irritability, tachypnea, stridor, mottling, or grunting.[cite: 4]</li>
                        <li><strong>Pediatric Vital Sign Estimation:</strong>
                            <ul>
                                <li>Average normal systolic BP: 80 + (2 x age in years).[cite: 4]</li>
                                <li>Lower limit of normal systolic BP: 70 + (2 x age in years).[cite: 4]</li>
                            </ul>
                        </li>
                        <li><strong>Glasgow Coma Scale (Adult):</strong>
                            <ul>
                                <li><strong>Eyes Open:</strong> Spontaneously (4), To command (3), To pain (2), No response (1).[cite: 4]</li>
                                <li><strong>Best Motor:</strong> Obeys verbal orders (6), Localizes painful stimuli (5), Withdraws (4), Painful stimulus/flexion (3), Painful stimulus/extension (2), No response (1).[cite: 4]</li>
                                <li><strong>Best Verbal:</strong> Oriented/conversant (5), Disoriented/conversant (4), Inappropriate words (3), Inappropriate sounds (2), No response (1).[cite: 4]</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            `
        },
        { 
            id: "1B", 
            title: "1B: Trauma General Assessment - Adult & Pediatric", 
            content: `
                <div class="protocol-content">
                    <h3>1. Overview & Scope</h3>
                    <ul>
                        <li><strong>Target Population:</strong> Adult and pediatric trauma patients.[cite: 4]</li>
                        <li><strong>Treatment Priorities:</strong> Ensure scene safety, utilize protective equipment, consider mechanisms of injury, and identify special extrication needs.[cite: 4]</li>
                    </ul>

                    <h3>2. General Supportive & Initial Assessment</h3>
                    <ul>
                        <li><strong>Primary Survey (Completed within 2 minutes):</strong>
                            <ul>
                                <li>The primary survey is only interrupted for life-threatening arterial bleeding, airway obstruction, or respiratory/cardiac arrest.[cite: 4]</li>
                                <li>Manually stabilize the cervical spine while assessing the airway and level of consciousness.[cite: 4]</li>
                                <li>Control arterial bleeding and evaluate circulation (carotid/radial pulses).[cite: 4]</li>
                                <li>Open the airway and evaluate breathing.[cite: 4]</li>
                                <li>Seal "sucking" chest wound(s).[cite: 4]</li>
                                <li>Perform needle thoracostomy for closed chest tension pneumothorax.[cite: 4]</li>
                                <li>Examine the head, neck, chest, abdomen/pelvis, and extremities for DCAP-BLS (deformity, contusions, abrasions, penetrations, burns, lacerations, swelling).[cite: 4]</li>
                                <li>Auscultate the chest for present and equal breath sounds in the mid-axilla bilaterally.[cite: 4]</li>
                            </ul>
                        </li>
                        <li><strong>"LOAD & GO" Criteria:</strong> Rapidly immobilize and transport any trauma patient with an altered level of consciousness, abnormal respiration, abnormal circulation, or signs likely to lead to shock (distended abdomen, pelvic instability, bilateral femur fractures) immediately after the primary survey.[cite: 4]</li>
                        <li><strong>Secondary & Reassessment Surveys:</strong> Perform the secondary survey enroute for critical patients (vital signs, history, head-to-toe exam, splinting).[cite: 4] Reassess critical patients at least every five minutes.[cite: 4]</li>
                    </ul>
                </div>
            `
        },
        {
            id: "1C",
            title: "1C: General Supportive Care - Adult & Pediatric",
            content: `
                <div class="protocol-content">
                    <h3>1. Overview & Scope</h3>
                    <ul>
                        <li><strong>Target Population:</strong> Adult and pediatric patients.[cite: 4]</li>
                        <li><strong>Treatment Priorities:</strong> Address ABCs (or CAB if cardiac arrest), obtain early vital signs, and get the best history possible.[cite: 4] Evaluate and treat the underlying medical cause per specific protocols, providing early transport and ED notification for time-sensitive conditions (e.g., Respiratory Failure, STEMI, Stroke).[cite: 4]</li>
                    </ul>

                    <h3>2. Treatment Steps by Scope of Practice</h3>
                    <ul>
                        <li><strong>EMT:</strong>
                            <ul>
                                <li>Manage the airway and support oxygenation/ventilation.[cite: 4]</li>
                                <li>Obtain vital signs.[cite: 4]</li>
                                <li>Apply a cardiac monitor or obtain a 12-lead ECG (when indicated and if equipped).[cite: 4] Transmit the 12-lead ECG to the receiving hospital.[cite: 4]</li>
                                <li>Monitor End-Tidal CO2 and waveform capnography (mandatory use if the patient is intubated).[cite: 4]</li>
                                <li>Assist the patient with their own medication if directed by protocol(s).[cite: 4]</li>
                                <li>Determine blood glucose and treat hypoglycemia per protocol.[cite: 4]</li>
                            </ul>
                        </li>
                        <li><strong>AEMT:</strong>
                            <ul>
                                <li>Intubate if indicated.[cite: 4]</li>
                                <li>Establish IV/IO access if indicated.[cite: 4]</li>
                                <li>Administer fluid boluses and medications as directed by specific medical protocol(s).[cite: 4]</li>
                            </ul>
                        </li>
                        <li><strong>Paramedic:</strong>
                            <ul>
                                <li>Provide continuous treatment and assessment per specific medical protocol(s).[cite: 4]</li>
                                <li>Interpret 12-lead ECGs (when indicated and if equipped).[cite: 4]</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Operational Note:</strong> Take medical care to the patient by bringing appropriate equipment (airway kit, med/trauma kit, suction, AED/monitor) directly to the patient's side to minimize critical treatment delays.[cite: 4]</li>
                        <li><strong>Movement Restrictions:</strong> Minimize active movement by the patient in settings of suspected myocardial ischemia, stroke, and dyspnea.[cite: 4] Move and package the patient with safety considerations for all involved.[cite: 4]</li>
                    </ul>
                </div>
            `
        },
        {
            id: "1D",
            title: "1D: Trauma and Hypovolemic Shock Supportive Care - Adult & Pediatric",
            content: `
                <div class="protocol-content">
                    <h3>1. Overview & Scope</h3>
                    <ul>
                        <li><strong>Target Population:</strong> Adult and pediatric patients.[cite: 4]</li>
                        <li><strong>Treatment Priorities:</strong> Ensure scene safety, utilize protective equipment, and conduct a Primary Survey.[cite: 4] Issue a "Trauma Alert" to the receiving ED if indicated.[cite: 4]</li>
                    </ul>

                    <h3>2. Treatment Steps by Scope of Practice</h3>
                    <ul>
                        <li><strong>EMT:</strong>
                            <ul>
                                <li><strong>Serious Hemorrhage Control:</strong> Apply a tourniquet if indicated, utilize bandage/dressing/direct pressure, apply a pressure dressing (if equipped), and apply a topical hemostatic agent (if equipped).[cite: 4]</li>
                                <li>Manage the airway and support oxygenation/ventilation.[cite: 4]</li>
                                <li>Obtain vital signs, assess for shock, and treat accordingly.[cite: 4]</li>
                                <li>Prevent hypothermia.[cite: 4]</li>
                            </ul>
                        </li>
                        <li><strong>AEMT:</strong>
                            <ul>
                                <li>Intubate if indicated.[cite: 4]</li>
                                <li>Establish IV/IO access if indicated.[cite: 4]</li>
                                <li>Administer fluid boluses as directed by specific trauma protocol(s).[cite: 4]</li>
                            </ul>
                        </li>
                        <li><strong>Paramedic:</strong>
                            <ul>
                                <li>Perform cricothyrotomy if indicated.[cite: 4]</li>
                                <li>Perform needle thoracostomy if a tension pneumothorax is suspected.[cite: 4]</li>
                                <li>Provide continuous treatment and assessment per specific trauma protocol(s).[cite: 4]</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Operational Note:</strong> The practice of EMS medicine is built upon the foundation of "taking medical care to the patient".[cite: 4] Appropriate equipment (airway kit, med/trauma kit, suction, packaging equipment) should be brought to the patient's side to minimize critical treatment delays.[cite: 4]</li>
                    </ul>
                </div>
            `
        },
        {
            id: "1E",
            title: "1E: Neonatal Resuscitation - Pediatric",
            content: `
                <div class="protocol-content">
                    <h3>1. Overview & Scope</h3>
                    <ul>
                        <li><strong>Target Population:</strong> Newborns and infants within the first 30 days of life.[cite: 4]</li>
                        <li><strong>Treatment Priorities:</strong> Preserve patient warmth/avoid hypothermia and focus on basic life support interventions.[cite: 4] Invasive, advanced procedures are rarely warranted and are rarely more effective than simple basic interventions.[cite: 4]</li>
                    </ul>

                    <h3>2. General Supportive & Initial Assessment</h3>
                    <ul>
                        <li><strong>Warmth:</strong> Neonates rapidly lose body heat due to high surface-to-body weight ratios, which can lead to respiratory and circulatory distress.[cite: 4] Keep the neonate warm and minimize skin exposures.[cite: 4]</li>
                        <li><strong>Airway & Breathing:</strong> Evaluate patency; simple positioning may be required.[cite: 4] Briefly expose the chest to assess respirations, and auscultate breath sounds bilaterally in the axilla to avoid confusing sounds from the other side of the chest.[cite: 4] Gentle tactile stimulation (rubbing the back, flicking soles of feet) is often very effective in improving breathing activity.[cite: 4] Liberally obtain pulse oximetry and waveform capnography (mandatory if intubated).[cite: 4]</li>
                        <li><strong>Circulation:</strong> Evaluate activity level, general body warmth, and brachial pulse.[cite: 4]
                            <ul>
                                <li>Pulse rates &lt; 100/minute are abnormal and indicate impending cardiovascular collapse.[cite: 4]</li>
                                <li>Pulse rates &lt; 60/minute indicate cardiovascular collapse; chest compressions should be initiated.[cite: 4]</li>
                            </ul>
                        </li>
                        <li><strong>Blood Pressure:</strong> Blood pressure is difficult to measure and often unreliable in the field.[cite: 4] Evaluate perfusion via activity level, skin temperature/color, capillary refill (normally &lt; 3 seconds), and muscular tone.[cite: 4]</li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Cardiac Arrest Exception:</strong> Aggressively initiate chest compressions while conserving warmth and initiating supplemental oxygenation/ventilation.[cite: 4]</li>
                        <li><strong>APGAR Scoring:</strong> Obtain scores at 1 and 5 minutes post-birth; continue every 5 minutes if the APGAR score is &lt; 7.[cite: 4]</li>
                    </ul>
                    
                    <div class="overflow-x-auto mt-4">
                        <table class="protocol-table">
                            <tr><th>Sign[cite: 4]</th><th>0 Points[cite: 4]</th><th>1 Point[cite: 4]</th><th>2 Points[cite: 4]</th></tr>
                            <tr><td><strong>Appearance</strong>[cite: 4]</td><td>Blue or Pale[cite: 4]</td><td>Body Pink, Extremities Blue[cite: 4]</td><td>Completely Pink[cite: 4]</td></tr>
                            <tr><td><strong>Heart Rate</strong>[cite: 4]</td><td>Absent[cite: 4]</td><td>&le; 100 bpm[cite: 4]</td><td>&gt; 100 bpm[cite: 4]</td></tr>
                            <tr><td><strong>Grimace</strong>[cite: 4]</td><td>No Response[cite: 4]</td><td>Grimace[cite: 4]</td><td>Cough or Sneeze[cite: 4]</td></tr>
                            <tr><td><strong>Muscle Tone</strong>[cite: 4]</td><td>Limp[cite: 4]</td><td>Some Flexion[cite: 4]</td><td>Active Motion[cite: 4]</td></tr>
                            <tr><td><strong>Respiratory Rate</strong>[cite: 4]</td><td>Absent[cite: 4]</td><td>Slow/Irregular[cite: 4]</td><td>Good, Crying[cite: 4]</td></tr>
                        </table>
                    </div>
                </div>
            `
        }
    ]
};
