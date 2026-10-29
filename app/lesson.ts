export const components = [
  ['Claim','A statement that can be examined or challenged'],
  ['Conclusion','The main judgment the argument asks the reader to accept'],
  ['Reason','A consideration offered in support of a conclusion'],
  ['Evidence','Information used to support or test a claim'],
  ['Inference','A move from information to a further conclusion'],
  ['Assumption','A stated or unstated premise on which the reasoning depends'],
];
export const comparisonFields=['One agreement','One difference','Use the packet to resolve the difference, or record remaining ambiguity'];
export const exitFields=['What was directly observed?','What is inferred?','One assumption connecting them'];
export const baselineFields=['Conclusion, reasons, source-supported observations, inference, and assumption','Most important strengths or weaknesses','Accept, qualify, or investigate: improved recommendation, limitation, and next check'];
export const lessonPlan=[
 {stage:'Waiting',title:'Join and check in',minutes:5,kind:'Welcome',description:'Join → Keep workspace open → Follow the current activity. Resolve access problems before baseline.',student:'Waiting to begin. Only welcome information is available.',slide:0},
 {stage:'Baseline',title:'Independent baseline',minutes:15,kind:'Interactive activity',description:'Work independently using only NotePilot A1–A4. Bullets are welcome. This helps us understand your starting point; terminology is not expected yet. Clarify procedures only; do not discuss answers.',student:'NotePilot packet, recommendation, three response fields, autosave and Submit. No glossary, examples, or feedback.',activity:'baseline',slide:14},
 {stage:'Initial judgment',title:'Hook and initial judgment',minutes:5,kind:'Interactive activity',description:'Read CampusBridge. Privately choose accept, qualify, or investigate; give one brief reason. Would you put your name on this recommendation?',student:'CampusBridge and sources P1–P4 beside a private judgment form.',activity:'judgment',slide:5},
 {stage:'Concepts',title:'Concepts and worked example',minutes:15,kind:'Teaching slides',description:'Introduce claim, conclusion, reason, evidence, inference, and assumption. Model the AI writing-assistant example.',student:'Students follow the same slide as the facilitator. Their earlier responses are preserved.',slide:1},
 {stage:'Argument mapping',title:'Individual argument map',minutes:15,kind:'Interactive activity',description:'Individually map the conclusion, two reasons and sources, evidence, inference, and a consequential assumption.',student:'The source packet stays beside the complete argument-mapping form. Drafts autosave.',activity:'map',slide:10},
 {stage:'Break',title:'Screen break',minutes:5,kind:'Break',description:'Pause for a screen break. No countdown pressure. All saved work is preserved.',student:'A break screen; the next activity appears when you start it.',slide:0},
 {stage:'Comparison',title:'Pair comparison',minutes:15,kind:'Interactive activity',description:'Explain maps with a partner. Identify one agreement and one difference. Use the packet to resolve the difference; record ambiguity if two readings remain plausible.',student:'Their own map, explicitly shared anonymous maps, and a form to record the comparison.',activity:'comparison',slide:11},
 {stage:'Debrief',title:'Instructor debrief',minutes:5,kind:'Discussion',description:'Discuss the selected maps. Clarify evidence versus inference and one consequential assumption. Accept reasonable alternative formulations.',student:'Read-only teaching screen and selected anonymous maps. The revision form opens in the next step.',slide:12},
 {stage:'Revision',title:'Individual revision',minutes:5,kind:'Interactive activity',description:'Examine selected maps, then revise individually. Ask where reporting becomes inference and why an assumption matters.',student:'A map prefilled from the original, plus a revision explanation. The initial submission stays intact.',activity:'map',attempt:'revision',slide:12},
 {stage:'Exit retrieval',title:'Exit retrieval',minutes:5,kind:'Interactive activity',description:'Apply evidence, inference, and assumption to the recruiter example without notes. No automated scoring.',student:'A short private response form with reference notes hidden.',activity:'exit',slide:13},
];
export function stageActivity(stage:string){const row=lessonPlan.find(x=>x.stage===stage);return {activity:row?.activity||'judgment',attempt:row?.attempt||'initial'};}
export function lessonSlides(material:any){return [
 {title:'Reconstructing arguments',eyebrow:'LESSON 1 · CENTRAL QUESTION',body:'Would you put your name on this AI-generated recommendation?'},
 {title:'Argument components',eyebrow:'CONCEPTS',terms:components.slice(0,4)},
 {title:'What connects evidence and conclusion?',eyebrow:'INFERENCE & ASSUMPTION',terms:components.slice(4),body:'Inferences and assumptions are not automatically errors.'},
 {title:'What does the reasoning depend on?',eyebrow:'WORKED EXAMPLE · ASSUMPTIONS & LIMITATION',body:'Two pilot users found an AI writing assistant helpful. Therefore, buy licenses for all 200 employees.\n\nWhich statement describes what was observed, and which goes beyond it?'},
 {title:'Reconstruct before evaluating',eyebrow:'WORKED EXAMPLE · REPAIR',body:material?.example+'\n\nEvidence → Assumption / inference → Conclusion'},
 {title:'CampusBridge',eyebrow:'THE RECOMMENDATION',body:material?.recommendation||'Publish materials to begin.'},
 ...(material?.sources||[]).map((s:any)=>({title:s.title,eyebrow:`SOURCE ${s.id}`,body:s.text})),
 {title:'Make the argument visible',eyebrow:'INDIVIDUAL ARGUMENT MAP',body:'Conclusion → two reasons and sources → what the evidence establishes → additional inference → consequential assumption.\n\nExplain why the conclusion depends on that assumption. “I cannot identify one” is a valid response.'},
 {title:'Compare interpretations',eyebrow:'PAIR DISCUSSION',body:'Identify one agreement and one difference. Use the packet to resolve the difference; record ambiguity if two readings remain plausible.'},
 {title:'Reconsider, then revise',eyebrow:'DEBRIEF & REVISION',body:'Where does reporting become inference?\n\nReconstruct the argument fairly before criticizing it. Explain why the assumption matters. What did you change, or why did you retain your interpretation?'},
 {title:'Retrieve without notes',eyebrow:'EXIT RETRIEVAL',body:'Two experienced recruiters found an applicant-summary tool easy to use. Therefore, first-time hiring managers will need no training.\n\nWhat was observed? What is inferred? What assumption connects them?'},
 {title:'Independent baseline — 15 minutes',eyebrow:'WORK INDEPENDENTLY',body:'Use only NotePilot A1–A4. Bullets are welcome. Identify the argument, evaluate its strengths and weaknesses, then give your recommendation, limitation, and next check. No discussion or reference materials.'},
];}
