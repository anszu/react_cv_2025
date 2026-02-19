import { SectionId } from 'src/Data/types/SectionData';
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
import { Match } from 'src/Match/Match';
import { ContactSchema } from 'src/Data/schemas/ContactSchema';
import { EducationSchema } from 'src/Data/schemas/EducationSchema';
import { ExperienceSchema } from 'src/Data/schemas/ExperienceSchema';
import { HeadingSchema } from 'src/Data/schemas/HeadingSchema';
import { ProjectsSchema } from 'src/Data/schemas/ProjectsSchema';
import { RefereesSchema } from 'src/Data/schemas/RefereesSchema';
import { SkillsSchema } from 'src/Data/schemas/SkillsSchema';
import { SummarySchema } from 'src/Data/schemas/SummarySchema';
import { VolunteeringSchema } from 'src/Data/schemas/VolunteeringSchema';
import type { ContentData } from 'src/Data/types/ContentData';

export const Content = ({ sectionId }: { sectionId: SectionId }) => {
    const { contentData: data, contentLoading: loading } = useDataContext<{
        contentData?: ContentData;
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
            const resultHeading = HeadingSchema.safeParse(data.heading);
            if (!resultHeading.success) return null;
            return <Heading data={resultHeading.data} />;
        case SectionId.CONTACT:
            const resultContact = ContactSchema.safeParse(data.contact);
            if (!resultContact.success) return null;
            return <Contact data={resultContact.data} />;
        case SectionId.SUMMARY:
            const resultSummary = SummarySchema.safeParse(data.summary);
            if (!resultSummary.success) return null;
            return <Summary data={resultSummary.data} />;
        case SectionId.SKILLS:
            const resultSkills = SkillsSchema.safeParse(data.skills);
            if (!resultSkills.success) return null;
            return <Skills data={resultSkills.data} />;
        case SectionId.EXPERIENCE:
            const resultExperience = ExperienceSchema.safeParse(
                data.experience,
            );
            if (!resultExperience.success) return null;
            return <Experience data={resultExperience.data} />;
        case SectionId.EDUCATION:
            const resultEducation = EducationSchema.safeParse(data.education);
            if (!resultEducation.success) return null;
            return <Education data={resultEducation.data} />;
        case SectionId.PROJECTS:
            const resultProjects = ProjectsSchema.safeParse(data.projects);
            if (!resultProjects.success) return null;
            return <Projects data={resultProjects.data} />;
        case SectionId.VOLUNTEERING:
            const resultVolunteering = VolunteeringSchema.safeParse(
                data.volunteering,
            );
            if (!resultVolunteering.success) return null;
            return <Volunteering data={resultVolunteering.data} />;
        case SectionId.REFEREES:
            const resultReferees = RefereesSchema.safeParse(data.referees);
            if (!resultReferees.success) return null;
            return <Referees data={resultReferees.data} />;
        case SectionId.MATCH:
            return <Match />;
        default:
            return null;
    }
};
