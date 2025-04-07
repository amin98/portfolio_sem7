import {
  Brain,
  Github,
  Lightbulb,
  LineChart,
  Palette,
  Users,
  Wrench,
} from 'lucide-react';
import React from 'react';

const outcomeIcons = {
  Analysis: LineChart,
  Advice: Lightbulb,
  Design: Palette,
  Realisation: Wrench,
  'Manage & Control': Brain,
  'Professional skills': Users,
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  outcomes,
}) {
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200  overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {outcomes.map((outcome) => {
            const Icon = outcomeIcons[outcome];
            return (
              <span
                key={outcome}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
              >
                {Icon && <Icon className="w-4 h-4 mr-1" />}
                {outcome}
              </span>
            );
          })}
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          <Github className="w-5 h-5 mr-2" />
          View Repository
        </a>
      </div>
    </div>
  );
}
