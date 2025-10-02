import { plPL } from "@clerk/localizations";

export const clerkLocale = {
  ...plPL,
  signUp: {
    ...plPL.signUp,
    start: {
      ...plPL.signUp?.start,
      subtitle: "", // usuwa „aby kontynuować w {{applicationName}}”
    },
  },
  signIn: {
    ...plPL.signIn,
    start: {
      ...plPL.signIn?.start,
      subtitle: "", // analogicznie dla logowania
    },
  },
};
