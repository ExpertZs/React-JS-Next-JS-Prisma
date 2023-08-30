
export default async function getCookie(req, res) {
  // Read the "theme" cookie from the incoming request
  const themePreference = req.cookies.theme;

  // Create a JSON response with the user's preference
  const response = {
    theme: themePreference || 'No preference set',
  };

  // Return the JSON response
  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}
