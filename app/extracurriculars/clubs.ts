import type { Organization } from "../components/OrganizationCard";

export const clubs: Organization[] = [
  {
    name: "Society of Hispanic Professional Engineers (SHPE)",
    icon: "/clubs/shpe.png",
    positions: [
      {
        title:
          "Integration Lead, RocketSHPE Payload Integration Project (SHPE × KXR)",
        dates: "September 2025 – May 2026",
        bullets: [
          "Led a team of 4 on the mechanical and systems integration between SHPE's payload and KXR's rocket to ensure structural and electrical compatibility.",
          "Proposed dual ejection mechanisms that allowed both the nosecone and payload platforms to deploy independently without spatial interference.",
          "Coordinated cross-organization design reviews to identify integration risks and maintain alignment on interface dimensions, connectors, and deployment timing.",
        ],
      },
      {
        title: "Logistics Director",
        dates: "August 2025 – June 2026",
        bullets: [
          "Researched and tracked university-wide events in advance, preventing scheduling conflicts and boosting event turnout by 20+%.",
          "Assisted the Vice President in aligning event execution with organizational goals, streamlining operations across multiple cabinets.",
          "Managed correspondence by prioritizing urgent items, routing inquiries to the right cabinet, and tracking action items through completion, reducing response delays.",
        ],
      },
    ],
  },
  {
    name: "Institute of Industrial and Systems Engineers (IISE)",
    icon: "/clubs/iise.png",
    positions: [
      {
        title: "Socials Director",
        dates: "August 2026 – Present",
        bullets: [
          "Planned and hosted social events for IISE members, including icebreaker activities for meetings of 50+ attendees, to build community and increase member engagement.",
          "Organized ~7 social events, coordinating venues, budgets, and logistics with the executive board.",
        ],
      },
    ],
  },
  {
    name: "Knight Hacks",
    icon: "/clubs/knight-hacks.png",
    positions: [
      {
        title: "Mentee, Knight Hacks Mentorship Program",
        dates: "September 2026 – Present",
        bullets: [
          "Selected as 1 of 40 students from 200+ applicants for Knight Hacks' mentorship program, focused on technical growth and career development.",
          "Participated in hands-on workshops and activities covering web development and backend development.",
        ],
      },
    ],
  },
];
