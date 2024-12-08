import Typography from "@/components/ui/typography";

interface CardProps {
  title: string;
  subtitle?: string;
  date: string;
  icon: string;
  children?: React.ReactNode;
  width?: number;
}

export default function Card({
  title,
  date,
  icon,
  children,
  width,
  subtitle,
}: CardProps) {
  return (
    <div className="flex flex-col rounded-lg border-[1px] border-neutral-800 p-3 md:p-4">
      <div className="flex flex-col items-center justify-between text-center md:flex-row md:text-start">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="rounded-md bg-neutral-900 p-1">
            <img
              src={`/icon/${icon}.png`}
              alt={icon}
              className="h-10 w-10 object-cover"
              style={width ? { width: `${width}px` } : undefined}
            />
          </div>
          <div>
            <Typography variant="h3" className="md:w-[320px] lg:w-[400px]">
              {title}
            </Typography>
            {subtitle && <Typography variant="body">{subtitle}</Typography>}
          </div>
        </div>
        <Typography variant="h4">{date}</Typography>
      </div>
      <hr className="mb-1 mt-3 border-t-[1px] border-dashed border-neutral-800"></hr>
      <div className="flex flex-col md:flex-row md:gap-1">{children}</div>
    </div>
  );
}
