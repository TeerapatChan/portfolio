export default function SkillCard({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {
  return (
    <div className="flex flex-row items-center gap-2 rounded-lg border-[1px] border-neutral-800 bg-neutral-900 px-2 py-1 md:px-3 md:py-2">
      <div className="flex items-center justify-center">
        <img
          src={`/icon/skill/${icon}`}
          alt="programming-languages"
          className="h-6 w-6 rounded-sm object-contain lg:h-8 lg:w-8"
        />
      </div>
      <p className="lg:text-md text-sm xl:text-[18px]">{title}</p>
    </div>
  );
}
