export type SectionData = SectionType[];

export const SectionId = {
    HEADING: 'heading',
    CONTACT: 'contact',
    SUMMARY: 'summary',
    EXPERIENCE: 'experience',
    EDUCATION: 'education',
    SKILLS: 'skills',
    PROJECTS: 'projects',
    VOLUNTEERING: 'volunteering',
    REFEREES: 'referees',
    MATCH: 'match',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export interface SectionType {
    id: SectionId;
    title: string;
    icon: string;
}
