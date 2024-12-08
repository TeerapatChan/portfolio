import Typography from "@/components/ui/typography";
import Card from "../card";
import { experience } from "../../constant";

export default function ExperienceSection() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Typography variant="h2">Experience</Typography>
      <Card
        title={experience[0].title}
        date={experience[0].date}
        icon="lmwn"
        width={80}
        subtitle={experience[0].subtitle}
      >
        <div>
          <Typography variant="body" className="text-neutral-400">
            - Designed and developed comprehensive test cases to ensure software
            quality and functionality.{" "}
          </Typography>
          <Typography variant="body" className="text-neutral-400">
            - Automated testing workflows using Jest and Playwright.
          </Typography>
        </div>
      </Card>
      <Card
        title={experience[1].title}
        date={experience[1].date}
        icon="mcv"
        subtitle={experience[1].subtitle}
      >
        <div>
          <Typography variant="body" className="text-neutral-400">
            - Implemented back-end services using Go, creating RESTful APIs.
          </Typography>
          <Typography variant="body" className="text-neutral-400">
            - Implemented and optimized the front-end using Next.js, creating
            responsive user interfaces.
          </Typography>
        </div>
      </Card>
    </div>
  );
}
