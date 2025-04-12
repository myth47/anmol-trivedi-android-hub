
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Ujjain (M.P.), India",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9303744650",
      href: "tel:+919303744650"
    },
    {
      icon: Mail,
      label: "Email",
      value: "anmoltrvd01@gmail.com",
      href: "mailto:anmoltrvd01@gmail.com"
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anmoltrvd01",
      href: "https://www.linkedin.com/in/anmoltrvd01"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/anmoltrvd01",
      href: "https://github.com/anmoltrvd01"
    },
  ];

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 reveal">
          <p className="text-lg text-muted-foreground">
            Feel free to contact me for any work or suggestions or just to say hi!
          </p>
          
          <Card>
            <CardContent className="p-6 space-y-4">
              {contactInfo.map((item, index) => (
                <ContactItem 
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                />
              ))}
              
              <div className="border-t pt-4 mt-4">
                {socialLinks.map((item, index) => (
                  <ContactItem 
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                    href={item.href}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="reveal">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px]"
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-android-green hover:bg-android-green/90"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

const ContactItem = ({ icon: Icon, label, value, href }: { 
  icon: any;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <>
      <div className="p-2 rounded-md bg-primary/10 text-primary">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </>
  );
  
  return (
    <div className="flex items-center gap-3">
      {href ? (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-android-green transition-colors"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default Contact;
