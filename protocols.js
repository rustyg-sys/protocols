// This file holds all the text and data for the protocols.
// The main index.html file will automatically read this data.

const protocolsDatabase = {
    1: [ // ASSESSMENT BUCKET
        { 
            id: "1A", 
            title: "1A Medical General Assessment - Adult & Pediatric", 
            content: `
                <div class="protocol-content">
                    <div class="highlight-box">
                        <h3 style="margin-top:0; border-bottom: none;">TREATMENT PRIORITIES</h3>
                        <ul>
                            <li><strong>Assessment:</strong> Scene Safety, Protective Equipment, Primary Survey, Secondary Survey (when appropriate)</li>
                            <li><strong>Primary Survey Care:</strong> Initiate CPR if indicated, Open airway, Support oxygenation/ventilation, Support circulation (Dysrhythmia care? Rate control? Hypotension care?)</li>
                            <li><strong>Minimize scene time</strong> in critical case unless working cardiac arrest</li>
                            <li><strong>Enroute Care:</strong> Reassess all primary care, Support oxygenation/ventilation, Vascular access, Secondary Survey (if able), Keep patient warm/avoid hypothermia</li>
                            <li><strong>Hospital</strong> per destination protocol</li>
                        </ul>
                    </div>
                    <p>In general, approach the assessment of medical (non-trauma) patients, in A-B-C order:</p>
                    <ul>
                        <li><strong>Airway:</strong> Evaluate the patency and mechanics of the airway. Rapid intervention may be required during the assessment phase if airway patency and protection is compromised.</li>
                        <li><strong>Breathing:</strong> Expose the chest as required to accurately assess mechanics of respiration. Note rate, depth, and pattern. Auscultate breath sounds bilaterally. Liberally obtain pulse oximetry and waveform capnography (**Mandatory use if the patient is intubated).</li>
                        <li><strong>Circulation:</strong> Assess level of consciousness and mental status first. Next assess location, rate, and character of pulse. Check a blood pressure (preferably manually first). Apply cardiac monitor liberally.</li>
                        <li><strong>Cardiac Arrest</strong> is an exception to the above order. Aggressively initiate chest compressions and search for shockable rhythms at appropriate intervals.</li>
                    </ul>
                    
                    <h3>Adult Glasgow Coma Scale</h3>
                    <div class="overflow-x-auto">
                        <table class="protocol-table">
                            <tr><th>Eyes Open</th><th>Best Motor Response</th><th>Best Verbal Response</th></tr>
                            <tr><td>Spontaneously (4)</td><td>Obeys verbal orders (6)</td><td>Oriented, conversant (5)</td></tr>
                            <tr><td>To command (3)</td><td>Localizes painful stimuli (5)</td><td>Disoriented, conversant (4)</td></tr>
                            <tr><td>To pain (2)</td><td>Withdraws (4)</td><td>Inappropriate words (3)</td></tr>
                            <tr><td>No response (1)</td><td>Painful stimulus, flexion (3)<br>Painful stimulus, extension (2)<br>No response (1)</td><td>Inappropriate sounds (2)<br>No response (1)</td></tr>
                        </table>
                    </div>
                    <p class="text-sm"><em>Maximum 15 points.</em></p>

                    <p>After addressing the A-B-C order in most medical patients, minimize scene time and initiate timely transport for time-sensitive medical conditions.</p>
                    <p>Reassess patients frequently, typically at least every 10 minutes, and more often if critical illness is discovered (every 5 minutes for unstable patients).</p>

                    <h3>Pediatric Assessment Comments</h3>
                    <p>1. Pediatric respiratory distress may look just like adult respiratory distress, presenting with: slowing respirations, cyanosis, accessory muscle use, paleness, nasal flaring, lethargy/listlessness, retractions, irritability, tachypnea, stridor, mottling, grunting.</p>
                    
                    <p>2. Vital signs vary with age. In general, the younger the patient, the faster the respiratory rate, the faster the heart rate, and the lower the blood pressure:</p>
                    <div class="overflow-x-auto">
                        <table class="protocol-table">
                            <tr><th>AGE</th><th>HEART RATE (BPM)</th><th>RESP. RATE (BPM)</th><th>SYSTOLIC BP (mmHg)</th></tr>
                            <tr><td>Premature</td><td>100-190</td><td>40-60</td><td>-</td></tr>
                            <tr><td>Neonate</td><td>90-190</td><td>30-60</td><td>50-70</td></tr>
                            <tr><td>6 months</td><td>80-180</td><td>25-40</td><td>60-110</td></tr>
                            <tr><td>1 year</td><td>80-150</td><td>20-40</td><td>70-110</td></tr>
                            <tr><td>3-4 years</td><td>80-140</td><td>20-30</td><td>80-115</td></tr>
                            <tr><td>5-6 years</td><td>70-120</td><td>20-25</td><td>80-115</td></tr>
                            <tr><td>7-8 years</td><td>70-110</td><td>20-25</td><td>85-120</td></tr>
                            <tr><td>11-12 years</td><td>60-110</td><td>15-20</td><td>95-135</td></tr>
                        </table>
                    </div>
                    <ul class="text-sm">
                        <li>Average normal systolic BP estimated by: 80 + (2 x age in years).</li>
                        <li>Lower limits of normal systolic BP estimated by: 70 + (2 x age in years).</li>
                    </ul>

                    <h3>Pediatric Glasgow Coma Scale Scores</h3>
                    <div class="overflow-x-auto">
                        <table class="protocol-table">
                            <tr><th>Points</th><th>Best eye</th><th>Best verbal</th><th>Best Motor</th></tr>
                            <tr><td>6</td><td></td><td></td><td>obeys</td></tr>
                            <tr><td>5</td><td></td><td>smiles, oriented to sound, follows objects, interacts</td><td>localizes pain</td></tr>
                            <tr><td>4</td><td>spontaneous</td><td>crying consolable / Interaction inappropriate</td><td>withdraws to pain</td></tr>
                            <tr><td>3</td><td>to speech</td><td>inconsistently consolable / moaning</td><td>flexion (decorticate)</td></tr>
                            <tr><td>2</td><td>to pain</td><td>inconsolable / restless</td><td>extensor (decerebrate)</td></tr>
                            <tr><td>1</td><td>none</td><td>none</td><td>none</td></tr>
                        </table>
                    </div>
                </div>
            `
        },
        { 
            id: "1B", 
            title: "1B Trauma General Assessment - Adult & Pediatric", 
            content: `
                <div class="protocol-content">
                    <div class="highlight-box">
                        <h3 style="margin-top:0; border-bottom: none;">TREATMENT PRIORITIES</h3>
                        <ul>
                            <li><strong>Assessment:</strong> Scene Safety, Protective Equipment, Primary Survey, "Trauma Alert" to ED if indicated, Secondary Survey</li>
                            <li><strong>Primary Survey Care:</strong> Control arterial bleeding, Open airway, Seal "sucking" chest wound(s), Needle thoracostomy for closed chest tension pneumothorax</li>
                            <li><strong>Minimize scene time</strong> in critical case</li>
                            <li><strong>Enroute Care:</strong> Reassess all primary care, Support oxygenation/ventilation, Vascular access, Secondary Survey (if able), Keep patient warm/avoid hypothermia</li>
                            <li><strong>Hospital</strong> per destination protocol</li>
                        </ul>
                    </div>
                    <p>Before entering any trauma scene, ensure your personal safety. Do not attempt patient contact until hazards can be appropriately mitigated.</p>
                    
                    <h3>The Primary Survey</h3>
                    <p>Designed to rapidly identify life-threatening injuries. Should be completed within 2 minutes of patient contact. ONLY INTERRUPTED FOR LIFE-THREATENING ARTERIAL BLEEDING, AIRWAY OBSTRUCTION, OR RESPIRATORY/CARDIAC ARREST.</p>
                    <ul>
                        <li>Manually stabilize cervical spine while assessing airway and level of consciousness.</li>
                        <li>Evaluate breathing - present? rapid? normal? slow? shallow?</li>
                        <li>Evaluate circulation - carotid and radial pulses? Control external hemorrhage.</li>
                        <li>Exam the head for DCAP-BLS (deformity, contusions, abrasions, penetrations, burns, lacerations, swelling).</li>
                        <li>Exam the neck for DCAP-BLS, or subcutaneous emphysema.</li>
                        <li>Exam the chest for DCAP-BLS, or paradoxical movement.</li>
                        <li>Auscultate the chest for breath sounds in mid-axilla bilaterally - present? equal?</li>
                        <li>Exam the abdomen and pelvis for DCAP-BLS.</li>
                        <li>Exam the extremities for DCAP-BLS, and pulse, movement, sensation.</li>
                    </ul>

                    <div class="bg-red-100 border-l-4 border-red-500 p-4 my-4 rounded">
                        <p class="font-bold text-red-700 m-0">LOAD & GO PATIENTS:</p>
                        <p class="text-sm mt-1">Any trauma patient with altered level of consciousness, abnormal respiration, abnormal circulation, or signs/conditions likely to lead to shock (distended abdomen, pelvic instability, bilateral femur fractures) should be rapidly immobilized and transported after completing the primary survey.</p>
                    </div>

                    <h3>The Secondary Survey</h3>
                    <p>Always done enroute on critical patients. If no critical conditions found, may be conducted on scene (complete within 5 minutes after primary survey).</p>
                    <ul>
                        <li>Obtain vital signs (pulse, respiratory rate, BP, pulse oximetry).</li>
                        <li>Obtain history of traumatic event and pertinent medical history (allergies, medications, past illness, last oral intake).</li>
                        <li>Head to toe exam look for "DCAP-BLS" in every body area. Calculate GCS score.</li>
                        <li>Perform indicated bandaging and splinting.</li>
                    </ul>

                    <h3>The Reassessment Survey</h3>
                    <p>Abbreviated exam after interventions; done at least every five minutes for critical patients.</p>
                    <ul>
                        <li>Repeat the primary survey.</li>
                        <li>Repeat vital signs and GCS calculation.</li>
                        <li>Check every intervention (proper placement of intubation? IV/IO?).</li>
                        <li>Check results of every intervention (improved oxygenation/BP?).</li>
                    </ul>
                </div>
            `
        },
        {
            id: "1C",
            title: "1C General Supportive Care - Adult & Pediatric",
            content: `
                <div class="protocol-content">
                    <div class="highlight-box">
                        <h3 style="margin-top:0; border-bottom: none;">TREATMENT PRIORITIES</h3>
                        <ul>
                            <li><strong>Assessment:</strong> SCENE SAFETY, PROTECTIVE EQUIPMENT, ABCs unless cardiac arrest (CAB if cardiac arrest), Early vital signs, Get best history possible</li>
                            <li><strong>Evaluate/treat</strong> underlying medical cause per protocol(s)</li>
                            <li><strong>Early transport & ED notification</strong> for patients with time sensitive conditions (Resp Failure, STEMI, Stroke)</li>
                        </ul>
                    </div>

                    <h3>Provider Level Actions</h3>
                    <p><em>If chief complaint is medical in nature, choose protocol that best fits foremost symptoms.</em></p>
                    <ul>
                        <li><strong>EMD:</strong> Questions to address scene safety issues.</li>
                        <li><strong>EMR / EMT:</strong> 
                            <ul class="mt-2">
                                <li>Airway Management / Support Oxygenation/Ventilation</li>
                                <li>Obtain Vital Signs</li>
                                <li>Apply Cardiac Monitor / Obtain 12-Lead ECG (when indicated & equipped)</li>
                                <li>Transmit 12-Lead ECG to receiving hospital</li>
                                <li>Monitor End-Tidal CO2 & Waveform Capnography (*Mandatory if pt intubated)</li>
                                <li>Assist Pt with Pt's own medication if directed by protocol</li>
                                <li>Determine blood glucose / treat hypoglycemia per protocol</li>
                            </ul>
                        </li>
                        <li><strong>EMT-I85 / AEMT:</strong>
                            <ul class="mt-2">
                                <li>Intubate if indicated</li>
                                <li>IV/IO access if indicated</li>
                                <li>Fluid bolus as directed by specific medical protocol(s)</li>
                                <li>Medication administration per specific medical protocol(s)</li>
                            </ul>
                        </li>
                        <li><strong>PARAMEDIC:</strong>
                            <ul class="mt-2">
                                <li>Continuous treatment and assessment per specific medical protocol(s)</li>
                                <li>Interpretation of 12-Lead ECGs (when indicated & equipped)</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Clinical Operational Notes</h3>
                    <p>1. The practice of EMS medicine is built upon the foundation of "taking medical care to the patient". Appropriate equipment (airway kit, med/trauma kit, suction, monitor, packaging) should be brought to the patient's side to minimize critical treatment delays.</p>
                    <p>2. Minimize active movement on the patient's part in settings of suspected myocardial ischemia, stroke, and dyspnea. Move and package with safety considerations.</p>
                </div>
            `
        },
        {
            id: "1D",
            title: "1D Trauma and Hypovolemic Shock Supportive Care",
            content: `
                <div class="protocol-content">
                    <div class="highlight-box">
                        <h3 style="margin-top:0; border-bottom: none;">TREATMENT PRIORITIES</h3>
                        <ul>
                            <li><strong>Assessment:</strong> SCENE SAFETY, PROTECTIVE EQUIPMENT, Primary Survey, "Trauma Alert" to ED if indicated, Secondary Survey</li>
                            <li><strong>Primary Survey Care:</strong> Control arterial bleeding, Open airway, Seal "sucking" chest wound(s), Needle thoracostomy for closed chest tension pneumothorax</li>
                            <li><strong>Minimize scene time</strong> in critical case</li>
                            <li><strong>Enroute Care:</strong> Reassess all primary care, Support oxygenation/ventilation, Vascular access, Secondary Survey (if able), Keep patient warm/avoid hypothermia</li>
                            <li><strong>Hospital</strong> per destination protocol</li>
                        </ul>
                    </div>

                    <h3>Provider Level Actions</h3>
                    <p><em>If chief complaint is traumatic in nature, choose protocol that best fits foremost symptoms.</em></p>
                    <ul>
                        <li><strong>EMD:</strong> Questions to address scene safety issues.</li>
                        <li><strong>EMR / EMT:</strong> 
                            <ul class="mt-2">
                                <li><strong>Serious Hemorrhage Control:</strong> Tourniquet if indicated, Bandage/Dressing/Direct Pressure, Pressure Dressing if indicated/equipped, Topical Hemostatic Agent if indicated/equipped</li>
                                <li>Airway Management & Support Oxygenation/Ventilation</li>
                                <li>Obtain vital signs / assess for and treat shock</li>
                                <li>Prevent Hypothermia</li>
                            </ul>
                        </li>
                        <li><strong>EMT-I85 / AEMT:</strong>
                            <ul class="mt-2">
                                <li>Intubate if indicated</li>
                                <li>IV/IO access if indicated</li>
                                <li>Fluid bolus as directed by specific trauma protocol(s)</li>
                            </ul>
                        </li>
                        <li><strong>PARAMEDIC:</strong>
                            <ul class="mt-2">
                                <li>Cricothyrotomy if indicated</li>
                                <li>Needle thoracostomy if tension pneumothorax suspected</li>
                                <li>Continuous treatment and assessment per specific trauma protocol(s)</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Clinical Operational Note</h3>
                    <p>The practice of EMS medicine is built upon the foundation of "taking medical care to the patient". To achieve this objective, appropriate equipment (airway equipment kit, med/trauma equipment kit, suction device, patient packaging equipment) should be brought to the patient's side to minimize critical treatment delays in secondarily fetching equipment from the response apparatus.</p>
                </div>
            `
        },
        {
            id: "1E",
            title: "1E Neonatal Resuscitation Pediatric",
            content: `
                <div class="protocol-content">
                    <div class="highlight-box">
                        <h3 style="margin-top:0; border-bottom: none;">TREATMENT PRIORITIES</h3>
                        <ul>
                            <li><strong>Preserve patient warmth</strong>/avoid hypothermia</li>
                            <li><strong>Assessment:</strong> Primary Survey, Secondary Survey (when appropriate)</li>
                            <li><strong>Primary Survey Care:</strong> Initiate CPR if indicated, Open airway, Support oxygenation/ventilation, Support circulation</li>
                            <li><strong>Minimize scene time</strong> in critical case unless working cardiac arrest</li>
                            <li><strong>Enroute Care:</strong> Reassess all primary care, Support oxygenation/ventilation, Secondary Survey (if able)</li>
                            <li><strong>Hospital</strong> per destination protocol</li>
                        </ul>
                    </div>
                    
                    <p>In general, approach the resuscitation of the newborn or infant within the first 30 days of life focusing on basic life support interventions. Invasive, advanced procedures are rarely warranted and are rarely more effective than simple, yet important basic interventions.</p>

                    <ul>
                        <li><strong>Warmth (Body Temperature Conservation):</strong> Due to high surface to body weight ratios, the neonate rapidly loses body heat which can lead to respiratory and circulatory distress. Keep the neonate warm and minimize skin exposures unless absolutely warranted.</li>
                        <li><strong>Airway:</strong> Evaluate the patency and mechanics of the airway. Is the patient able to oxygenate and ventilate? Simple positioning intervention may be required if airway patency/protection is compromised.</li>
                        <li><strong>Breathing:</strong> Briefly expose the chest as required to accurately assess mechanics of respiration. Note rate, depth, pattern, and effort. Auscultate breath sounds bilaterally in the axilla to avoid confusing sounds from the other side of the chest. Gentle tactile stimulation (e.g. rubbing back, flicking soles of feet) may be required early and often proves very effective. Liberally obtain pulse oximetry and waveform capnography (**Mandatory use if the patient is intubated).</li>
                    </ul>
                </div>
            `
        }
    ]
};
