
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education & Certification</h2>
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <Card className="android-card reveal">
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <div className="p-2 bg-primary/10 rounded-md">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle>Bachelor of Technology in Computer Science and Business System</CardTitle>
                <CardDescription className="text-base">
                  School of Information Technology, UTD, Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Expected Graduation</p>
                <span className="font-medium">2026</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="android-card reveal">
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <div className="p-2 bg-primary/10 rounded-md">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle>Introduction to C++</CardTitle>
                <CardDescription className="text-base">
                  Simplilearn
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Credential ID: 4782685</p>
                <span className="font-medium">Issued Jan 2024</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
