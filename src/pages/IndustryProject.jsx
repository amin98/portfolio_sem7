import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { LineChart, Lightbulb, Palette, Wrench, Users } from 'lucide-react';

export default function IndustryProject() {
  const project = {
    title: "Enterprise Solution Development",
    description: "Collaborated with industry partners to develop a scalable enterprise solution, focusing on system architecture and user experience.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/username/project",
    outcomes: [
      'Analysis',
      'Design',
      'Realisation',
      'Manage & Control',
      'Professional skills'
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Industry Project</h1>
      
      <div className="mb-12">
        <ProjectCard {...project} />
      </div>

      <div className="space-y-8">
        <section className="bg-white shadow rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <LineChart className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Analysis & Research</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Market Analysis</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Competitive landscape evaluation</li>
                  <li>Industry trends and market opportunities</li>
                  <li>Target user demographic research</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Technical Assessment</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Current system architecture analysis</li>
                  <li>Integration requirements gathering</li>
                  <li>Performance benchmarking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Lightbulb className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Strategic Recommendations</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Technical Strategy</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Cloud-native architecture adoption</li>
                  <li>Microservices implementation plan</li>
                  <li>Security enhancement roadmap</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Business Impact</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Projected ROI and cost analysis</li>
                  <li>Risk mitigation strategies</li>
                  <li>Scalability recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Palette className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Solution Design</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Architecture Design</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>System component diagram</li>
                  <li>Data flow architecture</li>
                  <li>API design and documentation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">User Experience</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>User journey mapping</li>
                  <li>Interface design iterations</li>
                  <li>Accessibility considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Stakeholder Collaboration</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Communication Strategy</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Regular stakeholder updates</li>
                  <li>Technical documentation</li>
                  <li>Progress reporting framework</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Feedback Integration</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Iterative feedback loops</li>
                  <li>Stakeholder input incorporation</li>
                  <li>Continuous improvement process</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}