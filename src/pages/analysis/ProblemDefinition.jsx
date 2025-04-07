import React from 'react';

export default function ProblemDefinition() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Problem Definition & Research Plan
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Problem Definition</h2>
        <p className="text-gray-700 leading-relaxed">
          Reading rates among children and young adults are declining, particularly of long-form content like books, in favor of short-form, visually rich digital media such as social media, games, and video content.
        </p>
        <p className="text-sm text-blue-600 mt-2">
          <a 
            href="https://www.nji.nl/nieuws/leesvaardigheid-in-nederland-slechter#:~:text=De%20leesvaardigheid%20van%20Nederlandse%20leerlingen,vaardigheden%20van%2015%2Djarigen%20meet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline"
          >
            Source: Nederlands Jeugdinstituut
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Research Plan</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Review existing literature on reading behavior trends among youth</li>
          <li>Analyze competitor apps that target reading or habit formation</li>
          <li>Identify key stakeholders: students, parents, teachers</li>
          <li>Develop subquestions and “How Might We” prompts to explore solution directions</li>
          <li>Gather insights through user observation and interviews</li>
        </ul>
      </section>
    </div>
  );
}
