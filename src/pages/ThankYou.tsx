import { useEffect } from "react";
import { logQueryParams, getQueryParams } from "@/lib/queryLogger";
import { CheckCircle, Sparkles } from "lucide-react";

const ThankYou = () => {
  const params = getQueryParams();
  const surveyName = params.survey_name || "{survey name}";
  const topic = params.topic || "";
  const emailId = params.email_id || "";

  useEffect(() => {
    logQueryParams();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col items-center justify-center px-[10%] py-12 font-roboto">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-thrive-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-thrive-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-lg space-y-10 animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            className="h-10 w-auto drop-shadow-sm transition-transform duration-300 hover:scale-105" 
            alt="ThriveStack Logo" 
            src="https://thrivestack-temp-static-assets.s3.amazonaws.com/logo_full.png" 
          />
        </div>
        
        {/* Thank You Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-thrive-blue/5 border border-white/50 relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-thrive-blue/5 pointer-events-none" />
          
          <div className="relative text-center space-y-8">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-thrive-blue/20 rounded-full blur-xl animate-pulse" />
                <div className="relative rounded-full bg-gradient-to-br from-thrive-blue/10 to-thrive-blue/20 p-5 ring-4 ring-thrive-blue/10">
                  <CheckCircle className="h-14 w-14 text-thrive-blue" strokeWidth={1.5} />
                </div>
                <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-thrive-blue/60" />
              </div>
            </div>
            
            {/* Main Message */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-800">
                Thank You!
              </h1>
              <p className="text-base font-normal text-gray-600 leading-relaxed">
                Thank you for completing the <br />
                <span className="font-medium text-thrive-blue">{surveyName}</span>
              </p>
            </div>

            {/* Personalized Details */}
            {(topic || emailId) && (
              <div className="pt-6 space-y-4 border-t border-gray-100">
                {emailId && (
                  <div className="bg-gradient-to-r from-gray-50 to-transparent rounded-lg p-4 text-left">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                      Submitted by
                    </p>
                    <p className="text-sm font-medium text-thrive-blue">
                      {emailId}
                    </p>
                  </div>
                )}

                {topic && (
                  <div className="bg-gradient-to-r from-gray-50 to-transparent rounded-lg p-4 text-left">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                      Selected Topic
                    </p>
                    <p className="text-sm font-medium text-gray-700">
                      {topic}
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {/* Footer Message */}
            <div className="pt-6">
              <p className="text-sm font-normal text-gray-400">
                Your feedback helps us improve our services.
              </p>
            </div>
          </div>
        </div>

        {/* Footer branding */}
        <div className="text-center">
          <p className="text-xs text-gray-400">
            Powered by <span className="font-medium text-gray-500">ThriveStack</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
