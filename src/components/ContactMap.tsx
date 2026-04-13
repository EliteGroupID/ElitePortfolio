"use client";

import { useState } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

interface ContactMapProps {
  className?: string;
}

export function ContactMap({ className = "" }: ContactMapProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const mapCenter = { lat: -6.2088, lng: 106.8456 }; // Jakarta coordinates
  const markerPosition = { lat: -6.2088, lng: 106.8456 };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-neutral-900 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Map Container */}
      <div className="relative aspect-[4/3] w-full">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.469465423244!2d106.84338957464137!3d-6.208763416608003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8f7f7f7f7%3s0x2e69f3e8f7f7f7f7!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoading(false)}
          className={`transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <p className="text-sm text-neutral-500">Loading map...</p>
            </div>
          </div>
        )}

        {/* Location Card Overlay (always visible) */}
        <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-md rounded-xl p-4 border border-white/10">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-white mb-1">
                ELITECH ID.
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Jakarta, Indonesia
                <br />
                Remote Worldwide
              </p>
            </div>
          </div>

          {/* Get Directions Button */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${mapCenter.lat},${mapCenter.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center space-x-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg px-4 py-2.5 text-xs text-white/80 hover:text-white transition-all duration-300 group"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Map attribution overlay */}
        <div className="absolute bottom-0 right-0 px-2 py-1 text-[10px] text-neutral-600 bg-[#0a0a0a]/80 rounded-tl-lg">
          Google Maps
        </div>
      </div>
    </div>
  );
}

export default ContactMap;
