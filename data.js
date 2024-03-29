import {
  MdOutlineSecurity,
  MdSupportAgent,
  MdOutlineCreditCard
} from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";

export const features = [
  {
    id: 1,
    text: "Access all supported compliance: PCI, ISO27001, NDPR",
    Icon: MdOutlineSecurity
  },
  {
    id: 2,
    text: "Dedicated onboarding support and pre-audit",
    Icon: MdSupportAgent
  },
  {
    id: 3,
    text: "Affordable monthly spaced payment",
    Icon: MdOutlineCreditCard
  },
  {
    id: 4,
    text: "Premium access to our audit partners",
    Icon: IoDiamondOutline
  }
];
export const steps = [
  {
    id: "01",
    image: "/onboarding.png",
    title: "Get Onboarded",
    description:
      "With SMARTCOMPLY'S technical compliance advisors, you can enjoy seamless onboarding and pre-audit of your infrastructure for FREE.This one time support helps you acquainted with the platform through a hand-held process by our advisors."
  },
  {
    id: "02",
    image: "/technology.png",
    title: "Connect Your Technology Stack",
    description:
      "Integrate all your technology stack into SMARTCOMPLY and allow the platform continuously monitor your infrastructure and collect evidence for compliance."
  },
  {
    id: "03",
    image: "/server-status.png",
    title: "Track The Status Of Your Compliance",
    description:
      "SMARTCOMPLY tracks the status of your compliance and security posture by continuously mapping all scans and evidence to all compliance regulations."
  },
  {
    id: "04",
    image: "/audit-notification.png",
    title: "Get Notified Of Audit",
    description:
      "With access to numerous partner auditors, based on your compliance status, smart comply tells you which audit you are ready for and manages your audit timeline."
  }
];

export const auditsProcesses = [
  {
    id: 1,
    image: "/pcidss.svg",
    name: "pcidss",
    description:
      "Ensure that your company is always in compliance with the Payment Card Industry Security Standards Council (PCI SSC) and give your customers full peace of mind as they carry out transactions on your platform."
  },
  {
    id: 2,
    image: "/soc2.svg",
    name: "soc2",
    description:
      "SOC 2 TYPE I & II: Manage your customer’s data based on the five “trust service principles”—security, availability, processing integrity, confidentiality and privacy. Easily generate up-to-date SOC 2 reports that establish trust in your brand."
  },
  {
    id: 3,
    image: "/gdpr.svg",
    name: "gdpr",
    description:
      "Our GDPR compliance functionality helps you prove that you are collecting and processing personal information from individuals who leave in the European Union (EU) ethically."
  },
  {
    id: 4,
    image: "/iso27001.svg",
    name: "iso27001",
    description:
      "Easily manage information risks, such as cyber-attacks, hacks, data leaks or theft by staying compliant at all times with the ISO 27001 international compliance standard."
  }
];

export const auditPartners = [
  { id: 1, image: "/infoprive-logo.svg", name: "infoprive" },
  { id: 2, image: "/techhive-logo.svg", name: "techhive" },
  { id: 3, image: "/platview-logo.svg", name: "platview" }
];
