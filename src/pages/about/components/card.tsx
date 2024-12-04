import { H4, H3 } from "@/components/ui/typography";
import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  subtitle: string;
  date: string;
  link?: string;
};

export function Card({ title, subtitle, date, link }: CardProps) {
  return (
    <div className="flex flex-col gap-2 bg-neutral-800 p-6 rounded-lg border border-neutral-500">
      <div className="flex flex-row justify-between items-center">
        {link ? (
          <Link to={link}>
            <H3
              className="font-bold hover:cursor-pointer 
    hover:bg-gradient-to-r hover:from-primary hover:to-sky-300 
    hover:text-transparent hover:bg-clip-text"
            >
              {title}
            </H3>
          </Link>
        ) : (
          <H3 className="font-bold">{title}</H3>
        )}
        <H4>{date} </H4>
      </div>
      <H4>{subtitle}</H4>
    </div>
  );
}
