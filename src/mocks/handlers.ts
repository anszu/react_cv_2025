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
            ],
            experience: [
                {
                    company: 'Tech Solutions Ltd.',
                    position: 'Frontend Developer',
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
                    degree: 'MSc Computer Science',
                    year: '2017',
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
            certificates: [
                { name: 'AWS Certified Cloud Practitioner', year: '2023' },
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
            { id: 'tldr', title: 'TL;DR', icon: '⚡' },
            { id: 'experience', title: 'Experience', icon: '💼' },
            { id: 'education', title: 'Education', icon: '🎓' },
            { id: 'skills', title: 'Skills', icon: '🛠️' },
            { id: 'projects', title: 'Projects', icon: '🚀' },
            { id: 'certificates', title: 'Certificates', icon: '📜' },
            { id: 'volunteering', title: 'Volunteering', icon: '🤝' },
            { id: 'referees', title: 'Referees', icon: '👥' },
        ]);
    }),
];
