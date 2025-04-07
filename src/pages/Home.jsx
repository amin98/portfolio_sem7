import React from 'react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Portfolio
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Welcome to my university portfolio assessment showcasing my journey
          through industry collaboration and individual development. This
          collection demonstrates my growth across various learning outcomes and
          professional competencies.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Portfolio Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Industry Project
            </h3>
            <p className="text-gray-600">
              Explore my collaborative work with industry partners, showcasing
              real-world problem-solving and professional development in a team
              environment.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Individual Case
            </h3>
            <p className="text-gray-600">
              Discover my personal project work, demonstrating independent
              research, analysis, and implementation of solutions to complex
              problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
