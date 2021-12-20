import { UnleashClient } from "unleash-proxy-client";

const UNLEASH_URL = (import.meta.env.VITE_UNLEASH_URL as string) ?? "";
const UNLEASH_CLEANT_KEY =
  (import.meta.env.VITE_UNLEASH_CLEANT_KEY as string) ?? "";
const UNLEASH_APP_NAME =
  (import.meta.env.VITE_UNLEASH_APP_NAME as string) ?? "";

const unleash = new UnleashClient({
  url: UNLEASH_URL,
  clientKey: UNLEASH_CLEANT_KEY,
  appName: UNLEASH_APP_NAME,
});

unleash.updateContext({ userId: "web-client" });

export const startUnleash = async () => {
  await unleash.start();
};

export const getFeatureToggle = () => {
  return unleash.getAllToggles();
};

export class FlagSelector {}

export class AllFlagsSelector {}
