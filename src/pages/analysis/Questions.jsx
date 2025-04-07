import React from 'react';

export default function Questions() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Research Questions & Design Challenges
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Main Research Question</h2>
        <p className="text-gray-700 leading-relaxed">
          How can a mobile application utilizing gamification, data and AI, effectively increase reading engagement among young people from ages ranging between 12–25 during leisure time at home?
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Subquestions</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>What causes young people to lose interest in long-form reading?</li>
          <li>How do teachers currently try to motivate reading?</li>
          <li>What tech do young people already use for entertainment and learning?</li>
          <li>What kind of reading content feels most accessible to non-readers?</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Design Challenges (HMW)</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>How might we make reading feel as rewarding as other forms of entertainment such as scrolling social media and gaming?</li>
          <li>How might we use gamification to build strong reading habits?</li>
          <li>How might we design reading challenges that feel personal and fun?</li>
          <li>How might we help teachers and parents to support the reader?</li>
        </ul>
      </section>
    </div>
  );
}
