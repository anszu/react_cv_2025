import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get(/content(?:_.*)?\.json$/, () => {
        return HttpResponse.json({
            heading: {
                title: 'Frontend Developer',
                subtitle: 'Specialized in React & Modern JavaScript',
            },
            contact: {
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
            summary:
                'Passionate frontend developer with 5+ years building responsive apps with React, TypeScript and modern tooling.',
            skills: [
                {
                    label: 'Skills',
                    text: 'HTML5, CSS3 (SASS, SCSS, CSS Modules)',
                },
                {
                    label: 'More',
                    text: 'Willing to learn and adapt quickly to new requiements.',
                },
            ],
            experience: [
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
            education: [
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
            projects: [
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
            volunteering: [
                {
                    organization: 'Code Club',
                    role: 'Mentor',
                    period: '2020 – Present',
                    tasks: ['Mentored students', 'Ran coding workshops'],
                },
            ],
            referees: 'References available on request',
        });
    }),
    http.get(/sections(?:_.*)?\.json$/, () => {
        return HttpResponse.json([
            { id: 'heading', title: 'Heading' },
            { id: 'contact', title: 'Contact', icon: '📞' },
            { id: 'summary', title: 'Summary', icon: '📝' },
            { id: 'experience', title: 'Experience', icon: '💼' },
            { id: 'education', title: 'Education', icon: '🎓' },
            { id: 'skills', title: 'Skills', icon: '🛠️' },
            { id: 'projects', title: 'Projects', icon: '🚀' },
            { id: 'volunteering', title: 'Volunteering', icon: '🤝' },
            { id: 'referees', title: 'Referees', icon: '👥' },
        ]);
    }),
];
