import type { SectionId } from 'src/Data/types/SectionData';
import { useData } from 'src/Data/hooks/useData';
import type { ContentType } from 'src/Data/types/ContentData';
import { Heading } from 'src/Content/Heading';
import { Contact } from 'src/Content/Contact';
import { Summary } from 'src/Content/Summary';
import { Experience } from 'src/Content/Experience';
import { Education } from 'src/Content/Education';
import { Skills } from 'src/Content/Skills';
import { Projects } from 'src/Content/Projects';
import { Certificates } from 'src/Content/Certificates';
import { Volunteering } from 'src/Content/Volunteering';
import { Referees } from 'src/Content/Referees';

type ContentById = { [K in keyof ContentType]: ContentType[K] };

export const Content = ({ contentId }: { contentId: SectionId }) => {
    const { data } = useData<ContentById>(
        'src/Data/json/content_anikaszuppa.json',
    );

    if (!data) return null;

    switch (contentId) {
        case 'heading':
            return <Heading data={data.heading} />;
        case 'contact':
            return <Contact data={data.contact} />;
        case 'summary':
            return <Summary data={data.summary} />;
        case 'skills':
            return <Skills data={data.skills} />;
        case 'experience':
            return <Experience data={data.experience} />;
        case 'education':
            return <Education data={data.education} />;
        case 'projects':
            return <Projects data={data.projects} />;
        case 'certificates':
            return <Certificates data={data.certificates} />;
        case 'volunteering':
            return <Volunteering data={data.volunteering} />;
        case 'referees':
            return <Referees data={data.referees} />;
        default:
            return null;
    }
};
