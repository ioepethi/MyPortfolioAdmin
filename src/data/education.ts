export type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  major: string;
};

export const education: Education[] = [
  {
    id: "ustp",
    degree: "Bachelor of Science: Information Technology",
    institution: "University of Science and Technology of Southern Philippines",
    period: "Mar 2020 – May 2024",
    major: "Database Management",
  },
];

export type Language = {
  name: string;
  proficiency: string;
};

export const languages: Language[] = [
  { name: "English", proficiency: "Conversational" },
  { name: "Cebuano", proficiency: "Native" },
  { name: "Filipino", proficiency: "Native" },
];

export const license = {
  name: "Dubai Municipality PCO License",
};
