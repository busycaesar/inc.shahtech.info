import React from "react";
import Logo from "@/../public/logos.png";
import Image from "next/image";

export default function SuperScriptLogo({ width }) {
  return (
    <sup className="inline-block">
      <Image src={Logo} alt="company logo" width={width || 100} />
    </sup>
  );
}
