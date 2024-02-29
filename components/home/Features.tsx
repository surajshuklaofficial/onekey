import React from 'react';

interface Feature {
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        title: "User Management",
        description: "Effortlessly manage user accounts, permissions, and access levels."
    },
    {
        title: "Seamless Integration",
        description: "Easily integrate OneKey with your existing systems and services."
    },
    {
        title: "Customization Options",
        description: "Tailor OneKey to your organization's branding and specific needs."
    },
    {
        title: "Scalability",
        description: "Grow your organization without worrying about authentication bottlenecks."
    },
    {
        title: "Security",
        description: "Protect sensitive data with advanced security features and encryption."
    },
    {
        title: "Analytics",
        description: "Gain insights into user behavior and system usage with built-in analytics."
    }
];

const ReachFeatures: React.FC = () => {
    return (
        <div className="bg-blue-100 py-12 p-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReachFeatures;
