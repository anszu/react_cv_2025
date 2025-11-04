import { SectionId } from 'src/Data/types/SectionData';
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
import { LoadingSpinner } from 'src/shared/LoadingSpinner';

export const Content = ({ sectionId }: { sectionId: SectionId }) => {
    const { contentData: data, contentLoading: loading } = useDataContext<{
        contentData?: ContentType;
        contentLoading: boolean;
    }>();

    if (!data) return null;

    if (loading) {
        return (
            <div className="flex w-full justify-center">
                <LoadingSpinner />
            </div>
        );
    }

    switch (sectionId) {
        case SectionId.HEADING:
            return <Heading data={data.heading} />;
        case SectionId.CONTACT:
            return <Contact data={data.contact} />;
        case SectionId.SUMMARY:
            return <Summary data={data.summary} />;
        case SectionId.SKILLS:
            return <Skills data={data.skills} />;
        case SectionId.EXPERIENCE:
            return <Experience data={data.experience} />;
        case SectionId.EDUCATION:
            return <Education data={data.education} />;
        case SectionId.PROJECTS:
            return <Projects data={data.projects} />;
        case SectionId.VOLUNTEERING:
            return <Volunteering data={data.volunteering} />;
        case SectionId.REFEREES:
            return <Referees data={data.referees} />;
        default:
            return null;
    }
};
