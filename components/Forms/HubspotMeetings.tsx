"use client";

import React, { useEffect, useRef } from "react";

const MEETINGS_SRC = "https://meetings.hubspot.com/chad-folkening?embed=true";
const EMBED_SCRIPT =
  "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

const HubspotMeetings = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.querySelector(
      `script[src="${EMBED_SCRIPT}"]`,
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="meetings-iframe-container min-h-[680px] w-full"
      data-src={MEETINGS_SRC}
    ></div>
  );
};

export default HubspotMeetings;
