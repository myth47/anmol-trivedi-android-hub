
import { Square, Circle, GalleryHorizontal, GalleryVertical } from "lucide-react";

interface ProjectLogoProps {
  projectKey: "mental-health-ai" | "blinkit-clone";
}

const LOGO_MAP: Record<string, { color: string; icon: React.ReactNode }> = {
  "mental-health-ai": {
    // Friendly soft green circle with a health-themed icon
    color: "bg-android-green shadow-lg",
    icon: <Circle size={32} className="text-white drop-shadow-md" strokeWidth={2.5} />,
  },
  "blinkit-clone": {
    // Soft yellow with a box/grid icon (shopping/delivery)
    color: "bg-yellow-400 shadow-lg",
    icon: <GalleryVertical size={32} className="text-white drop-shadow-md" strokeWidth={2.5} />,
  },
};

const ProjectLogo = ({ projectKey }: ProjectLogoProps) => {
  const entry = LOGO_MAP[projectKey];
  if (!entry) return null;

  return (
    <div
      className={`flex items-center justify-center rounded-full w-16 h-16 border-4 border-white ${entry.color} -mt-8 z-20 relative material-shadow`}
      style={{
        boxShadow: "0 6px 20px rgba(0,0,0,0.10), 0 1.5px 6px rgba(61, 220, 132, 0.08)"
      }}
    >
      {entry.icon}
    </div>
  );
};

export default ProjectLogo;
