import React from "react";
import SuperScriptLogo from "@/components/common/super-script-logo";
import Image from "next/image";
import DevProfile from "@/../public/dev-profile.jpeg";

export default function OurTeam() {
  return (
    <>
      <h1 className="text-center items-baseline text-[5em] my-10 font-bold">
        Our Team
        <SuperScriptLogo />
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        <div className="w-200 rounded-full overflow-hidden border-3 border-black">
          <Image
            src={DevProfile}
            alt="Dev"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-[2em] font-bold">Dev J. Shah</h2>
          <p className="text-[1.5em] font-semibold">AI Evangelist</p>
          <p className="mt-2 text-gray-600">
            Dev creates all content and manages every aspect of Developer
            Relations at ShahTech Inc. This includes writing technical blogs,
            producing video tutorials, delivering presentations at conferences
            and webinars, and interacting directly with developer communities to
            gather feedback. Dev ensures that all services provided by ShahTech
            Inc are executed with consistency, professionalism, and a deep
            understanding of both developer needs and product goals.
          </p>
        </div>
      </div>
    </>
  );
}
