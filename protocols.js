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
                        <li><strong>Target Population:</strong> Adult and Pediatric patients.[cite: 2]</li>
                        <li><strong>Entry Criteria:</strong> Patients presenting with medical (non-trauma) complaints.[cite: 2]</li>
                    </ul>

                    <h3>2. General Supportive & Initial Assessment</h3>
                    <ul>
                        <li><strong>Assessment Priorities:</strong> Ensure scene safety and utilize protective equipment. Conduct a primary survey, followed by a secondary survey when appropriate.[cite: 2]</li>
                        <li><strong>Primary Survey Care (A-B-C Approach):</strong>[cite: 2]
                            <ul>
                                <li><strong>Airway:</strong> Evaluate patency and mechanics. Rapid intervention is required if airway protection is compromised.[cite: 2]</li>
                                <li><strong>Breathing:</strong> Expose the chest to assess respiration mechanics, note rate/depth/pattern, and auscultate bilaterally. Utilize pulse oximetry and waveform capnography (mandatory use if the patient is intubated).[cite: 2]</li>
                                <li><strong>Circulation:</strong> Evaluate level of consciousness, pulse, and obtain a manual blood pressure. Apply cardiac monitor if equipped.[cite: 2]</li>
                                <li><strong>Cardiac Arrest Exception:</strong> Aggressively initiate chest compressions and search for shockable rhythms rather than following the standard A-B-C order.[cite: 2]</li>
                            </ul>
                        </li>
                        <li><strong>Scene Time:</strong> Minimize scene time for critical cases (unless working a cardiac arrest) and initiate early transport for time-sensitive conditions.[cite: 2]</li>
                        <li><strong>Enroute Care:</strong> Reassess primary care, support oxygenation/ventilation, obtain vascular access, complete secondary survey, and prevent hypothermia.[cite: 2]</li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Reassessment Intervals:</strong> Reassess patients at least every 10 minutes, or every 5 minutes if the patient is unstable or hemodynamic changes are occurring.[cite: 2]</li>
                        <li><strong>Pediatric Respiratory Distress:</strong> May present with slowing respirations, cyanosis, accessory muscle use, paleness, nasal flaring, lethargy, retractions, irritability, tachypnea, stridor, mottling, or grunting.[cite: 2]</li>
                        <li><strong>Pediatric Blood Pressure Estimation:</strong> Average normal systolic BP is estimated by 80 + (2 x age in years). The lower limit of normal systolic BP is estimated by 70 + (2 x age in years).[cite: 2]</li>
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
                        <li><strong>Target Population:</strong> Adult and Pediatric patients.[cite: 2]</li>
                        <li><strong>Entry Criteria:</strong> Patients presenting with traumatic injuries.[cite: 2]</li>
                    </ul>

                    <h3>2. General Supportive & Initial Assessment</h3>
                    <ul>
                        <li><strong>Assessment Priorities:</strong> Ensure scene safety, utilize protective equipment, consider mechanisms of injury, and identify special extrication needs. Conduct a primary survey and issue a "Trauma Alert" to the receiving ED if indicated.[cite: 2]</li>
                        <li><strong>Primary Survey Care (Completed within 2 minutes):</strong>[cite: 2]
                            <ul>
                                <li>The primary survey is only interrupted for life-threatening arterial bleeding, airway obstruction, or respiratory/cardiac arrest.[cite: 2]</li>
                                <li>Manually stabilize the cervical spine while assessing the airway and level of consciousness.[cite: 2]</li>
                                <li>Control arterial bleeding and evaluate circulation (carotid/radial pulses).[cite: 2]</li>
                                <li>Open the airway and evaluate breathing.[cite: 2]</li>
                                <li>Seal "sucking" chest wound(s).[cite: 2]</li>
                                <li>Perform needle thoracostomy for closed chest tension pneumothorax.[cite: 2]</li>
                                <li>Examine head, neck, chest, abdomen/pelvis, and extremities for DCAP-BLS (deformity, contusions, abrasions, penetrations, burns, lacerations, swelling).[cite: 2]</li>
                            </ul>
                        </li>
                        <li><strong>"LOAD & GO" Criteria:</strong> Rapidly immobilize and transport any trauma patient with an altered level of consciousness, abnormal respiration, abnormal circulation, or signs likely to lead to shock (distended abdomen, pelvic instability, bilateral femur fractures) immediately after the primary survey.[cite: 2]</li>
                        <li><strong>Secondary & Reassessment Surveys:</strong> Perform the secondary survey enroute for critical patients; it includes vital signs, SAMPLE history, and a detailed head-to-toe GCS calculation. Reassess critical patients at least every five minutes.[cite: 2]</li>
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
                        <li><strong>Target Population:</strong> Adult and Pediatric patients.[cite: 2]</li>
                        <li><strong>Treatment Priorities:</strong> Ensure scene safety and protective equipment. Address ABCs (or CAB if cardiac arrest), obtain early vital signs, and gather the best history possible. Evaluate and treat the underlying medical cause per specific protocols, providing early transport and ED notification for time-sensitive conditions (e.g., Respiratory Failure, STEMI, Stroke).[cite: 2]</li>
                    </ul>

                    <h3>2. Treatment Steps by Scope of Practice</h3>
                    <ul>
                        <li><strong>[EMD]:</strong> If the chief complaint is medical, choose the protocol that best fits the foremost symptoms (priority symptoms take precedence). Address scene safety issues.[cite: 2]</li>
                        <li><strong>[EMR / EMT]:</strong>
                            <ul>
                                <li>Manage airway and support oxygenation/ventilation.[cite: 2]</li>
                                <li>Obtain vital signs.[cite: 2]</li>
                                <li>Apply cardiac monitor / obtain 12-lead ECG (when indicated and if equipped). Transmit the 12-lead ECG to the receiving hospital.[cite: 2]</li>
                                <li>Monitor End-Tidal CO2 and waveform capnography (mandatory use if the patient is intubated).[cite: 2]</li>
                                <li>Assist the patient with their own medication if directed by protocol.[cite: 2]</li>
                                <li>Determine blood glucose and treat hypoglycemia per protocol.[cite: 2]</li>
                            </ul>
                        </li>
                        <li><strong>[AEMT]:</strong>
                            <ul>
                                <li>Intubate if indicated.[cite: 2]</li>
                                <li>Establish IV/IO access if indicated.[cite: 2]</li>
                                <li>Administer fluid bolus and medications as directed by specific medical protocol(s).[cite: 2]</li>
                            </ul>
                        </li>
                        <li><strong>[Paramedic]:</strong>
                            <ul>
                                <li>Provide continuous treatment and assessment per specific medical protocol(s).[cite: 2]</li>
                                <li>Interpret 12-lead ECGs (when indicated and if equipped).[cite: 2]</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Operational Note:</strong> Take medical care to the patient by bringing appropriate equipment (airway kit, med/trauma kit, suction, AED/monitor) to the patient's side to minimize critical treatment delays.[cite: 2]</li>
                        <li><strong>Movement Restrictions:</strong> Minimize active movement by the patient in settings of suspected myocardial ischemia, stroke, and dyspnea.[cite: 2]</li>
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
                        <li><strong>Target Population:</strong> Adult and Pediatric patients.[cite: 2]</li>
                        <li><strong>Treatment Priorities:</strong> Ensure scene safety and protective equipment. Conduct a Primary Survey and initiate a "Trauma Alert" to the receiving ED if indicated.[cite: 2]</li>
                    </ul>

                    <h3>2. Treatment Steps by Scope of Practice</h3>
                    <ul>
                        <li><strong>[EMD]:</strong> If the chief complaint is traumatic, choose the protocol that best fits the foremost symptoms (priority symptoms take precedence). Address scene safety issues.[cite: 2]</li>
                        <li><strong>[EMR/EMT]:</strong>
                            <ul>
                                <li><strong>Serious Hemorrhage Control:</strong> Apply tourniquet if indicated, utilize bandage/dressing/direct pressure, apply a pressure dressing (if equipped), and apply a topical hemostatic agent (if equipped).[cite: 2]</li>
                                <li>Manage airway and support oxygenation/ventilation.[cite: 2]</li>
                                <li>Obtain vital signs, assess for shock, and treat accordingly.[cite: 2]</li>
                                <li>Prevent hypothermia.[cite: 2]</li>
                            </ul>
                        </li>
                        <li><strong>[AEMT]:</strong>
                            <ul>
                                <li>Intubate if indicated.[cite: 2]</li>
                                <li>Establish IV/IO access if indicated.[cite: 2]</li>
                                <li>Administer fluid bolus as directed by specific trauma protocol(s).[cite: 2]</li>
                            </ul>
                        </li>
                        <li><strong>[Paramedic]:</strong>
                            <ul>
                                <li>Perform cricothyrotomy if indicated.[cite: 2]</li>
                                <li>Perform needle thoracostomy if a tension pneumothorax is suspected.[cite: 2]</li>
                                <li>Provide continuous treatment and assessment per specific trauma protocol(s).[cite: 2]</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Operational Note:</strong> Bring appropriate equipment (airway kit, med/trauma kit, suction, packaging equipment) directly to the patient's side to minimize critical treatment delays.[cite: 2]</li>
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
                        <li><strong>Target Population:</strong> Newborns and infants within the first 30 days of life.[cite: 2]</li>
                        <li><strong>Treatment Priorities:</strong> Preserve patient warmth/avoid hypothermia and focus on basic life support interventions. Invasive, advanced procedures are rarely warranted or more effective than simple basic interventions.[cite: 2]</li>
                    </ul>

                    <h3>2. General Supportive & Initial Assessment</h3>
                    <ul>
                        <li><strong>Warmth:</strong> Neonates rapidly lose body heat due to high surface-to-body weight ratios. Keep the neonate warm and minimize skin exposures.[cite: 2]</li>
                        <li><strong>Airway & Breathing:</strong> Evaluate patency; simple positioning may be required. Briefly expose the chest to assess respirations. Gentle tactile stimulation (rubbing the back, flicking soles of feet) is often effective in improving breathing activity. Use pulse oximetry liberally and waveform capnography (mandatory if intubated).[cite: 2]</li>
                        <li><strong>Circulation:</strong> Evaluate activity level, body warmth, and brachial pulse.[cite: 2]
                            <ul>
                                <li>Pulse rates &lt; 100/minute are abnormal and indicate impending cardiovascular collapse.[cite: 2]</li>
                                <li>Pulse rates &lt; 60/minute indicate cardiovascular collapse; chest compressions should be initiated.[cite: 2]</li>
                            </ul>
                        </li>
                        <li><strong>Blood Pressure:</strong> Blood pressure is difficult to measure and often unreliable in the field. Evaluate perfusion via activity level, skin temperature/color, capillary refill (normally &lt; 3 seconds), and muscular tone.[cite: 2]</li>
                        <li><strong>APGAR Scoring:</strong> Obtain scores at 1 and 5 minutes post-birth. Continue every 5 minutes if the APGAR score is &lt; 7.[cite: 2]</li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Cardiac Arrest Exception:</strong> Aggressively initiate chest compressions while conserving warmth and initiating supplemental oxygenation/ventilation.[cite: 2]</li>
                        <li><strong>APGAR Score Parameters:</strong>[cite: 2]
                            <ul>
                                <li><strong>Appearance:</strong> Blue/pale (0), Body pink/extremities blue (1), Completely pink (2).[cite: 2]</li>
                                <li><strong>Pulse (Heart Rate):</strong> Absent (0), &le; 100 bpm (1), &gt; 100 bpm (2).[cite: 2]</li>
                                <li><strong>Grimace (Reaction to catheter):</strong> No response (0), Grimace (1), Cough or sneeze (2).[cite: 2]</li>
                                <li><strong>Activity (Muscle Tone):</strong> Limp (0), Some flexion (1), Active motion (2).[cite: 2]</li>
                                <li><strong>Respiratory Rate:</strong> Absent (0), Slow/irregular (1), Good/crying (2).[cite: 2]</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            `
        }
    ]
};
