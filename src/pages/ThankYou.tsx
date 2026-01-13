import { useEffect } from "react";
import { logQueryParams, getQueryParams } from "@/lib/queryLogger";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  const params = getQueryParams();
  const surveyName = params.survey_name || "{survey name}";
  const topic = params.topic || "";
  const emailId = params.email_id || "";

  useEffect(() => {
    logQueryParams();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-[10%] py-8 font-roboto">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            style={{ height: '2rem', width: 'auto' }} 
            alt="ThriveStack Logo" 
            src="https://thrivestack-temp-static-assets.s3.amazonaws.com/logo_full.png" 
          />
        </div>
        
        {/* Thank You Card */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <div className="text-center space-y-6">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="rounded-full bg-thrive-blue/10 p-4">
                <CheckCircle className="h-12 w-12 text-thrive-blue" />
              </div>
            </div>
            
            {/* Main Message */}
            <div className="space-y-3">
              <h1 className="text-2xl font-bold tracking-tight text-gray-700">
                Thank You
              </h1>
              <p className="text-base font-normal text-gray-700">
                Thank you for completing the <span className="font-medium text-thrive-blue">{surveyName}</span>
              </p>
            </div>

            {/* Personalized Details */}
            {(topic || emailId) && (
              <div className="pt-4 space-y-3 border-t border-border">
                {topic && (
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Selected Topic
                    </p>
                    <p className="text-base font-medium text-gray-700">
                      {topic}
                    </p>
                  </div>
                )}
                
                {emailId && (
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Email
                    </p>
                    <p className="text-sm font-normal text-gray-700">
                      {emailId}
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {/* Footer Message */}
            <div className="pt-4">
              <p className="text-sm font-normal text-gray-500">
                Your feedback helps us improve our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
