import React from 'react';

export default function Brainstorming() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Brainstorming</h1>

      <p className="text-gray-700 mb-6">
        I've added an embedded Miro board contains early ideas and thought
        mapping for the reading app. It's a visual overview of my initial
        brainstorming and ideation process.
      </p>

      <div className="aspect-video w-full border border-gray-300 rounded-md overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://miro.com/app/live-embed/uXjVIPT7Ya4=/?moveToViewport=-1061,-1153,3599,1968&embedId=457591811614"
          frameBorder="0"
          scrolling="no"
          allow="fullscreen; clipboard-read; clipboard-write"
          allowFullScreen
          title="Miro Brainstorm Board"
        />
      </div>
    </div>
  );
}
