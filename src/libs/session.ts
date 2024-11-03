import nextAppSession from "next-app-session";

type MySessionData = {
  grantId?: string;
  email?: string;
};

export const session = nextAppSession<MySessionData>({
  name: "SID",
  secret: "",
});
