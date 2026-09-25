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
                        <li><strong>Target Population:</strong> Adult and Pediatric medical (non-trauma) patients.</li>
                        <li><strong>Entry Criteria:</strong> Patients requiring medical assessment and general supportive care.</li>
                    </ul>

                    <h3>2. General Supportive & Initial Assessment</h3>
                    <ul>
                        <li><strong>Assessment Priorities:</strong> Ensure scene safety and utilize protective equipment. Conduct a primary survey, followed by a secondary survey when appropriate.</li>
                        <li><strong>Primary Survey Care (A-B-C Approach):</strong>
                            <ul>
                                <li><strong>Airway:</strong> Evaluate patency and mechanics of the airway to ensure the patient can oxygenate and ventilate. Rapid intervention may be required if airway protection is compromised.</li>
                                <li><strong>Breathing:</strong> Expose the chest to assess respiration mechanics, noting the rate, depth, and pattern of respirations. Auscultate breath sounds bilaterally.</li>
                                <li><strong>Cardiac Arrest Exception:</strong> Aggressively initiate chest compressions and search for shockable rhythms at appropriate intervals rather than following the standard A-B-C order.</li>
                            </ul>
                        </li>
                        <li><strong>Scene Time:</strong> Minimize scene time for critical cases (unless working a cardiac arrest) and initiate timely transport for time-sensitive medical conditions.</li>
                        <li><strong>Enroute Care:</strong> Reassess primary care, support oxygenation/ventilation, obtain vascular access, complete secondary survey (if able), and keep the patient warm to avoid hypothermia.</li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Glasgow Coma Scale (GCS):</strong> Use the GCS to help guide treatment decisions regarding airway management:
                            <ul>
                                <li><strong>Eyes Open:</strong> Spontaneously (4), To command (3), To pain (2), No response (1).</li>
                                <li><strong>Best Motor Response:</strong> Obeys verbal orders (6), Localizes painful stimuli (5), Withdraws (4), Painful stimulus/flexion (3), Painful stimulus/extension (2), No response (1).</li>
                                <li><strong>Best Verbal Response:</strong> Oriented/conversant (5), Disoriented/conversant (4), Inappropriate words (3), Inappropriate sounds (2), No response (1).</li>
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
                        <li><strong>Target Population:</strong> Adult and Pediatric trauma patients.</li>
                    </ul>

                    <h3>2. General Supportive & Initial Assessment</h3>
                    <ul>
                        <li><strong>Assessment Priorities:</strong> Ensure scene safety and utilize protective equipment. Conduct a primary survey, issue a "Trauma Alert" to the receiving ED if indicated, and conduct a secondary survey when appropriate.</li>
                        <li><strong>Primary Survey Care:</strong>
                            <ul>
                                <li>Control arterial bleeding.</li>
                                <li>Open the airway.</li>
                                <li>Seal "sucking" chest wound(s).</li>
                                <li>Perform needle thoracostomy for closed chest tension pneumothorax.</li>
                            </ul>
                        </li>
                        <li><strong>Physical Exam Findings:</strong> Examine the chest for paradoxical movement and auscultate breath sounds in the mid-axilla bilaterally to ensure they are present and equal. Examine the abdomen, pelvis, and extremities for deformity, contusions, abrasions, penetrations, burns, lacerations, or swelling (DCAP-BLS). Check extremities for pulse, movement, and sensation.</li>
                        <li><strong>Enroute Care:</strong> Reassess all primary care, support oxygenation/ventilation, obtain vascular access, conduct a secondary survey (if able), and keep the patient warm to avoid hypothermia. Minimize scene time in critical cases.</li>
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
                        <li><strong>Target Population:</strong> Adult and Pediatric patients presenting with medical complaints.</li>
                        <li><strong>Treatment Priorities:</strong> Ensure scene safety and utilize protective equipment. Evaluate and treat the underlying medical cause per specific protocols, providing early transport and ED notification for time-sensitive conditions such as Respiratory Failure, STEMI, or Stroke.</li>
                    </ul>

                    <h3>2. Treatment Steps by Scope of Practice</h3>
                    <ul>
                        <li><strong>EMT:</strong>
                            <ul>
                                <li>Manage the airway and support oxygenation/ventilation.</li>
                                <li>Obtain vital signs.</li>
                                <li>Apply a cardiac monitor or obtain a 12-lead ECG (when indicated and if equipped). Transmit the 12-lead ECG to the receiving hospital.</li>
                                <li>Measure End-Tidal CO2 and monitor waveform capnography (mandatory use if the patient is intubated).</li>
                            </ul>
                        </li>
                        <li><strong>AEMT:</strong>
                            <ul>
                                <li>Intubate if indicated.</li>
                                <li>Establish IV/IO access if indicated.</li>
                                <li>Administer fluid bolus and medications as directed by specific medical protocol(s).</li>
                            </ul>
                        </li>
                        <li><strong>Paramedic:</strong>
                            <ul>
                                <li>Interpret 12-lead ECGs (when indicated and if equipped).</li>
                                <li>Provide continuous treatment and assessment per specific medical protocol(s).</li>
                            </ul>
                        </li>
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
                        <li><strong>Target Population:</strong> Adult and Pediatric patients suffering from trauma or hypovolemic shock.</li>
                        <li><strong>Treatment Priorities:</strong> Ensure scene safety and utilize protective equipment. Conduct a primary survey and initiate a "Trauma Alert" to the receiving ED if indicated.</li>
                    </ul>

                    <h3>2. Treatment Steps by Scope of Practice</h3>
                    <ul>
                        <li><strong>EMT:</strong>
                            <ul>
                                <li><strong>Serious Hemorrhage Control:</strong> Apply a tourniquet if indicated, utilize bandage/dressing/direct pressure, apply a pressure dressing (if equipped), and use a topical hemostatic agent if indicated and equipped.</li>
                                <li>Manage the airway and support oxygenation/ventilation.</li>
                                <li>Obtain vital signs, assess for shock, and treat accordingly.</li>
                                <li>Prevent hypothermia.</li>
                            </ul>
                        </li>
                        <li><strong>AEMT:</strong>
                            <ul>
                                <li>Intubate if indicated.</li>
                                <li>Establish IV/IO access if indicated.</li>
                                <li>Administer a fluid bolus as directed by specific trauma protocol(s).</li>
                            </ul>
                        </li>
                        <li><strong>Paramedic:</strong>
                            <ul>
                                <li>Perform cricothyrotomy if indicated.</li>
                                <li>Perform needle thoracostomy if a tension pneumothorax is suspected.</li>
                                <li>Provide continuous treatment and assessment per specific trauma protocol(s).</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>Operational Note:</strong> The practice of EMS medicine is built upon the foundation of "taking medical care to the patient". Appropriate equipment (airway kit, med/trauma kit, suction device, patient packaging equipment) should be brought directly to the patient's side to minimize critical treatment delays.</li>
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
                        <li><strong>Target Population:</strong> Newborns or infants within the first 30 days of life.</li>
                        <li><strong>Treatment Priorities:</strong> Preserve patient warmth/avoid hypothermia and focus on basic life support interventions, as invasive, advanced procedures are rarely more effective than simple, basic interventions.</li>
                    </ul>

                    <h3>2. General Supportive & Initial Assessment</h3>
                    <ul>
                        <li><strong>The Golden Minute:</strong> Initial care steps, reevaluation, and the initiation of ventilation (if necessary) should occur within the first 60 seconds after delivery.</li>
                        <li><strong>Warmth & Thermoregulation:</strong> Thermoregulation is limited in the newborn. Take an active role in keeping the newborn's body temperature normal by placing the newborn directly on the mother's chest, drying the head and body with towels, covering the newborn with a dry towel, and placing a prewarmed cap on the head.</li>
                        <li><strong>Circulation & Assessment:</strong> Assess the rate and character of the brachial pulse.
                            <ul>
                                <li>Pulse rates &lt; 100/minute are abnormal and indicate impending cardiovascular collapse.</li>
                                <li>Pulse rates &lt; 60/minute indicate cardiovascular collapse and require the immediate initiation of chest compressions.</li>
                            </ul>
                        </li>
                        <li><strong>Monitoring:</strong> Liberally obtain pulse oximetry readings and waveform capnography (mandatory use if the patient is intubated).</li>
                    </ul>

                    <h3>3. Clinical Pearls & Cross-References</h3>
                    <ul>
                        <li><strong>APGAR Scoring:</strong> Obtain scores at 1 and 5 minutes post-birth; continue scoring every 5 minutes if the APGAR is &lt; 7.</li>
                    </ul>
                    
                    <div class="overflow-x-auto mt-4">
                        <table class="protocol-table">
                            <tr><th>Sign</th><th>0 Points</th><th>1 Point</th><th>2 Points</th></tr>
                            <tr><td><strong>Appearance</strong></td><td>Blue or Pale</td><td>Body Pink, Extremities Blue</td><td>Completely Pink</td></tr>
                            <tr><td><strong>Heart Rate</strong></td><td>Absent</td><td>&le; 100 bpm</td><td>&gt; 100 bpm</td></tr>
                            <tr><td><strong>Grimace</strong></td><td>No Response</td><td>Grimace</td><td>Cough or Sneeze</td></tr>
                            <tr><td><strong>Muscle Tone</strong></td><td>Limp</td><td>Some Flexion</td><td>Active Motion</td></tr>
                            <tr><td><strong>Respiratory Rate</strong></td><td>Absent</td><td>Slow/Irregular</td><td>Good, Crying</td></tr>
                        </table>
                    </div>
                </div>
            `
        }
    ]
};
