export type SectionData = SectionType[];

export type SectionId =
    | 'heading'
    | 'contact'
    | 'summary'
    | 'tldr'
    | 'experience'
    | 'education'
    | 'skills'
    | 'projects'
    | 'certificates'
    | 'volunteering'
    | 'referees';

export interface SectionType {
    id: SectionId;
    title: string;
    icon: string;
}
