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
