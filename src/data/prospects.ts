export type Prospect = {
  slug: string;
  company: string;
  logoUrl?: string;
  contactFirstName?: string;
  intro: string;
  icp: {
    summary: string;
    points: string[];
  };
  session: {
    topic: string;
    hook: string;
    format: string;
  };
  accounts: string[];
  projection: {
    attendees: string;
    pipeline: string;
    icpRate: string;
  };
};

export const prospects: Record<string, Prospect> = {
  feedly: {
    slug: 'feedly',
    company: 'Feedly',
    logoUrl: 'https://www.vectorlogo.zone/logos/feedly/feedly-ar21.svg',
    contactFirstName: 'Jaagriti',
    intro: "Here's the custom plan I'd run to fill Feedly's next session with the buyers your sales team actually wants in the room.",
    icp: {
      summary: "Mid-market and enterprise threat intelligence buyers: security analysts, threat intel leads, and CISOs at companies that need real-time OSINT signal for their SOC.",
      points: [
        "Director or Head of Threat Intelligence at companies with 500 to 10,000 employees",
        "SOC managers evaluating threat intel platforms in the next 6 months",
        "VP Security Operations at orgs with mature MDR/XDR stacks",
        "Buyers actively researching alternatives to Recorded Future, ZeroFox, or Flashpoint",
      ],
    },
    session: {
      topic: "From Signal to Decision: How Top SOCs Cut Threat Investigation Time by 60%",
      hook: "Lead with a live demo of an OSINT-driven threat brief that would normally take an analyst 4 hours, done in 6 minutes.",
      format: "45-min webinar + 15-min live Q&A. Recorded segment goes into nurture, raw cut becomes 8 short-form ads.",
    },
    accounts: [
      "Cloudflare", "CrowdStrike", "Datadog", "Snowflake", "Atlassian",
      "Shopify", "Twilio", "DocuSign", "Asana", "MongoDB",
    ],
    projection: {
      attendees: "60-80",
      pipeline: "$420k-$600k",
      icpRate: "92%+",
    },
  },
  panopto: {
    slug: 'panopto',
    company: 'Panopto',
    logoUrl: 'https://www.panopto.com/wp-content/uploads/2026/04/panopto-logo-wintergreen.svg',
    contactFirstName: 'Olivia',
    intro: "Here's the custom plan I'd run to fill Panopto's next session with the L&D and enterprise training buyers your sales team actually wants in the room.",
    icp: {
      summary: "Enterprise L&D and internal knowledge leaders: heads of learning, training directors, and internal comms VPs at companies scaling expert knowledge across thousands of employees.",
      points: [
        "VP or Head of Learning & Development at companies with 1,000+ employees",
        "Directors of Enterprise Training evaluating video knowledge platforms in the next 6 months",
        "Heads of Internal Communications at distributed orgs scaling onboarding and upskilling",
        "L&D leaders frustrated with low engagement on their current LMS or video stack",
      ],
    },
    session: {
      topic: "Beyond the LMS: How Top L&D Teams Are Scaling Expert Knowledge Without Adding Headcount",
      hook: "Open with a live teardown of a 40-hour quarterly training program rebuilt as a 30-minute on-demand session, with retention metrics from a Fortune 500 case study.",
      format: "45-min session + 15-min live Q&A. Recorded segment fuels nurture, raw cut becomes 8 short-form ads for paid retargeting.",
    },
    accounts: [
      "Salesforce", "Deloitte", "Accenture", "AT&T", "JPMorgan Chase",
      "Walmart", "Cisco", "IBM", "Bank of America", "Lockheed Martin",
    ],
    projection: {
      attendees: "80-110",
      pipeline: "$500k-$750k",
      icpRate: "90%+",
    },
  },
};
