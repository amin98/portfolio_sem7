import { Lightbulb, LineChart, Palette, Wrench } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

export default function IndividualCase() {
  const project = {
    title: 'Gamified Reading App',
    description:
      'Individually developed a concept for a gamified reading app to address declining reading habits among youth through research, design, and early concept development.',
    imageUrl:
      'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubUrl: 'https://github.com/username/individual-project',
    outcomes: [
      'Analysis',
      'Advice',
      'Design',
      'Realisation',
      'Professional skills',
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Individual Case</h1>

      <div className="mb-12">
        <ProjectCard {...project} />
      </div>

      <div className="space-y-8">
        {/* Analysis Phase */}
        <section className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <LineChart className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                <Link
                  to="/individual-case/analysis"
                  className="underline text-indigo-600"
                >
                  Analysis Phase
                </Link>
              </h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Problem Definition & Research
                </h3>
                <p>
                  This project looks at why teens and young adults (12–25) are
                  reading less these days—especially books—and explores what
                  could make reading fun and engaging again. I dug into
                  behavior, habits, and content preferences to get a clearer
                  picture.
                </p>
                <ul className="list-disc list-inside mt-2  space-y-1">
                  <li>
                    Subquestions and "How Might We" questions were defined to
                    guide both research and ideation
                  </li>
                  <li>
                    Desk research and secondary sources provided insight into
                    the impact of social media and digital habits
                  </li>
                  <li>
                    Competitor analysis conducted on Wattpad, Hooked, Fable,
                    Goodreads
                  </li>
                  <li>
                    Stakeholder mapping identified children, parents, and
                    educators as primary stakeholders
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Key Insights
                </h3>
                <ul className="list-disc list-inside  space-y-1">
                  <li>
                    Long-form reading struggles to compete with short,
                    dopamine-driven content
                  </li>
                  <li>
                    Social and gamified elements strongly influence sustained
                    engagement in apps
                  </li>
                  <li>
                    Parental and teacher support can play a motivational role if
                    integrated thoughtfully
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Advice Phase */}
        <section className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Lightbulb className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                Advice & Recommendations
              </h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Idea Directions (from HMW questions)
                </h3>
                <ul className="list-disc list-inside  space-y-1">
                  <li>
                    Introduce streaks and XP systems to reward daily reading
                  </li>
                  <li>
                    Include story-based reading quests with unlockable content
                  </li>
                  <li>
                    Incorporate light social features like reading circles or
                    challenges
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Initial Requirements
                </h3>
                <ul className="list-disc list-inside mt-2  space-y-1">
                  <li>Mobile-first experience with offline reading mode</li>
                  <li>Progress tracking, streaks, and badge systems</li>
                  <li>Minimal setup/onboarding flow to reduce friction</li>
                  <li>Data privacy and parental oversight features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Phase */}
        <section className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Palette className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                Design Process
              </h2>
            </div>
          </div>
          <div className="p-6 ">
            <p>
              Design sketches and wireframes are in early development. Future
              iterations will include user feedback and incorporate playful,
              accessible interfaces for young readers.
            </p>
          </div>
        </section>

        {/* Realisation Phase */}
        <section className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Wrench className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                Realisation
              </h2>
            </div>
          </div>
          <div className="p-6 ">
            <p>
              I’ll be building the app after the design phase is done. Planning
              to use React Native for the mobile side and Firebase to handle
              backend stuff like data and auth.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
