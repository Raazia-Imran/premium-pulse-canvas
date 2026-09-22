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
  { title: "General Inspection Services", short: "GENERAL", description: "Construction QA/QC supervision, expediting, vendor evaluation, shipment inspection, technical staffing, rack inspection, and design validation.", icon: BadgeCheck },
  { title: "Welding Inspection", short: "WELD", description: "WPS preparation, WPS and WQR qualification inspection, visual inspection, and interpretation of weld-joint radiographic film.", icon: ScanLine },
  { title: "Non-Destructive Testing", short: "NDT", description: "Conventional and advanced testing delivered by competent personnel using modern inspection technology.", icon: Activity },
  { title: "API & Asset Inspection", short: "API", description: "Pressure vessels, storage tanks, plant piping, line pipe, pipelines, boilers, and associated integrity requirements.", icon: Cable },
  { title: "QMS & HSE", short: "QMS/HSE", description: "System gap analysis, SOPs, project QA systems, certification support, HSE audits, risk assessment, and construction supervision.", icon: HardHat },
  { title: "Technical Training", short: "HQTC", description: "Lead auditor, welding, HSE, and QA/QC programmes designed to improve safety, reliability, and operational efficiency.", icon: GraduationCap },
];

export const industries = [
  { title: "Oil & Gas", description: "Quality and inspection support across oil and gas construction and operations.", icon: Waves },
  { title: "Petrochemical", description: "QA/QC, inspection, and integrity support for petrochemical projects and facilities.", icon: FlaskConical },
  { title: "Power", description: "Technical inspection and quality supervision for power-sector construction projects.", icon: Activity },
  { title: "Civil Construction", description: "Quality-control supervision and civil-structure integrity inspection.", icon: Building2 },
];

export const certifications = ["IMS (ISO 9001, 14001, 18001) Certified", "ISO 17020 Certified", "PSQCA Registered", "LEEA Certified"];
export const memberships = ["Member of American Welding Society", "Member of ASTM", "Corporate Partner of ASNT", "Corporate Member of ASQ"];

export const onlineSystems = ["Online Certificate Verification System", "Online Project Dossier Management System", "Online Pipeline QC Mapping System", "Online Technical Library for HosH Staff", "Online Document & Data Control System"];

export const serviceDetails = [
  { title: "General services", items: ["Construction QA/QC Supervision", "Expediting", "Lifting Equipment Certification", "Pre & Post Shipment Inspection", "Vendor Evaluation", "Technical Staffing", "Painting and Coating Inspection", "Warehouse Rack Inspection", "Design Review and Validation", "Pipeline QC Mapping", "Civil Structure Integrity Inspection", "Electrical System Integrity Assessment"] },
  { title: "Welding inspection", items: ["Preparation of WPS", "TPI of WPS & WQR Qualification", "Visual Inspection of Welding Process", "Interpretation of Weld Joint RT Film"] },
  { title: "Non-destructive testing", items: ["Magnetic Particle Inspection (MPI)", "Fluorescent Magnetic Particle Inspection (FMPI)", "Dye Penetrant Testing (DPT)", "Ultrasonic Flaw Detection (UFD)", "Ultrasonic Thickness Gauging (UTG)", "Holiday Testing", "Vacuum Box Testing", "Boroscopy / Videoscopy", "Hardness Testing", "Time of Flight Diffraction (TOFD)", "Phased Array (PA)", "Magnetic Flux Leakage (MFL)", "Positive Material Identification (PMI)", "Hydrostatic Testing", "Digital Radiographic Testing", "Gas Leak Detection"] },
  { title: "API & integrity inspection", items: ["Pressure Vessel Inspection", "Storage Tank Inspection", "Plant Piping Inspection", "Line Pipe Inspection", "Pipeline Inspection", "Boiler Inspection", "Pipeline Integrity Assessment"] },
  { title: "QMS & HSE", items: ["System Gap Analysis", "Preparation of SOPs", "Preparation of Project QA System", "QMS System Certification", "HSE Audits", "Task Risk Assessment", "Construction HSE Supervision"] },
];

export const trainingPrograms = [
  { title: "Certified lead auditor courses", items: ["ISO 9001 — 5 days", "ISO 14001 — 5 days", "OHSAS 18001 — 5 days", "ISO/IEC 27001 — 5 days", "ISO 22000 — 5 days"] },
  { title: "Welding training", items: ["Professional Welding Inspector — 5 days", "Welding Inspection & Control — 2 days", "Pipeline Welding & Control — 1 day", "WPS and WQT Qualification — 1 day", "AWS Welding Symbols — 1 day", "Attributes of Welding Inspector — 1 day"] },
  { title: "QA/QC training", items: ["Project QA/QC Management — 2 days", "Pipeline QC Mapping — 1 day", "Hydrotesting of CC Pipelines — 1 day", "Preparation of Project ITP — 1 day"] },
  { title: "HSE training", items: ["Safe Operation of Industrial Trucks", "Safe Operation of Mobile and Overhead Cranes", "Safety Awareness for Supervisors", "Scaffolding Inspection and Erection", "Electrical Safety", "Rigging & Slinging", "Work at Height", "Basic Fire Safety", "Confined Space", "Scaffolding Safety"] },
];

export const pages = {
  services: {
    eyebrow: "Capabilities",
    title: "A complete spectrum of inspection services.",
    intro: "HosH supports the safe operation of industrial assets through quality assurance supervision, expediting, audits, supplier evaluation, conventional and advanced NDT, condition-based monitoring, and training.",
  },
  industries: {
    eyebrow: "Industry coverage",
    title: "Built for environments where failure is not an option.",
    intro: "HosH provides inspection and quality-control support for oil and gas, petrochemical, power, and civil construction projects.",
  },
  training: {
    eyebrow: "Technical training",
    title: "Competence that performs in the field.",
    intro: "HosH Quality Training Center provides training and skills to improve the safety, reliability, and efficiency of operations and support compliance with applicable standards.",
  },
  certifications: {
    eyebrow: "Trust infrastructure",
    title: "Independent assurance, backed by recognized standards.",
    intro: "HosH Integrity operates through established management systems, inspection accreditation, and active professional memberships.",
  },
  about: {
    eyebrow: "About HosH",
    title: "A specialist partner for safer, more reliable operations.",
    intro: "HosH is committed to delivering a higher level of reliability through capable, certified, well-trained, and well-equipped personnel supported by experienced leaders.",
  },
};

export const principles = [
  { number: "01", title: "Vision", body: "Our vision is to be the trend-maker company in the capacity of HSE and quality management services." },
  { number: "02", title: "Mission", body: "HosH’s mission is to achieve excellence in HSE and quality management services through strict adherence to its code of ethics, training and development, competent resources, and technology." },
  { number: "03", title: "Our formula for success", body: "Be highly capable locally, with certified, well-trained, and well-equipped personnel supported by trained, experienced leaders." },
];

export const contactEmail = "info@hoshint.com";