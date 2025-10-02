export interface ContentData {
    heading: {
        title: string;
        subtitle: string;
    };
    contact: {
        name: string;
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    };
    summary: string;
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
    }[];
    skills: string[];
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
