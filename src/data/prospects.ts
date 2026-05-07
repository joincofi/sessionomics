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
};
