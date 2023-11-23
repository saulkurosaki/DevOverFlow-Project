import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  // {
  //   _id: 1,
  //   title: "Cascading Deletes in SQLAlchemy?",
  //   tags: [
  //     { _id: 1, name: "python" },
  //     { _id: 2, name: "sql" },
  //   ],
  //   author: "John Doe",
  //   upvotes: 10,
  //   views: 100,
  //   answers: 2,
  //   createdAt: "2023-11-23T12:00:00.000Z",
  // },
  // {
  //   _id: 2,
  //   title: "How do I use Express as a custom server in NextJS",
  //   tags: [
  //     { _id: 1, name: "next13" },
  //     { _id: 2, name: "express" },
  //   ],
  //   author: "John Doe",
  //   upvotes: 10,
  //   views: 100,
  //   answers: 2,
  //   createdAt: "2023-11-23T12:00:00.000Z",
  // },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => "QuestionCard")
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first t break the silence! 🚀 Ask a Question and kickstart the
            discussion. Our query could be the next big thing others learn from. Get
            involved!💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
