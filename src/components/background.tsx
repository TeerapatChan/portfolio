import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 h-full">
      <ShootingStars
        starHeight={8}
        starWidth={20}
        maxDelay={4000}
        minDelay={1000}
      />
      <StarsBackground starDensity={0.0003} allStarsTwinkle />
    </div>
  );
}
