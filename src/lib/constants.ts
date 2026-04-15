export const COLLEGE = {
  name: 'ESWAR COLLEGE OF ENGINEERING',
  shortName: 'ECE',
  tagline: 'Nurturing World-Class Engineers Since 2008',
  eamcetCode: 'ESWR',
  phone: '+91 86472 18256',
  email: 'eswarcollegeofengg@gmail.com',
  website: 'eswarcollegeofengg.org',
  address: 'Kesanupalli, Palnadu District, Andhra Pradesh',
  trust: 'Shaik Dada Saheb Charitable Trust',
  founded: 2008,
  campus: '22 Acres on Chilakaluripet Road',
  accreditation: 'NAAC B++ | AICTE | JNTUK | UGC Autonomous',
} as const;

export const STATS = [
  { value: 17, suffix: '+', label: 'Years of Excellence' },
  { value: 22, suffix: '', label: 'Acre Campus' },
  { value: 120, suffix: '+', label: 'Faculty Members' },
  { value: 2500, suffix: '+', label: 'Students Enrolled' },
  { value: 50, suffix: '+', label: 'Recruiting Companies' },
] as const;

export const HERO_STATS = [
  { value: 17, suffix: '+', label: 'Years' },
  { value: 22, suffix: '', label: 'Acres' },
  { value: 90, suffix: '%', label: 'Placements' },
  { value: 498, suffix: '', label: 'B.Tech Seats' },
] as const;

export const BTECH_BRANCHES = [
  { name: 'Automobile Engineering', code: 'AUT', intake: 42, icon: 'car', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600' },
  { name: 'Civil Engineering', code: 'CIV', intake: 42, icon: 'building', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Computer Science & Engineering', code: 'CSE', intake: 42, icon: 'cpu', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600' },
  { name: 'CSE - AI & Machine Learning', code: 'CSE-AIML', intake: 60, icon: 'brain', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600' },
  { name: 'CSE - AI & Data Science', code: 'CSE-AIDS', intake: 60, icon: 'database', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
  { name: 'CSE - Computer Science & Design', code: 'CSE-CSD', intake: 60, icon: 'palette', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600' },
  { name: 'Electronics & Communication Engineering', code: 'ECE', intake: 126, icon: 'radio', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600' },
  { name: 'Electrical & Electronics Engineering', code: 'EEE', intake: 42, icon: 'zap', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Mechanical Engineering', code: 'MEC', intake: 84, icon: 'settings', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600' },
] as const;

export const PG_PROGRAMS = [
  { name: 'MBA', seats: 48, duration: '2 Years', entrance: 'AP ICET' },
  { name: 'M.Tech CSE', seats: null, duration: '2 Years', entrance: 'GATE / PGECET' },
  { name: 'M.Tech CAD/CAM', seats: null, duration: '2 Years', entrance: 'GATE / PGECET' },
  { name: 'M.Tech VLSI', seats: null, duration: '2 Years', entrance: 'GATE / PGECET' },
  { name: 'M.Tech Structural Engineering', seats: null, duration: '2 Years', entrance: 'GATE / PGECET' },
] as const;

export const DIPLOMA_PROGRAMS = [
  'Computer Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Electronics Engineering',
  'Automobile Engineering',
] as const;

export const RECRUITERS = [
  { name: 'TCS', logo: '/images/logos/tcs.png' },
  { name: 'Accenture', logo: '/images/logos/accenture.svg' },
  { name: 'Infosys', logo: '/images/logos/infosys.svg' },
  { name: 'Wipro', logo: '/images/logos/wipro.svg' },
  { name: 'Cognizant', logo: '/images/logos/cognizant.svg' },
  { name: 'Concentrix', logo: '/images/logos/concentrix.png' },
  { name: 'HCL Tech', logo: '/images/logos/hcltech.png' },
  { name: 'Tech Mahindra', logo: '/images/logos/techmahindra.png' },
  { name: 'Capgemini', logo: '/images/logos/capgemini.svg' },
  { name: 'LTIMindtree', logo: '/images/logos/ltimindtree.png' },
  { name: 'Mphasis', logo: '/images/logos/mphasis.png' },
  { name: 'Hexaware', logo: '/images/logos/hexaware.png' },
  { name: 'Unistring Tech', logo: '/images/logos/unistring.svg' },
  { name: 'STS', logo: '/images/logos/sts.svg' },
  { name: 'NTT Data', logo: '/images/logos/nttdata.png' },
  { name: 'Deloitte', logo: '/images/logos/deloitte.svg' },
] as const;

export const NEWS = [
  {
    id: '1',
    title: 'Eswar Innovation Galaxy Foundation',
    date: '2025-09-15',
    excerpt: 'Launching the Innovation Galaxy Foundation to foster entrepreneurship and research excellence among students and faculty.',
    image: '/images/news/news-01.jpg',
  },
  {
    id: '2',
    title: 'MOU with VIGNAN TBI',
    date: '2025-10-01',
    excerpt: 'Strategic partnership with VIGNAN Technology Business Incubator to support student startups and innovation projects.',
    image: '/images/news/news-02.jpg',
  },
  {
    id: '3',
    title: 'Mega Job Mela - 50+ Companies',
    date: '2025-10-29',
    excerpt: 'Mega recruitment drive with 50+ companies participating. Over 500 students placed in top IT and manufacturing firms.',
    image: '/images/news/news-03.jpg',
  },
] as const;

export const ACCREDITATIONS = [
  { name: 'NAAC', value: 'B++', desc: 'National Assessment and Accreditation Council' },
  { name: 'AICTE', value: 'Approved', desc: 'All India Council for Technical Education' },
  { name: 'JNTUK', value: 'Affiliated', desc: 'Jawaharlal Nehru Technological University Kakinada' },
  { name: 'UGC', value: 'Autonomous', desc: 'University Grants Commission' },
] as const;

export const TESTIMONIALS = [
  {
    quote: 'Eswar College gave me the foundation to succeed in the IT industry. The faculty mentorship and practical labs prepared me exceptionally well for my career at TCS.',
    name: 'Rajesh Kumar',
    dept: 'CSE',
    year: '2022',
  },
  {
    quote: 'The placement cell at Eswar is outstanding. They brought top companies to campus and guided us through every step of the recruitment process. I got placed at Infosys.',
    name: 'Priya Sharma',
    dept: 'ECE',
    year: '2023',
  },
  {
    quote: 'The 22-acre campus with modern facilities and experienced faculty made my engineering journey memorable. The college truly nurtures world-class engineers.',
    name: 'Anil Reddy',
    dept: 'Mechanical',
    year: '2021',
  },
] as const;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'Academics',
    children: [
      { label: 'Departments', path: '/departments' },
      { label: 'B.Tech Programs', path: '/departments' },
      { label: 'PG Programs', path: '/departments' },
      { label: 'Syllabus Downloads', path: '/syllabus' },
      { label: 'Academic Calendar', path: '/exam-timetable' },
    ],
  },
  { label: 'Research', path: '/research' },
  { label: 'Placements', path: '/placements' },
  {
    label: 'Campus Life',
    children: [
      { label: 'Events', path: '/events' },
      { label: 'News', path: '/news' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Sports', path: '/gallery' },
      { label: 'Student Clubs', path: '/student-clubs' },
      { label: 'Grievance Cell', path: '/grievance-cell' },
    ],
  },
  { label: 'Virtual Tour', path: '/virtual-tour' },
  {
    label: 'About',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Vision & Mission', path: '/vision-mission' },
      { label: 'Management', path: '/management' },
      { label: 'Accreditations (NAAC / AICTE)', path: '/accreditations' },
      { label: 'Mandatory Disclosures', path: '/accreditations' },
    ],
  },
] as const;

export const TOPBAR_LEFT = [
  { label: 'Students', path: '/login' },
  { label: 'Faculty', path: '/login' },
  { label: 'Parents', path: '/login' },
  { label: 'Alumni', path: '/alumni/register' },
  { label: 'Examinations', path: '/results' },
] as const;

export const TOPBAR_RIGHT = [
  { label: 'JNTUK', href: 'https://www.jntuk.edu.in' },
  { label: 'AICTE', href: 'https://www.aicte-india.org' },
  { label: 'NAAC', href: 'https://www.naac.gov.in' },
  { label: 'Contact', path: '/contact' },
] as const;

export const VIRTUAL_TOUR_LOCATIONS = [
  {
    id: 1,
    name: 'Main Entrance',
    tab: 'Main Entrance',
    description: 'The grand entrance of Eswar College of Engineering welcomes you with a sprawling approach road lined with greenery. The main gate features the college emblem and leads into the 22-acre campus.',
    highlights: ['22-acre green campus', 'Landscaped gardens', 'Security checkpoint'],
    image: '/images/tour/tour-01.jpg',
  },
  {
    id: 2,
    name: 'Academic Block',
    tab: 'Academic Block',
    description: 'The multi-storey academic block houses spacious classrooms equipped with smart boards, projectors, and comfortable seating for over 2500 students across all departments.',
    highlights: ['Smart classrooms', 'Seminar halls', 'Department offices'],
    image: '/images/tour/tour-02.jpg',
  },
  {
    id: 3,
    name: 'CSE & AI/ML Labs',
    tab: 'CSE & AI/ML Labs',
    description: 'State-of-the-art computer labs with high-performance workstations, dedicated AI/ML research lab with GPU servers, and collaborative coding spaces for project work.',
    highlights: ['150+ workstations', 'GPU computing lab', 'IoT development zone'],
    image: '/images/tour/tour-03.jpg',
  },
  {
    id: 4,
    name: 'ECE & EEE Labs',
    tab: 'ECE & EEE Labs',
    description: 'Advanced electronics and electrical laboratories equipped with DSP trainers, VLSI design stations, power systems simulators, and communication system analyzers.',
    highlights: ['VLSI design lab', 'Power systems lab', 'Communication lab'],
    image: '/images/tour/tour-04.jpg',
  },
  {
    id: 5,
    name: 'Library',
    tab: 'Library',
    description: 'The central library spans two floors with over 25,000 volumes, digital journal subscriptions, an e-library section, and quiet study zones for focused learning.',
    highlights: ['25,000+ books', 'Digital library', 'Reading rooms'],
    image: '/images/tour/tour-05.jpg',
  },
  {
    id: 6,
    name: 'Mechanical Workshop',
    tab: 'Mechanical Workshop',
    description: 'The mechanical workshop features hydraulic presses, CNC machines, CAD/CAM stations, and automobile testing bays spread across a dedicated workshop block.',
    highlights: ['CNC machines', 'CAD/CAM lab', 'Automobile bay'],
    image: '/images/tour/tour-06.jpg',
  },
  {
    id: 7,
    name: 'Sports Complex',
    tab: 'Sports Complex',
    description: 'A comprehensive sports complex with cricket ground, basketball and volleyball courts, indoor games facility, and a well-equipped gymnasium for student fitness.',
    highlights: ['Cricket ground', 'Indoor games', 'Gymnasium'],
    image: '/images/tour/tour-07.jpg',
  },
  {
    id: 8,
    name: 'Campus Overview',
    tab: 'Campus Overview',
    description: 'An aerial perspective of the entire 22-acre campus showcasing the academic blocks, hostels, canteen, gardens, and open-air amphitheatre located on Chilakaluripet Road.',
    highlights: ['Hostel facilities', 'Canteen', 'Amphitheatre'],
    image: '/images/tour/tour-08.jpg',
  },
] as const;

export const FOOTER_LINKS = {
  academics: [
    { label: 'Departments', path: '/departments' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Exam Results', path: '/results' },
    { label: 'Academic Calendar', path: '/exam-timetable' },
    { label: 'Syllabus', path: '/departments' },
  ],
  campus: [
    { label: 'Virtual Tour', path: '/virtual-tour' },
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'News', path: '/news' },
    { label: 'Sports', path: '/gallery' },
  ],
  quickLinks: [
    { label: 'Student Login', path: '/login' },
    { label: 'Faculty Login', path: '/login' },
    { label: 'Placements', path: '/placements' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Alumni', path: '/alumni/register' },
  ],
} as const;
