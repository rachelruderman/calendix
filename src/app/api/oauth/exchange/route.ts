import { nylas, nylasConfig } from "@/libs/nylas";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return Response.json("No authorization code returned from Nylas", {
      status: 400,
    });
  }

  const response = await nylas.auth.exchangeCodeForToken({
    clientSecret: nylasConfig.apiKey,
    clientId: nylasConfig.clientId, // Note this is *different* from your API key
    redirectUri: nylasConfig.callbackUri, // URI you registered with Nylas in the previous step
    code,
  });
  const { grantId, email } = response;

  // You'll use this grantId to make API calls to Nylas perform actions on
  // behalf of this account. Store this in a database, associated with a user
  console.log(response.grantId);

  // This depends on implementation. If the browser is hitting this endpoint
  // you probably want to use res.redirect('/some-successful-frontend-url')
  res.json({
    message: "OAuth2 flow completed successfully for grant ID: " + grantId,
  });
}
