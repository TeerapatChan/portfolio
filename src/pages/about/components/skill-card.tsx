import { H3, H4 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { expertise } from "../constant";

type SkillCardProps = {
  name: string;
  skills: Map<string, string>;
};

export default function SkillCard({ name, skills }: SkillCardProps) {
  const isExpert = checkExpertise(name);
  return (
    <div
      className={cn(
        "flex flex-row gap-2 items-center bg-neutral-800 p-2 rounded-lg",
        isExpert ? "border-primary border-2" : "border border-neutral-500"
      )}
    >
      {skills.get(name) && (
        <img src={skills.get(name)} alt={name} className="w-8 h-8" />
      )}
      <H4>{name}</H4>
    </div>
  );
}

function checkExpertise(name: string) {
  return expertise.includes(name);
}
