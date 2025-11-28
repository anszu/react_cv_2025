import { http, HttpResponse } from 'msw';
import { SectionId } from 'src/Data/types/SectionData';

export const handlers = [
    http.get(/content(?:_.*)?\.json$/, () => {
        return HttpResponse.json({
            [SectionId.HEADING]: {
                title: 'Frontend Developer',
                subtitle: 'Specialized in React & Modern JavaScript',
            },
            [SectionId.CONTACT]: {
                name: 'Jane Doe',
                phone: '+49 123 456 789',
                links: [
                    { label: 'Email', url: 'mailto:jane.doe@email.com' },
                    {
                        label: 'LinkedIn',
                        url: 'https://linkedin.com/in/janedoe',
                    },
                    { label: 'GitHub', url: 'https://github.com/janedoe' },
                ],
            },
            [SectionId.SUMMARY]:
                'Passionate frontend developer with 5+ years building responsive apps with React, TypeScript and modern tooling.',
            [SectionId.SKILLS]: [
                {
                    label: 'Skills',
                    text: 'HTML5, CSS3 (SASS, SCSS, CSS Modules)',
                },
                {
                    label: 'More',
                    text: 'Willing to learn and adapt quickly to new requiements.',
                },
            ],
            [SectionId.EXPERIENCE]: [
                {
                    company: 'Tech Solutions Ltd.',
                    position: 'Frontend Developer',
                    link: 'www.techsolutions.com',
                    description: 'Provider fro great tech solutions.',
                    location: 'Berlin, Germany',
                    period: '2021 – Present',
                    tasks: [
                        'Developed scalable React apps',
                        'Led component library work',
                        'Improved performance',
                    ],
                },
                {
                    company: 'Global Web Agency',
                    position: 'Web Developer',
                    location: 'Remote',
                    period: '2017 – 2021',
                    tasks: [
                        'Built client websites',
                        'Implemented accessibility best practices',
                    ],
                },
            ],
            [SectionId.EDUCATION]: [
                {
                    school: 'University of Example',
                    location: 'Germany',
                    link: 'https://www.example.com',
                    degree: 'MSc Computer Science',
                    year: '2017',
                },
                {
                    school: 'Institute of Sample Studies',
                    degree: 'BSc Information Technology',
                    year: '2020',
                },
                {
                    degree: 'PhD Data Science',
                    location: 'Austria',
                },
            ],
            [SectionId.PROJECTS]: [
                {
                    name: 'Personal Portfolio',
                    description:
                        'Responsive portfolio built with React and Tailwind.',
                    link: 'https://janedoe.dev',
                },
                {
                    name: 'E-Commerce Demo',
                    description: 'Demo shop with filters and cart.',
                    link: 'https://github.com/janedoe/ecommerce-demo',
                },
            ],
            [SectionId.VOLUNTEERING]: [
                {
                    organization: 'Code Club',
                    role: 'Mentor',
                    period: '2020 – Present',
                    tasks: ['Mentored students', 'Ran coding workshops'],
                },
            ],
            [SectionId.REFEREES]: 'References available on request',
        });
    }),
    http.get(/sections(?:_.*)?\.json$/, () => {
        return HttpResponse.json([
            { id: SectionId.HEADING, title: 'Heading' },
            { id: SectionId.CONTACT, title: 'Contact', icon: '📞' },
            { id: SectionId.SUMMARY, title: 'Summary', icon: '📝' },
            { id: SectionId.EXPERIENCE, title: 'Experience', icon: '💼' },
            { id: SectionId.EDUCATION, title: 'Education', icon: '🎓' },
            { id: SectionId.SKILLS, title: 'Skills', icon: '🛠️' },
            { id: SectionId.PROJECTS, title: 'Projects', icon: '🚀' },
            { id: SectionId.VOLUNTEERING, title: 'Volunteering', icon: '🤝' },
            { id: SectionId.REFEREES, title: 'Referees', icon: '👥' },
        ]);
    }),
    http.post('http://localhost:3001/api/ask', () => {
        return HttpResponse.json({
            answer: 'Based on the provided CV and job description, the candidate appears to be a strong match for the role. Their skills and experience align well with the job requirements, particularly in React development and modern JavaScript frameworks. The candidate has demonstrated the ability to work on scalable applications and lead component library initiatives, which are valuable assets for this position. Overall, I would recommend considering this candidate for further evaluation in the hiring process.',
        });
    }),
];
