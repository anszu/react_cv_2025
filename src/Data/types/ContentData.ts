export type ContentData = ContentType[];

export interface ContentType {
    heading: {
        title: string;
        subtitle: string;
    };
    contact: {
        name: string;
        phone: string;
        links: { label: string; url: string }[];
    };
    summary: string;
    skills: { label: string; text: string }[];
    experience: {
        company: string;
        position: string;
        location: string;
        period: string;
        tasks: string[];
    }[];
    education: {
        school: string;
        degree: string;
        year: string;
        link: string;
        location: string;
    }[];
    projects: {
        name: string;
        description: string;
        link: string;
    }[];
    certificates: {
        name: string;
        year: string;
    }[];
    volunteering: {
        organization: string;
        role: string;
        period: string;
        tasks: string[];
    }[];
    referees: string;
}
