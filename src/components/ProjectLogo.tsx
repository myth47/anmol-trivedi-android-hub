
import { Badge, Heart, ShoppingBag } from "lucide-react";

interface ProjectLogoProps {
  projectKey: "mental-health-ai" | "blinkit-clone";
}

const LOGO_MAP: Record<string, { color: string; icon: React.ReactNode }> = {
  "mental-health-ai": {
    color: "bg-android-green",
    icon: <Heart size={28} className="text-white" />,
  },
  "blinkit-clone": {
    color: "bg-yellow-400",
    icon: <ShoppingBag size={28} className="text-white" />,
  },
};

const ProjectLogo = ({ projectKey }: ProjectLogoProps) => {
  const entry = LOGO_MAP[projectKey];
  if (!entry) return null;

  return (
    <div className={`flex items-center justify-center rounded-full w-16 h-16 shadow-md ${entry.color} mb-3 border-2 border-white -mt-8 z-20 relative`}>
      {entry.icon}
    </div>
  );
};

export default ProjectLogo;
