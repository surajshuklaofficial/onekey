import React from 'react';

const CallToAction: React.FC = () => {
    return (
        <div className="bg-gray-100 py-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Are you a Service Provider or Organization Admin?</h2>
            <p className="text-gray-600 mb-4">Join OneKey today and streamline your authentication process.</p>
            <div className="flex justify-center">
                <a href="/integration" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">Integrate Now</a>
                <a href="/dashboard" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Get Started</a>
            </div>
        </div>
    );
}

export default CallToAction;
