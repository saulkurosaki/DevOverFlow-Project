import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { JobFilters } from "@/constants/filters";
import React from "react";

const Jobs = () => {
  return (
    <div className="w-full max-w-5xl">
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/jobs"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Job Title, Company, or Keywords"
          otherClasses="flex-1"
        />
        <Filter
          filters={JobFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="light-border mb-9 mt-11 flex flex-col gap-9 border-b pb-9"></section>
    </div>
  );
};

export default Jobs;
