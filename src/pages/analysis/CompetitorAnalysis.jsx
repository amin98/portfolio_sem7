import React from 'react';

export default function CompetitorAnalysis() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Competitor Analysis
      </h1>

      <section className="overflow-x-auto mb-10">
        <table className="min-w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-4 py-2">App</th>
              <th className="border px-4 py-2">Key Features</th>
              <th className="border px-4 py-2">Engagement Tools</th>
              <th className="border px-4 py-2">Strengths</th>
              <th className="border px-4 py-2">Weaknesses</th>
              <th className="border px-4 py-2">Takeaways</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="border px-4 py-2">Fable</td>
              <td className="border px-4 py-2">Book club, reading tracker</td>
              <td className="border px-4 py-2">Social goals, streaks, reminders, badges</td>
              <td className="border px-4 py-2">Integrated reading, wellness focused</td>
              <td className="border px-4 py-2">Minimal gamification. Not geared towards young people</td>
              <td className="border px-4 py-2">Combine social reading with minimal gamification</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Hooked</td>
              <td className="border px-4 py-2">Chat-based storytelling, short stories</td>
              <td className="border px-4 py-2">Time-limited reading</td>
              <td className="border px-4 py-2">Engaging for short attention spans</td>
              <td className="border px-4 py-2">Shallow content, limited reading value</td>
              <td className="border px-4 py-2">Chat style + cliffhangers = high engagement</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Wattpad</td>
              <td className="border px-4 py-2">Short stories from independent writers</td>
              <td className="border px-4 py-2">Likes, comments, follower system, story rankings</td>
              <td className="border px-4 py-2">Strong community, low entry barrier</td>
              <td className="border px-4 py-2">Open platform = inconsistent quality, not ideal for beginners</td>
              <td className="border px-4 py-2">Community and serial storytelling build habit</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Goodreads</td>
              <td className="border px-4 py-2">Book tracking</td>
              <td className="border px-4 py-2">Reading challenges</td>
              <td className="border px-4 py-2">Large book database</td>
              <td className="border px-4 py-2">Account required</td>
              <td className="border px-4 py-2">Goals + social features push consistency</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Takeaways and Considerations</h2>
        <p className="text-gray-700 mb-4">
          Successful reading apps rely on habit-building systems and social engagement. However, many fail to engage young or reluctant readers.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Use gamified systems (XP, streaks, quests) to build habit and reward progress.</li>
          <li>Short, cliffhanger-based content can ease users into deeper reading.</li>
          <li>Fable’s mindful and curated approach adds emotional relevance—consider mood- or goal-based reading paths.</li>
          <li>Bridging age groups is key—introduce peer accountability and friendly challenges for engagement.</li>
        </ul>
      </section>
    </div>
  );
}
