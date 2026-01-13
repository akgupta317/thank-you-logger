import { useEffect } from "react";
import { logQueryParams } from "@/lib/queryLogger";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    logQueryParams();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            style={{ height: '1.5rem', width: 'auto' }} 
            alt="ThriveStack Logo" 
            src="https://thrivestack-temp-static-assets.s3.amazonaws.com/logo_full.png" 
          />
        </div>
        
        {/* Thank You Card */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Thank You
            </h1>
            <p className="text-muted-foreground text-lg">
              We appreciate you taking the time to complete our survey.
            </p>
          </div>
          
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              Your feedback helps us improve our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
