export interface Project {
    id: string;
    number: string;
    title: string;
    description: string;
    longDescription?: string;
    tech: string[];
    icon: string;
    github: string;
    liveUrl?: string;
    image?: string;
    gradient: string;
    featured?: boolean;
}

export const projectsData: Project[] = [
    {
        id: 'medical-report',
        number: '01',
        title: 'Medical Report System',
        description: 'A blockchain-based medical reporting platform built on Flare Network, designed to streamline healthcare documentation with decentralized security and immutable data integrity.',
        longDescription: 'Decentralized medical reporting system leveraging Flare blockchain for secure, transparent, and tamper-proof patient data management. Smart contracts ensure data integrity and access control.',
        tech: ['Solidity', 'Flare Blockchain', 'Smart Contracts', 'Web3'],
        icon: '📊',
        github: 'https://github.com/sagar-h007/Medical-report',
        gradient: 'from-blue-500 to-cyan-500',
        featured: true,
    },
    {
        id: 'dependency-visualizer',
        number: '02',
        title: 'Package Dependency Visualizer',
        description: 'A powerful Python CLI tool that analyzes and visualizes local package dependencies, helping developers understand complex dependency trees and identify circular dependencies.',
        longDescription: 'Command-line tool for static analysis of Python packages. Features include dependency graph visualization, circular dependency detection, and detailed package metrics.',
        tech: ['Python', 'NetworkX', 'Matplotlib', 'Click', 'GraphViz'],
        icon: '🔍',
        github: 'https://github.com/sagar-h007/Local-Package-Dependancy-Visualizer',
        gradient: 'from-purple-500 to-pink-500',
        featured: true,
    },
    {
        id: 'wasm-inspector',
        number: '03',
        title: 'WASM Inspector CLI',
        description: 'A sophisticated C++ command-line tool for inspecting, analyzing, and debugging WebAssembly modules. Provides deep insights into WASM binaries for optimization and debugging.',
        longDescription: 'Professional-grade WebAssembly inspection tool built with C++ and WABT. Supports module analysis, function inspection, memory layout visualization, and performance profiling.',
        tech: ['C++', 'WABT', 'CMake', 'WebAssembly', 'LLVM'],
        icon: '⚙️',
        github: 'https://github.com/sagar-h007/WASM-inspector-cli',
        gradient: 'from-green-500 to-emerald-500',
        featured: true,
    },
];

export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
    return projectsData.find(project => project.id === id);
};
