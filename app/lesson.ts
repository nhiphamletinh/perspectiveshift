export const components = [
  ['Claim','A statement that can be examined or challenged'],
  ['Conclusion','The main judgment the argument asks the reader to accept'],
  ['Reason','A consideration offered in support of a conclusion'],
  ['Evidence','Information used to support or test a claim'],
  ['Inference','A move from information to a further conclusion'],
  ['Assumption','A stated or unstated premise on which the reasoning depends'],
];
export const comparisonFields=['One agreement','One difference','Use the packet to resolve the difference, or record remaining ambiguity'];
export const exitFields=['Explain evidence versus inference in your own words, without notes'];
export const lessonPlan=[
 {stage:'Baseline',title:'Independent baseline',minutes:15,kind:'External assessment',description:'Complete Assessment A before instruction or discussion. Assessment A has not been supplied, so use your external assessment materials. The app does not administer or score this step.',student:'A holding screen directs students to the external assessment. Lesson content stays out of this screen.',slide:0},
 {stage:'Initial judgment',title:'Hook and initial judgment',minutes:10,kind:'Interactive activity',description:'Read CampusBridge. Privately choose accept, qualify, or investigate; give a reason and identify what you would check.',student:'CampusBridge and sources P1–P4 beside a private judgment form.',activity:'judgment',slide:5},
 {stage:'Concepts',title:'Concepts and worked example',minutes:15,kind:'Teaching slides',description:'Introduce claim, conclusion, reason, evidence, inference, and assumption. Model the AI writing-assistant example.',student:'Students follow the same slide as the facilitator. Their earlier responses are preserved.',slide:1},
 {stage:'Argument mapping',title:'Individual argument map',minutes:15,kind:'Interactive activity',description:'Individually map the conclusion, two reasons and sources, evidence, inference, and a consequential assumption.',student:'The source packet stays beside the complete argument-mapping form. Drafts autosave.',activity:'map',slide:10},
 {stage:'Break',title:'Screen break',minutes:5,kind:'Break',description:'Pause for a screen break. No countdown pressure. All saved work is preserved.',student:'A break screen; the next activity appears when you start it.',slide:0},
 {stage:'Comparison',title:'Pair comparison',minutes:15,kind:'Interactive activity',description:'Explain maps with a partner. Identify one agreement and one difference. Use the packet to resolve the difference; record ambiguity if two readings remain plausible.',student:'Their own map, explicitly shared anonymous maps, and a form to record the comparison.',activity:'comparison',slide:11},
 {stage:'Revision',title:'Instructor debrief and revision',minutes:10,kind:'Interactive activity',description:'Examine selected maps, then revise individually. Ask where reporting becomes inference and why an assumption matters.',student:'A map prefilled from the original, plus a revision explanation. The initial submission stays intact.',activity:'map',attempt:'revision',slide:12},
 {stage:'Exit retrieval',title:'Exit retrieval',minutes:5,kind:'Interactive activity',description:'Without notes, explain evidence versus inference in your own words. No automated scoring.',student:'A short private response form with reference notes hidden.',activity:'exit',slide:13},
];
export function stageActivity(stage:string){const row=lessonPlan.find(x=>x.stage===stage);return {activity:row?.activity||'judgment',attempt:row?.attempt||'initial'};}
export function lessonSlides(material:any){return [
 {title:'Reconstructing arguments',eyebrow:'LESSON 1 · CENTRAL QUESTION',body:'What is this recommendation asking me to believe or do, and why?'},
 {title:'Argument components',eyebrow:'CONCEPTS',terms:components},
 {title:'From usefulness to a purchase',eyebrow:'WORKED EXAMPLE · OBSERVATION & CONCLUSION',body:(material?.example||'').split('\n\n').slice(1,3).join('\n\n')},
 {title:'What does the reasoning depend on?',eyebrow:'WORKED EXAMPLE · ASSUMPTIONS & LIMITATION',body:(material?.example||'').split('\n\n').slice(3,5).join('\n\n')},
 {title:'Repair the recommendation',eyebrow:'WORKED EXAMPLE · REPAIR',body:(material?.example||'').split('\n\n').slice(5).join('\n\n')},
 {title:'CampusBridge',eyebrow:'THE RECOMMENDATION',body:material?.recommendation||'Publish materials to begin.'},
 ...(material?.sources||[]).map((s:any)=>({title:s.title,eyebrow:`SOURCE ${s.id}`,body:s.text})),
 {title:'Make the argument visible',eyebrow:'INDIVIDUAL ARGUMENT MAP',body:'Conclusion → two reasons and sources → what the evidence establishes → additional inference → consequential assumption.\n\nExplain why the conclusion depends on that assumption. “I cannot identify one” is a valid response.'},
 {title:'Compare interpretations',eyebrow:'PAIR DISCUSSION',body:'Identify one agreement and one difference. Use the packet to resolve the difference; record ambiguity if two readings remain plausible.'},
 {title:'Reconsider, then revise',eyebrow:'DEBRIEF & REVISION',body:'Where does reporting become inference?\n\nReconstruct the argument fairly before criticizing it. Explain why the assumption matters. What did you change, or why did you retain your interpretation?'},
 {title:'Retrieve without notes',eyebrow:'EXIT RETRIEVAL',body:'Explain evidence versus inference in your own words, without notes.'},
];}
