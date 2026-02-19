import type { ContactData } from 'src/Data/schemas/ContactSchema';
import type { HeadingData } from 'src/Data/schemas/HeadingSchema';
import type { SummaryData } from 'src/Data/schemas/SummarySchema';
import type { SkillsData } from 'src/Data/schemas/SkillsSchema';
import type { ExperienceData } from 'src/Data/schemas/ExperienceSchema';
import type { EducationData } from 'src/Data/schemas/EducationSchema';
import type { ProjectsData } from 'src/Data/schemas/ProjectsSchema';
import type { VolunteeringData } from 'src/Data/schemas/VolunteeringSchema';
import type { RefereesData } from 'src/Data/schemas/RefereesSchema';

export interface ContentData {
    heading?: HeadingData;
    contact?: ContactData;
    summary?: SummaryData;
    skills?: SkillsData;
    experience?: ExperienceData;
    education?: EducationData;
    projects?: ProjectsData;
    volunteering?: VolunteeringData;
    referees?: RefereesData;
}
