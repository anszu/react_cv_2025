export type SectionData = SectionType[];

export type SectionId =
    | 'heading'
    | 'contact'
    | 'summary'
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
