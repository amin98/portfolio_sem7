import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About My Journey</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Development</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-600 mb-4">
              Throughout my academic journey, I've focused on developing both technical and soft skills
              that are essential in the modern technology industry. My approach to learning combines
              theoretical knowledge with practical application, always seeking opportunities to apply
              classroom concepts to real-world scenarios.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feedback & Growth</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-600 mb-4">
              I actively seek and incorporate feedback from peers, mentors, and industry professionals
              to continuously improve my work and approach. This section documents my growth through
              various projects and highlights how feedback has shaped my development.
            </p>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Key Areas of Growth</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Technical skill development</li>
                <li>Project management capabilities</li>
                <li>Communication and collaboration</li>
                <li>Problem-solving approaches</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}