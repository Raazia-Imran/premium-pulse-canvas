import {
  Activity,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cable,
  FlaskConical,
  GraduationCap,
  HardHat,
  Leaf,
  ScanLine,
  ShieldCheck,
  Waves,
  Wrench,
} from "lucide-react";

export const services = [
  { title: "Non-Destructive Testing", short: "NDT", description: "Advanced inspection methods that reveal defects without compromising the asset.", icon: ScanLine },
  { title: "Lifting Equipment Inspection", short: "LEEA", description: "Competent examination and certification for cranes, hoists, slings, and lifting accessories.", icon: Wrench },
  { title: "Pipeline Inspection", short: "PIPE", description: "Integrity assessment across construction, operation, maintenance, and rehabilitation.", icon: Cable },
  { title: "QA / QC Services", short: "QA/QC", description: "Independent quality assurance, vendor surveillance, and project inspection support.", icon: BadgeCheck },
  { title: "HSE Services", short: "HSE", description: "Practical systems, audits, and training that strengthen safety culture and compliance.", icon: HardHat },
  { title: "Technical Training", short: "TRAIN", description: "Industry-focused learning for inspection, safety, quality, and technical competence.", icon: GraduationCap },
];

export const industries = [
  { title: "Oil & Gas", description: "Upstream, midstream, and downstream asset assurance.", icon: Waves },
  { title: "Power & Energy", description: "Inspection support for generation and energy infrastructure.", icon: Activity },
  { title: "Petrochemical", description: "Integrity services for complex process facilities.", icon: FlaskConical },
  { title: "Infrastructure", description: "Quality and safety oversight for critical projects.", icon: Building2 },
  { title: "Manufacturing", description: "Reliable plant, equipment, and vendor inspection.", icon: BriefcaseBusiness },
  { title: "Renewables", description: "Assurance for evolving clean-energy assets.", icon: Leaf },
];

export const certifications = ["ISO 17020", "LEEA Certified", "IMS Certified", "PSQCA"];
export const memberships = ["AWS", "ASTM", "ASNT", "ASQ"];

export const pages = {
  services: {
    eyebrow: "Capabilities",
    title: "Inspection intelligence for critical assets.",
    intro: "From fabrication to operation, HosH Integrity provides independent technical assurance that helps teams control risk, prove compliance, and extend asset life.",
  },
  industries: {
    eyebrow: "Industry coverage",
    title: "Built for environments where failure is not an option.",
    intro: "Our multidisciplinary teams support operators, contractors, and asset owners across high-consequence industries and complex project phases.",
  },
  training: {
    eyebrow: "Technical training",
    title: "Competence that performs in the field.",
    intro: "Practical programs connect recognized standards with real inspection, safety, and quality challenges—helping technical teams work with confidence.",
  },
  certifications: {
    eyebrow: "Trust infrastructure",
    title: "Independent assurance, backed by recognized standards.",
    intro: "HosH Integrity operates through established management systems, inspection accreditation, and active professional memberships.",
  },
  about: {
    eyebrow: "About HosH",
    title: "A specialist partner for safer, more reliable operations.",
    intro: "HosH Integrity brings inspection, engineering, quality, and safety disciplines together around one clear purpose: preventing failure.",
  },
};

export const principles = [
  { number: "01", title: "Independent judgement", body: "Clear technical decisions grounded in evidence and applicable codes." },
  { number: "02", title: "Field-ready expertise", body: "Specialists who understand operational constraints, not only theory." },
  { number: "03", title: "Documented assurance", body: "Traceable inspection records and practical recommendations." },
];

export const contactEmail = "info@hoshint.com";