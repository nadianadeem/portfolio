"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { type ReactNode } from "react";

export const DescriptionSection = () => {
  const t = useTranslations("description-section");
  const pixelPerfect = (chunks: ReactNode) => (
    <span className="relative inline-flex w-fit">
      <Image
        alt=""
        className="animate-spark absolute bottom-0 -left-1 h-3 w-3"
        height={12}
        src="/sparkle.png"
        width={12}
      />
      <Image
        alt=""
        className="animate-spark2 absolute top-0 left-4 h-2 w-2"
        height={12}
        src="/sparkle.png"
        width={12}
      />
      <Image
        alt=""
        className="animate-spark absolute -bottom-2 left-9 h-1.5 w-1.5"
        height={12}
        src="/sparkle.png"
        width={12}
      />
      <Image
        alt=""
        className="animate-spark1 absolute -top-0.5 left-14 h-2.5 w-2.5"
        height={12}
        src="/sparkle.png"
        width={12}
      />
      <Image
        alt=""
        className="animate-spark absolute -top-1 -right-3 h-4 w-4 delay-75"
        height={12}
        src="/sparkle.png"
        width={12}
      />
      {chunks}
    </span>
  );

  const paragraphs = [
    t("paragraphs.hello"),
    t.rich("paragraphs.craft", { pixelPerfect }),
    t("paragraphs.learn"),
    t("paragraphs.life"),
    t.rich("paragraphs.life-extended", { pixelPerfect }),
  ];

  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
    </div>
  );
};
