import { nylas, nylasConfig } from "@/libs/nylas";
import { session } from "@/libs/session";
import { NextApiRequest } from "next";
import { redirect } from "next/navigation";

export async function GET(req: NextApiRequest) {
  const url = new URL(req.url!);
  const code = url.searchParams.get("code");

  if (!code) {
    return Response.json("No authorization code returned from Nylas", {
      status: 400,
    });
  }

  const codeExchangePayload = {
    clientSecret: nylasConfig.apiKey,
    clientId: nylasConfig.clientId!, // Note this is *different* from your API key
    redirectUri: nylasConfig.callbackUri, // URI you registered with Nylas in the previous step
    code,
  };
  const response = await nylas.auth.exchangeCodeForToken(codeExchangePayload);

  const { grantId, email } = response;

  // You'll use this grantId to make API calls to Nylas perform actions on
  // behalf of this account. Store this in a database, associated with a user
  console.log(response.grantId);

  await session().set("grantId", grantId);
  await session().set("email", email);

  redirect("/");
}
