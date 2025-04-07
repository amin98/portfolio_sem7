import React from 'react';
import { Link } from 'react-router-dom';

export default function Analysis() {
  const documents = [
    {
      title: 'Problem Definition & Research Plan',
      path: '/individual-case/analysis/problem-definition',
    },
    {
      title: 'Research Subquestions & HMW Questions',
      path: '/individual-case/analysis/questions',
    },
    {
      title: 'Competitor Analysis',
      path: '/individual-case/analysis/competitor-analysis',
    },
    {
      title: 'Brainstorming',
      path: '/individual-case/analysis/brainstorming',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Analysis Documents
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {documents.map((doc, index) => (
          <Link
            key={index}
            to={doc.path}
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200 hover:border-indigo-500"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-1">
              {doc.title}
            </h2>
            <p className="text-sm text-gray-500">Click to view this document</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
