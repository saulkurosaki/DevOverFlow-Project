import React from "react";
import Link from "next/link";
import Image from "next/image";

import { topQuestions, popularTags } from "@/constants";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar fixed right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((item) => (
            <Link
              href={item.route}
              key={item.route}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{item.label}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt={item.label}
                width={20}
                height={20}
                className="invert-colors bg-transparent"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className="flex justify-between gap-2"
            >
              <div className="subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300">
                {item.tag}
              </div>
              <p className="small-medium text-dark500_light700">
                {item.tagNum}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
