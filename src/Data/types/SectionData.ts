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
    | 'referees'
    | 'match';

export interface SectionType {
    id: SectionId;
    title: string;
    icon: string;
}
