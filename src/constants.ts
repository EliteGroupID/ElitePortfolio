export const companyNameText = 'EliteTech'
export const companyDomainText = 'DEV'
export const sloganText = 'Your Vision, Our Expertise'
export const sloganDescriptionText = ' High-Quality Software Development Services and Product for Your Business'
export const devIconURL = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const devIconList = [
    "/php/php-plain.svg",
    "/javascript/javascript-plain.svg",
    "/java/java-plain.svg",
    "/html5/html5-plain.svg",
    "/css3/css3-plain.svg",
    "/tailwindcss/tailwindcss-plain.svg",
    "/react/react-original.svg",
    "/vuejs/vuejs-original.svg",
    "/android/android-plain.svg",
    "/electron/electron-original.svg",
    "/arduino/arduino-original.svg",
]

export const servicesList = [
    {
        slug: 'desktop-app',
        title: 'Desktop App',
        stack: 'C#, WPF, WinForms, C++, Java, etc.',
        icon: '/windows8/windows8-original.svg',
        description: 'We build powerful, performant desktop applications tailored to your workflow and business needs.',
        whatWeOffer: [
            'Custom Windows & cross-platform desktop applications',
            'Native UI with modern frameworks (WPF, WinForms, JavaFX)',
            'Integration with hardware peripherals and databases',
            'Ongoing maintenance and feature updates',
        ],
        techStack: ['C#', 'WPF', 'WinForms', 'Java', 'JavaFX', 'C++', 'Electron'],
        whyUs: [
            { title: 'Proven Expertise', desc: 'Years of experience delivering production-ready desktop software.' },
            { title: 'Performance First', desc: 'We optimize for speed and reliability on every platform.' },
            { title: 'Full Support', desc: 'From design to deployment and beyond, we have you covered.' },
        ],
    },
    {
        slug: 'web-app',
        title: 'Web App',
        stack: 'React, Vue, JavaScript, HTML5, etc.',
        icon: '/chrome/chrome-original.svg',
        description: 'Modern, scalable web applications built with the latest front-end and back-end technologies.',
        whatWeOffer: [
            'Responsive single-page and multi-page web applications',
            'RESTful & GraphQL API integration',
            'Authentication, dashboards, and admin panels',
            'SEO-optimized and performance-tuned builds',
        ],
        techStack: ['React', 'Vue', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PHP'],
        whyUs: [
            { title: 'Modern Stack', desc: 'We use the latest frameworks to future-proof your web application.' },
            { title: 'UX Focused', desc: 'Every interface is designed with the end user in mind.' },
            { title: 'Scalable Architecture', desc: 'Built to grow with your business from day one.' },
        ],
    },
    {
        slug: 'mobile-app',
        title: 'Mobile App',
        stack: 'Android, iOS, RN, Flutter, etc.',
        icon: '/android/android-original.svg',
        description: 'Cross-platform and native mobile apps that deliver smooth experiences on Android and iOS.',
        whatWeOffer: [
            'Native Android & iOS app development',
            'Cross-platform solutions with React Native and Flutter',
            'Push notifications, offline support, and device APIs',
            'App Store & Play Store submission assistance',
        ],
        techStack: ['React Native', 'Flutter', 'Android (Kotlin)', 'iOS (Swift)', 'Expo'],
        whyUs: [
            { title: 'Cross-Platform', desc: 'One codebase, two platforms — saving time and cost.' },
            { title: 'Native Feel', desc: 'We ensure apps feel native and perform at their best.' },
            { title: 'End-to-End', desc: 'From wireframe to app store, we handle everything.' },
        ],
    },
    {
        slug: 'iot-module',
        title: 'IoT Module',
        stack: 'Arduino Uno, esp, etc.',
        icon: '/arduino/arduino-original.svg',
        description: 'Smart IoT modules and embedded systems connecting the physical world to digital infrastructure.',
        whatWeOffer: [
            'Custom firmware development for embedded devices',
            'Sensor integration and real-time data pipelines',
            'Cloud connectivity via MQTT and REST',
            'Prototyping through to production-ready hardware',
        ],
        techStack: ['Arduino', 'ESP32', 'ESP8266', 'MQTT', 'C/C++', 'Raspberry Pi'],
        whyUs: [
            { title: 'Hardware Know-How', desc: 'Deep experience with microcontrollers and sensor networks.' },
            { title: 'Cloud Connected', desc: 'We bridge your hardware to cloud dashboards seamlessly.' },
            { title: 'Rapid Prototyping', desc: 'Fast iteration from concept to working prototype.' },
        ],
    },
]

export const labelWCountData = [
    {
        label: "All Clients",
        value: 25,
    },
    {
        label: "Across countries",
        value: 5,
    },
    {
        label: "Products",
        value: 10,
    },
    {
        label: "EXPERIENCED TALENTS",
        value: 8,
    },
];

export const productsList = [
    {
        slug: 'elite-pos',
        name: 'Elite POS',
        shortDesc: 'A complete point-of-sale system for modern retail and food businesses.',
        image: '/assets/epos.png',
        features: [
            'Real-time inventory tracking',
            'Multi-cashier & multi-branch support',
            'Sales reports and analytics dashboard',
            'Integrated barcode scanner support',
            'Customer loyalty program',
            'Offline mode with sync',
        ],
        techStack: ['C#', 'WPF', 'SQL Server', 'Crystal Reports'],
        screenshots: ['/assets/epos.png', '/assets/epos.png', '/assets/epos.png'],
    },
    {
        slug: 'elite-vote',
        name: 'Elite Vote',
        shortDesc: 'A secure and transparent digital voting platform for organizations and events.',
        image: '/assets/evot.png',
        features: [
            'Secure voter authentication',
            'Real-time vote counting',
            'Candidate & ballot management',
            'Audit trail and transparency logs',
            'Multi-election support',
            'Results export and reporting',
        ],
        techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
        screenshots: ['/assets/evot.png', '/assets/evot.png', '/assets/evot.png'],
    },
]

export const teamList = [
    {
        slug: 'john-doe',
        name: 'John Doe',
        role: 'CEO & Founder',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. John has over 10 years of experience in software development and business leadership. He founded EliteTech DEV with a vision to deliver world-class software solutions to businesses of all sizes.',
        skills: ['Business Strategy', 'Project Management', 'Software Architecture', 'Team Leadership', 'Client Relations'],
        avatar: '/assets/eg-icon.png',
    },
    {
        slug: 'jane-smith',
        name: 'Jane Smith',
        role: 'Lead Developer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Jane is our principal engineer with deep expertise in full-stack web and desktop development. She drives technical decisions and mentors the development team.',
        skills: ['React', 'Next.js', 'Node.js', 'C#', 'TypeScript', 'SQL'],
        avatar: '/assets/eg-icon.png',
    },
    {
        slug: 'alex-johnson',
        name: 'Alex Johnson',
        role: 'UI/UX Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alex crafts intuitive and visually stunning interfaces. With a background in graphic design and user research, he ensures every product delights its users.',
        skills: ['Figma', 'Adobe XD', 'Tailwind CSS', 'User Research', 'Prototyping', 'Motion Design'],
        avatar: '/assets/eg-icon.png',
    },
    {
        slug: 'maria-garcia',
        name: 'Maria Garcia',
        role: 'IoT Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maria specializes in embedded systems and IoT solutions. She bridges the gap between hardware and software, building connected devices that power real-world automation.',
        skills: ['Arduino', 'ESP32', 'C/C++', 'MQTT', 'Raspberry Pi', 'PCB Design'],
        avatar: '/assets/eg-icon.png',
    },
]
