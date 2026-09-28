protocolsDatabase[1] = [
    { 
        id: "1A", 
        title: "1A: Medical General Assessment - Adult & Pediatric", 
        content: `
            <div class="protocol-content">
                <h3>1. Overview & Scope</h3>
                <ul>
                    <li><strong>Target Population:</strong> Adult and pediatric patients.[cite: 5]</li>
                    <li><strong>Entry Criteria:</strong> Patients presenting with medical (non-trauma) complaints.[cite: 5]</li>
                    <li><strong>Treatment Priorities:</strong> Ensure scene safety, utilize protective equipment, and conduct a primary survey followed by a secondary survey when appropriate.[cite: 5]</li>
                </ul>

                <h3>2. General Supportive & Initial Assessment</h3>
                <ul>
                    <li><strong>Primary Survey Care (A-B-C Approach):</strong>
                        <ul>
                            <li><strong>Airway:</strong> Evaluate patency and mechanics; rapid intervention may be required if airway patency and protection are compromised.[cite: 5]</li>
                            <li><strong>Breathing:</strong> Expose the chest to assess respiration mechanics (rate, depth, pattern, and distress/effort) and auscultate breath sounds bilaterally.[cite: 5] Liberally obtain pulse oximetry and waveform capnography (mandatory use if the patient is intubated).[cite: 5]</li>
                            <li><strong>Circulation:</strong> Evaluate level of consciousness, pulse (location, rate, character), and obtain a manual blood pressure.[cite: 5] Apply the cardiac monitor if equipped.[cite: 5]</li>
                            <li><strong>Cardiac Arrest Exception:</strong> Aggressively initiate chest compressions and search for shockable rhythms at appropriate intervals rather than following the standard A-B-C order.[cite: 5]</li>
                        </ul>
                    </li>
                    <li><strong>Scene Time:</strong> Minimize scene time for critical cases (unless working a cardiac arrest) and initiate timely transport for time-sensitive medical conditions.[cite: 5]</li>
                    <li><strong>Enroute Care:</strong> Reassess primary care, support oxygenation/ventilation, obtain vascular access, complete the secondary survey (if able), and keep the patient warm/avoid hypothermia.[cite: 5]</li>
                </ul>

                <h3>3. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Reassessment:</strong> Reassess patients at least every 10 minutes, or every 5 minutes if the patient is unstable or hemodynamic changes are occurring.[cite: 5]</li>
                    <li><strong>Pediatric Respiratory Distress:</strong> Signs may include slowing respirations, cyanosis, accessory muscle use, paleness, nasal flaring, lethargy/listlessness, retractions, irritability, tachypnea, stridor, mottling, or grunting.[cite: 5]</li>
                    <li><strong>Pediatric Vital Sign Estimation:</strong>
                        <ul>
                            <li>Average normal systolic BP: 80 + (2 x age in years).[cite: 5]</li>
                            <li>Lower limit of normal systolic BP: 70 + (2 x age in years).[cite: 5]</li>
                        </ul>
                    </li>
                </ul>

                <h4 class="font-bold mt-4 mb-2">Pediatric Vital Sign Normal Ranges</h4>
                <div class="overflow-x-auto mb-4">
                    <table class="protocol-table w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th>Age Group[cite: 5]</th>
                                <th>Resp. Rate[cite: 5]</th>
                                <th>Heart Rate[cite: 5]</th>
                                <th>Systolic BP[cite: 5]</th>
                                <th>Weight (kg)[cite: 5]</th>
                                <th>Weight (lbs)[cite: 5]</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Newborn[cite: 5]</td><td>30-50[cite: 5]</td><td>120-160[cite: 5]</td><td>50-70[cite: 5]</td><td>2-3[cite: 5]</td><td>4.5-7[cite: 5]</td></tr>
                            <tr><td>Infant (1-12 mo)[cite: 5]</td><td>20-30[cite: 5]</td><td>80-140[cite: 5]</td><td>70-100[cite: 5]</td><td>4-10[cite: 5]</td><td>9-22[cite: 5]</td></tr>
                            <tr><td>Toddler (1-3 yrs)[cite: 5]</td><td>20-30[cite: 5]</td><td>80-130[cite: 5]</td><td>80-110[cite: 5]</td><td>10-14[cite: 5]</td><td>22-31[cite: 5]</td></tr>
                            <tr><td>Preschooler (3-5 yrs)[cite: 5]</td><td>20-30[cite: 5]</td><td>80-120[cite: 5]</td><td>80-110[cite: 5]</td><td>14-18[cite: 5]</td><td>31-40[cite: 5]</td></tr>
                            <tr><td>School Age (6-12 yrs)[cite: 5]</td><td>20-30[cite: 5]</td><td>70-110[cite: 5]</td><td>80-120[cite: 5]</td><td>20-42[cite: 5]</td><td>41-92[cite: 5]</td></tr>
                            <tr><td>Adolescent (13+ yrs)[cite: 5]</td><td>12-20[cite: 5]</td><td>55-105[cite: 5]</td><td>110-120[cite: 5]</td><td>&gt;50[cite: 5]</td><td>&gt;110[cite: 5]</td></tr>
                        </tbody>
                    </table>
                </div>

                <h4 class="font-bold mt-4 mb-2">Glasgow Coma Scale (Adult)</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div>
                        <strong>Eye Opening[cite: 5]</strong>
                        <ul class="list-none pl-0 mt-1">
                            <li>4. Spontaneous[cite: 5]</li>
                            <li>3. To speech[cite: 5]</li>
                            <li>2. To pain[cite: 5]</li>
                            <li>1. No response[cite: 5]</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Verbal Response[cite: 5]</strong>
                        <ul class="list-none pl-0 mt-1">
                            <li>5. Oriented[cite: 5]</li>
                            <li>4. Sentences[cite: 5]</li>
                            <li>3. Words[cite: 5]</li>
                            <li>2. Sounds[cite: 5]</li>
                            <li>1. No response[cite: 5]</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Motor Response[cite: 5]</strong>
                        <ul class="list-none pl-0 mt-1">
                            <li>6. Obeys commands[cite: 5]</li>
                            <li>5. Localises pain[cite: 5]</li>
                            <li>4. Flexion/withdrawal to pain[cite: 5]</li>
                            <li>3. Abnormal flexion to pain[cite: 5]</li>
                            <li>2. Extension to pain[cite: 5]</li>
                            <li>1. No response[cite: 5]</li>
                        </ul>
                    </div>
                </div>

                <h4 class="font-bold mt-4 mb-2">Glasgow Coma Scale (Pediatric)</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div>
                        <strong>Eye Opening[cite: 5]</strong>
                        <ul class="list-none pl-0 mt-1">
                            <li>4. Spontaneous[cite: 5]</li>
                            <li>3. To voice[cite: 5]</li>
                            <li>2. To pain[cite: 5]</li>
                            <li>1. None[cite: 5]</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Verbal Response[cite: 5]</strong>
                        <ul class="list-none pl-0 mt-1">
                            <li>5. Oriented[cite: 5]</li>
                            <li>4. Confused[cite: 5]</li>
                            <li>3. Inappropriate words[cite: 5]</li>
                            <li>2. Incomprehensible sounds[cite: 5]</li>
                            <li>1. Silent[cite: 5]</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Motor Response[cite: 5]</strong>
                        <ul class="list-none pl-0 mt-1">
                            <li>6. Obeys commands[cite: 5]</li>
                            <li>5. Localizes pain[cite: 5]</li>
                            <li>4. Withdraws[cite: 5]</li>
                            <li>3. Abnormal flexion <em>(Decorticate)</em>[cite: 5]</li>
                            <li>2. Abnormal extension <em>(Decerebrate)</em>[cite: 5]</li>
                            <li>1. No movement[cite: 5]</li>
                        </ul>
                    </div>
                </div>
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
                    <li><strong>Target Population:</strong> Adult and pediatric trauma patients.[cite: 5]</li>
                    <li><strong>Treatment Priorities:</strong> Ensure scene safety, utilize protective equipment, consider mechanisms of injury, and identify special extrication needs.[cite: 5]</li>
                </ul>

                <h3>2. General Supportive & Initial Assessment</h3>
                <ul>
                    <li><strong>Primary Survey (Completed within 2 minutes):</strong>
                        <ul>
                            <li>The primary survey is only interrupted for life-threatening arterial bleeding, airway obstruction, or respiratory/cardiac arrest.[cite: 5]</li>
                            <li>Manually stabilize the cervical spine while assessing the airway and level of consciousness.[cite: 5]</li>
                            <li>Control arterial bleeding and evaluate circulation (carotid/radial pulses).[cite: 5]</li>
                            <li>Open the airway and evaluate breathing.[cite: 5]</li>
                            <li>Seal "sucking" chest wound(s).[cite: 5]</li>
                            <li>Perform needle thoracostomy for closed chest tension pneumothorax.[cite: 5]</li>
                            <li>Examine the head, neck, chest, abdomen/pelvis, and extremities for DCAP-BLS (deformity, contusions, abrasions, penetrations, burns, lacerations, swelling).[cite: 5]</li>
                            <li>Auscultate the chest for present and equal breath sounds in the mid-axilla bilaterally.[cite: 5]</li>
                        </ul>
                    </li>
                    <li><strong>"LOAD & GO" Criteria:</strong> Rapidly immobilize and transport any trauma patient with an altered level of consciousness, abnormal respiration, abnormal circulation, or signs likely to lead to shock (distended abdomen, pelvic instability, bilateral femur fractures) immediately after the primary survey.[cite: 5]</li>
                    <li><strong>Secondary & Reassessment Surveys:</strong> Perform the secondary survey enroute for critical patients (vital signs, history, head-to-toe exam, splinting).[cite: 5] Reassess critical patients at least every five minutes.[cite: 5]</li>
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
                    <li><strong>Target Population:</strong> Adult and pediatric patients.[cite: 5]</li>
                    <li><strong>Treatment Priorities:</strong> Address ABCs (or CAB if cardiac arrest), obtain early vital signs, and get the best history possible.[cite: 5] Evaluate and treat the underlying medical cause per specific protocols, providing early transport and ED notification for time-sensitive conditions (e.g., Respiratory Failure, STEMI, Stroke).[cite: 5]</li>
                </ul>

                <h3>2. Treatment Steps by Scope of Practice</h3>
                <ul>
                    <li><strong>EMT:</strong>
                        <ul>
                            <li>Manage the airway and support oxygenation/ventilation.[cite: 5]</li>
                            <li>Obtain vital signs.[cite: 5]</li>
                            <li>Apply a cardiac monitor or obtain a 12-lead ECG (when indicated and if equipped).[cite: 5] Transmit the 12-lead ECG to the receiving hospital.[cite: 5]</li>
                            <li>Monitor End-Tidal CO2 and waveform capnography (mandatory use if the patient is intubated).[cite: 5]</li>
                            <li>Assist the patient with their own medication if directed by protocol(s).[cite: 5]</li>
                            <li>Determine blood glucose and treat hypoglycemia per protocol.[cite: 5]</li>
                        </ul>
                    </li>
                    <li><strong>AEMT:</strong>
                        <ul>
                            <li>Intubate if indicated.[cite: 5]</li>
                            <li>Establish IV/IO access if indicated.[cite: 5]</li>
                            <li>Administer fluid boluses and medications as directed by specific medical protocol(s).[cite: 5]</li>
                        </ul>
                    </li>
                    <li><strong>Paramedic:</strong>
                        <ul>
                            <li>Provide continuous treatment and assessment per specific medical protocol(s).[cite: 5]</li>
                            <li>Interpret 12-lead ECGs (when indicated and if equipped).[cite: 5]</li>
                        </ul>
                    </li>
                </ul>

                <h3>3. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Operational Note:</strong> Take medical care to the patient by bringing appropriate equipment (airway kit, med/trauma kit, suction, AED/monitor) directly to the patient's side to minimize critical treatment delays.[cite: 5]</li>
                    <li><strong>Movement Restrictions:</strong> Minimize active movement by the patient in settings of suspected myocardial ischemia, stroke, and dyspnea.[cite: 5] Move and package the patient with safety considerations for all involved.[cite: 5]</li>
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
                    <li><strong>Target Population:</strong> Adult and pediatric patients.[cite: 5]</li>
                    <li><strong>Treatment Priorities:</strong> Ensure scene safety, utilize protective equipment, and conduct a Primary Survey.[cite: 5] Issue a "Trauma Alert" to the receiving ED if indicated.[cite: 5]</li>
                </ul>

                <h3>2. Treatment Steps by Scope of Practice</h3>
                <ul>
                    <li><strong>EMT:</strong>
                        <ul>
                            <li><strong>Serious Hemorrhage Control:</strong> Apply a tourniquet if indicated, utilize bandage/dressing/direct pressure, apply a pressure dressing (if equipped), and apply a topical hemostatic agent (if equipped).[cite: 5]</li>
                            <li>Manage the airway and support oxygenation/ventilation.[cite: 5]</li>
                            <li>Obtain vital signs, assess for shock, and treat accordingly.[cite: 5]</li>
                            <li>Prevent hypothermia.[cite: 5]</li>
                        </ul>
                    </li>
                    <li><strong>AEMT:</strong>
                        <ul>
                            <li>Intubate if indicated.[cite: 5]</li>
                            <li>Establish IV/IO access if indicated.[cite: 5]</li>
                            <li>Administer fluid boluses as directed by specific trauma protocol(s).[cite: 5]</li>
                        </ul>
                    </li>
                    <li><strong>Paramedic:</strong>
                        <ul>
                            <li>Perform cricothyrotomy if indicated.[cite: 5]</li>
                            <li>Perform needle thoracostomy if a tension pneumothorax is suspected.[cite: 5]</li>
                            <li>Provide continuous treatment and assessment per specific trauma protocol(s).[cite: 5]</li>
                        </ul>
                    </li>
                </ul>

                <h3>3. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Operational Note:</strong> The practice of EMS medicine is built upon the foundation of "taking medical care to the patient".[cite: 5] Appropriate equipment (airway kit, med/trauma kit, suction, packaging equipment) should be brought to the patient's side to minimize critical treatment delays.[cite: 5]</li>
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
                    <li><strong>Target Population:</strong> Newborns and infants within the first 30 days of life.[cite: 5]</li>
                    <li><strong>Treatment Priorities:</strong> Preserve patient warmth/avoid hypothermia and focus on basic life support interventions.[cite: 5] Invasive, advanced procedures are rarely warranted and are rarely more effective than simple basic interventions.[cite: 5]</li>
                </ul>

                <h3>2. General Supportive & Initial Assessment</h3>
                <ul>
                    <li><strong>Warmth:</strong> Neonates rapidly lose body heat due to high surface-to-body weight ratios, which can lead to respiratory and circulatory distress.[cite: 5] Keep the neonate warm and minimize skin exposures.[cite: 5]</li>
                    <li><strong>Airway & Breathing:</strong> Evaluate patency; simple positioning may be required.[cite: 5] Briefly expose the chest to assess respirations, and auscultate breath sounds bilaterally in the axilla to avoid confusing sounds from the other side of the chest.[cite: 5] Gentle tactile stimulation (rubbing the back, flicking soles of feet) is often very effective in improving breathing activity.[cite: 5] Liberally obtain pulse oximetry and waveform capnography (mandatory if intubated).[cite: 5]</li>
                    <li><strong>Circulation:</strong> Evaluate activity level, general body warmth, and brachial pulse.[cite: 5]
                        <ul>
                            <li>Pulse rates &lt; 100/minute are abnormal and indicate impending cardiovascular collapse.[cite: 5]</li>
                            <li>Pulse rates &lt; 60/minute indicate cardiovascular collapse; chest compressions should be initiated.[cite: 5]</li>
                        </ul>
                    </li>
                    <li><strong>Blood Pressure:</strong> Blood pressure is difficult to measure and often unreliable in the field.[cite: 5] Evaluate perfusion via activity level, skin temperature/color, capillary refill (normally &lt; 3 seconds), and muscular tone.[cite: 5]</li>
                </ul>

                <h3>3. Clinical Pearls & Cross-References</h3>
                <ul>
                    <li><strong>Cardiac Arrest Exception:</strong> Aggressively initiate chest compressions while conserving warmth and initiating supplemental oxygenation/ventilation.[cite: 5]</li>
                    <li><strong>APGAR Scoring:</strong> Obtain scores at 1 and 5 minutes post-birth; continue every 5 minutes if the APGAR score is &lt; 7.[cite: 5]</li>
                </ul>
                
                <div class="overflow-x-auto mt-4 mb-4">
                    <table class="protocol-table w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th>SCORE[cite: 5]</th>
                                <th>0 points[cite: 5]</th>
                                <th>1 point[cite: 5]</th>
                                <th>2 points[cite: 5]</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Appearance</strong> (Skin color)[cite: 5]</td>
                                <td>Cyanotic / Pale all over[cite: 5]</td>
                                <td>Peripheral cyanosis only[cite: 5]</td>
                                <td>Pink[cite: 5]</td>
                            </tr>
                            <tr>
                                <td><strong>Pulse</strong> (Heart rate)[cite: 5]</td>
                                <td>0[cite: 5]</td>
                                <td>&lt; 100[cite: 5]</td>
                                <td>100-140[cite: 5]</td>
                            </tr>
                            <tr>
                                <td><strong>Grimace</strong> (Reflex irritability)[cite: 5]</td>
                                <td>No response to stimulation[cite: 5]</td>
                                <td>Grimace or weak cry when stimulated[cite: 5]</td>
                                <td>Cry when stimulated[cite: 5]</td>
                            </tr>
                            <tr>
                                <td><strong>Activity</strong> (Tone)[cite: 5]</td>
                                <td>Floppy[cite: 5]</td>
                                <td>Some flexion[cite: 5]</td>
                                <td>Well flexed and resisting extension[cite: 5]</td>
                            </tr>
                            <tr>
                                <td><strong>Respiration</strong>[cite: 5]</td>
                                <td>Apneic[cite: 5]</td>
                                <td>Slow, irregular breathing[cite: 5]</td>
                                <td>Strong cry[cite: 5]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    }
];
