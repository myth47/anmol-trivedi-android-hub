
import { MapPin, Phone, Mail, Linkedin, Github, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    
    try {
      // Send the form data using the formsubmit.co service
      const form = e.target as HTMLFormElement;
      const formElement = document.createElement('form');
      formElement.method = 'POST';
      formElement.action = 'https://formsubmit.co/anmoltrvd01@gmail.com';
      formElement.target = '_blank';
      
      // Add form data
      for (const [key, value] of Object.entries(formData)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        formElement.appendChild(input);
      }
      
      // Add redirect
      const redirectInput = document.createElement('input');
      redirectInput.type = 'hidden';
      redirectInput.name = '_next';
      redirectInput.value = window.location.href;
      formElement.appendChild(redirectInput);
      
      // No captcha
      const captchaInput = document.createElement('input');
      captchaInput.type = 'hidden';
      captchaInput.name = '_captcha';
      captchaInput.value = 'false';
      formElement.appendChild(captchaInput);
      
      document.body.appendChild(formElement);
      formElement.submit();
      document.body.removeChild(formElement);
      
      // Show success message
      setSubmitStatus({ 
        type: "success", 
        message: "Message sent successfully! Check your email for confirmation." 
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({ 
        type: "error", 
        message: "Failed to send message. Please try again later." 
      });
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Send a Message
            </CardTitle>
            <CardDescription>
              I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitStatus.type && (
              <Alert 
                variant={submitStatus.type === "success" ? "default" : "destructive"}
                className={`mb-4 ${submitStatus.type === "success" ? "border-green-500 text-green-500" : ""}`}
              >
                <AlertDescription>{submitStatus.message}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit} id="contact-form" className="space-y-4">
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
              form="contact-form"
              className="w-full bg-android-green hover:bg-android-green/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
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
