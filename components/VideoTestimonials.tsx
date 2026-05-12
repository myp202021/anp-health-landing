"use client";

import { useState } from "react";

const videos = [
  { id: "VIDEO_ID_1", label: "Testimonio 1" },
  { id: "VIDEO_ID_2", label: "Testimonio 2" },
  { id: "VIDEO_ID_3", label: "Testimonio 3" },
  { id: "VIDEO_ID_4", label: "Testimonio 4" },
  { id: "VIDEO_ID_5", label: "Testimonio 5" },
  { id: "VIDEO_ID_6", label: "Testimonio 6" },
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Videos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Escucha sus historias
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Enfermeros que ya están en camino a ejercer en Estados Unidos
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video.id)}
              className="group relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/5 hover:border-teal/30 transition-all"
            >
              {/* Placeholder thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-lighter to-navy flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-teal/30 group-hover:scale-110 transition-all">
                    <svg
                      className="w-6 h-6 text-teal ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-slate text-xs group-hover:text-white transition-colors">
                    {video.label}
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-teal/10 to-transparent" />
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              Cerrar
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Video testimonio"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
