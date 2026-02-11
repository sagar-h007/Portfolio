export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sagar",
    url: "https://your-domain.com",
    sameAs: [
      "https://github.com/sagar-h007",
      "https://www.linkedin.com/in/sagar-halladakeri-11949a369/",
    ],
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description:
      "Full-stack developer specializing in backend systems, distributed architectures, and developer tooling",
    knowsAbout: [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "Backend Development",
      "Distributed Systems",
      "Developer Tools",
      "Open Source",
      "WebAssembly",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sagar Portfolio",
    url: "https://your-domain.com",
    description:
      "Professional portfolio of Sagar - Software Developer & Open Source Contributor",
    author: {
      "@type": "Person",
      name: "Sagar",
    },
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2026-02-11T00:00:00+00:00",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: "Sagar",
      alternateName: "sagar-h007",
      description: "Software Developer & Open Source Contributor",
      image: "https://your-domain.com/profile.jpg",
      sameAs: [
        "https://github.com/sagar-h007",
        "https://www.linkedin.com/in/sagar-halladakeri-11949a369/",
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://your-domain.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://your-domain.com#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://your-domain.com#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://your-domain.com#contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

