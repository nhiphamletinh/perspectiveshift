export const stages=['Waiting','Baseline','Initial judgment','Concepts','Argument mapping','Break','Comparison','Debrief','Revision','Exit retrieval','Closed'];
export const mapFields=['Main conclusion','Supporting reason 1','Source for reason 1','Supporting reason 2','Source for reason 2','What the sources directly establish','What the recommendation additionally infers','One unstated assumption','Why the conclusion depends on that assumption'];
export const judgmentFields=['Decision','Main reason'];
export const practices=[
  {
    "title": "Retrieve and distinguish",
    "text": "Three beta testers said a dashboard was easy to navigate. Therefore, new customers will need no onboarding.",
    "instructions": "Without notes, explain evidence versus inference. Identify the conclusion and an assumption. Submit your independent response before viewing feedback and revising the claim.",
    "fields": [
      "Explain evidence versus inference in your own words",
      "Can an assumption be reasonable? Explain briefly",
      "Identify the evidence, conclusion, and one assumption"
    ],
    "feedback": "The observation concerns three beta testers. The conclusion assumes comparable familiarity and onboarding needs among new customers.",
    "repair": "Revise the claim without discarding the useful feedback from the beta testers."
  },
  {
    "title": "CaptionAid",
    "text": "CaptionAid should replace supervisor review because most interns found its drafts useful.\n\nQ1: Three of four marketing interns found CaptionAid drafts useful.\nQ2: Every draft was reviewed and edited by a supervisor.\nQ3: Editing time and comparative final quality were not measured.",
    "instructions": "Map the argument, then identify the assumption. Work independently before viewing the prepared explanation.",
    "fields": [
      "Conclusion",
      "Supporting reason and source",
      "What the evidence directly establishes",
      "Additional inference",
      "Consequential assumption"
    ],
    "feedback": "Usefulness with review does not establish adequacy without review. The recommendation assumes the drafts are adequate when support present during the trial is removed.",
    "repair": "Revise your map or explain why you would retain it."
  }
];
export const seed={...{
  "title": "CampusBridge",
  "instructions": "You are reviewing a recommendation for CampusBridge, a fictional internship platform seeking to improve registration completion. Read the recommendation and P1–P4, then complete the worksheet individually before comparing with a partner.",
  "recommendation": "Require LinkedIn sign-in for every applicant next week. Five of six interviewees preferred it, showing that students generally want this approach. Four completed the prototype without help, so mandatory LinkedIn sign-in will improve registration completion. The choice is either mandatory LinkedIn sign-in or continued registration friction.",
  "sources": [
    {
      "id": "P1",
      "title": "Interview preferences",
      "text": "Six student ambassadors were interviewed. All had LinkedIn accounts. Five preferred LinkedIn sign-in; one preferred email."
    },
    {
      "id": "P2",
      "title": "Prototype observations",
      "text": "Four interviewees completed a LinkedIn prototype without help. Email sign-in was not tested. Real-world completion was not measured."
    },
    {
      "id": "P3",
      "title": "An applicant’s access question",
      "text": "One prospective applicant asked whether registration was possible without LinkedIn. This does not establish how common the issue is."
    },
    {
      "id": "P4",
      "title": "An available alternative",
      "text": "The team can test optional LinkedIn sign-in while retaining email. Its priority is successful registration."
    }
  ],
  "reference": "A conclusion is the claim an argument asks us to accept. Reasons support that claim. Evidence records observations; an inference extends beyond them. An assumption is an unstated claim on which the reasoning depends. An assumption can be reasonable, but its relevance and consequences should still be examined.\n\nReconstruct the argument fairly before evaluating it. Separate what the sources directly establish from what the recommendation additionally infers. Explain why your chosen assumption matters to the conclusion.",
  "example": "AI writing-assistant worked example\n\nObservation: two users reported usefulness.\n\nConclusion: purchase licenses for everyone.\n\nAssumptions: these users and tasks represent wider needs; benefits justify costs.\n\nLimitation: usefulness does not establish organization-wide value.\n\nRepair: trial across relevant roles and examine editing requirements and cost before expansion.",
  "notes": "Model the AI writing-assistant example before learners begin the CampusBridge case.\n\nAsk where reporting becomes inference. Reconstruct the argument fairly before criticizing it. Accept equivalent wording; require learners to explain why an assumption matters.\n\nPair discussion: Identify one agreement and one difference. Use the packet to resolve the difference; record ambiguity if two readings remain plausible.\n\nKeep initial judgments private. Share responses deliberately during comparison, then invite learners to revise or explain why they retain their interpretation."
},practices};
