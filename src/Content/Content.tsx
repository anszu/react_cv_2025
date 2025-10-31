import type { SectionId } from 'src/Data/types/SectionData';
import type { ContentType } from 'src/Data/types/ContentData';
import { Heading } from 'src/Content/Heading';
import { Contact } from 'src/Content/Contact';
import { Summary } from 'src/Content/Summary';
import { Experience } from 'src/Content/Experience';
import { Education } from 'src/Content/Education';
import { Skills } from 'src/Content/Skills';
import { Projects } from 'src/Content/Projects';
import { Volunteering } from 'src/Content/Volunteering';
import { Referees } from 'src/Content/Referees';
import { useDataContext } from 'src/Data/hooks/useDataContext';

export const Content = ({ contentId }: { contentId: SectionId }) => {
    const { contentData: data } = useDataContext<{
        contentData?: ContentType;
    }>();

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
        case 'volunteering':
            return <Volunteering data={data.volunteering} />;
        case 'referees':
            return <Referees data={data.referees} />;
        default:
            return null;
    }
};
