import React from "react";
import SuperScriptLogo from "@/components/common/super-script-logo";
import Image from "next/image";
import DevProfile from "@/../public/dev-profile.jpeg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OurTeam() {
  return (
    <>
      <h1 className="text-center items-baseline md:text-[7em] text-[3em] my-10 font-bold">
        Our Team
        <SuperScriptLogo className="md:w-30 w-15" />
      </h1>
      <Card>
        <CardHeader className="text-center">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="rounded-full overflow-hidden border-2 border-black">
              <Image
                src={DevProfile}
                alt="Dev"
                className="w-64 object-cover rounded-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-[2em] font-bold">Dev J. Shah</h2>
              <p className="text-[1.5em] font-semibold">AI Evangelist</p>
              <div className="flex gap-2 justify-center my-3">
                <Button className="text-xl">Blogs</Button>
                <Button className="text-xl">Videos</Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            Dev creates all content and manages every aspect of Developer
            Relations at ShahTech Inc. This includes writing technical blogs,
            producing video tutorials, delivering presentations at conferences
            and webinars, and interacting directly with developer communities to
            gather feedback. Dev ensures that all services provided by ShahTech
            Inc are executed with consistency, professionalism, and a deep
            understanding of both developer needs and product goals.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
