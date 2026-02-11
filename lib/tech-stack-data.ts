export interface TechStack {
    name: string;
    category: string;
    proficiency: 'expert' | 'advanced' | 'intermediate' | 'learning';
    yearsOfExperience?: number;
}

export const techStackData: TechStack[] = [
    // Languages
    { name: 'Python', category: 'Languages', proficiency: 'expert', yearsOfExperience: 3 },
    { name: 'C++', category: 'Languages', proficiency: 'advanced', yearsOfExperience: 2 },
    { name: 'JavaScript', category: 'Languages', proficiency: 'expert', yearsOfExperience: 3 },
    { name: 'TypeScript', category: 'Languages', proficiency: 'advanced', yearsOfExperience: 2 },
    { name: 'Dart', category: 'Languages', proficiency: 'intermediate', yearsOfExperience: 1 },
    { name: 'SQL', category: 'Languages', proficiency: 'advanced' },
    { name: 'Bash', category: 'Languages', proficiency: 'intermediate' },

    // Frontend
    { name: 'React', category: 'Frontend', proficiency: 'expert', yearsOfExperience: 3 },
    { name: 'Next.js', category: 'Frontend', proficiency: 'advanced', yearsOfExperience: 2 },
    { name: 'HTML5', category: 'Frontend', proficiency: 'expert' },
    { name: 'CSS3', category: 'Frontend', proficiency: 'expert' },
    { name: 'Tailwind CSS', category: 'Frontend', proficiency: 'expert' },
    { name: 'Flutter', category: 'Frontend', proficiency: 'intermediate' },

    // Backend
    { name: 'Node.js', category: 'Backend', proficiency: 'expert', yearsOfExperience: 3 },
    { name: 'Express', category: 'Backend', proficiency: 'advanced' },
    { name: 'FastAPI', category: 'Backend', proficiency: 'advanced' },
    { name: 'Flask', category: 'Backend', proficiency: 'intermediate' },
    { name: 'GraphQL', category: 'Backend', proficiency: 'intermediate' },

    // Database
    { name: 'PostgreSQL', category: 'Database', proficiency: 'advanced' },
    { name: 'MongoDB', category: 'Database', proficiency: 'expert', yearsOfExperience: 2 },
    { name: 'MySQL', category: 'Database', proficiency: 'advanced' },
    { name: 'Redis', category: 'Database', proficiency: 'intermediate' },

    // DevOps
    { name: 'Docker', category: 'DevOps', proficiency: 'advanced' },
    { name: 'Git', category: 'DevOps', proficiency: 'expert', yearsOfExperience: 3 },
    { name: 'GitHub Actions', category: 'DevOps', proficiency: 'intermediate' },
    { name: 'Linux', category: 'DevOps', proficiency: 'advanced' },
    { name: 'AWS', category: 'DevOps', proficiency: 'intermediate' },

    // Learning
    { name: 'Rust', category: 'Learning', proficiency: 'learning' },
    { name: 'Kubernetes', category: 'Learning', proficiency: 'learning' },
    { name: 'WebAssembly', category: 'Learning', proficiency: 'learning' },
    { name: 'ML/AI', category: 'Learning', proficiency: 'learning' },
];

export const categories = [
    'Languages',
    'Frontend',
    'Backend',
    'Database',
    'DevOps',
    'Learning'
] as const;
