// Declare thriveStack as a global variable
declare global {
  interface Window {
    thriveStack: {
      track: (events: Array<{
        event_name: string;
        properties: Record<string, string>;
        user_id: string;
        timestamp: string;
      }>) => void;
    };
  }
}

const thriveStack = typeof window !== 'undefined' ? window.thriveStack : null;

/**
 * Get email_id from query string parameter
 * @returns The email_id value from query string, or "unknown" if not found
 */
export function GetEmailIdFromQueryString(): string {
  const urlParams = new URLSearchParams(window.location.search);
  const emailId = urlParams.get('email_id');
  return emailId || 'unknown';
}

/**
 * Central utility function to log query string parameters
 * This function parses the current URL's query parameters and logs them to the console
 */
export function logQueryParams(): void {
  const urlParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};

  urlParams.forEach((value, key) => {
    params[key] = value;
  });

  if (Object.keys(params).length > 0) {
    console.log("=== Query Parameters ===");
    if (thriveStack) {
      thriveStack.track([{
        "event_name": "survey_response",
        "properties": {
            ...params
        },
        "user_id": GetEmailIdFromQueryString(),
        "timestamp": new Date().toISOString()
      }]);
    }
  
    Object.entries(params).forEach(([key, value]) => {
      console.log(`- ${key}: ${value}`);
    });
    console.log("========================");
  } else {
    console.log("No query parameters found.");
  }
}

/**
 * Get query parameters as an object
 * @returns Record of query parameter key-value pairs
 */
export function getQueryParams(): Record<string, string> {
  const urlParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};

  urlParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
}
