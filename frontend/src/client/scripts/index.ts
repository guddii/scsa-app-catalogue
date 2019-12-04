import { SecurityChecks } from "@scsa/messaging";
import { Applications } from "./Constants";
import { App } from "./App";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const secureContexts = Object.values(Applications).map((a: any) => a.url.host);
const securityChecks = new SecurityChecks(secureContexts);

console.log(secureContexts);

new App(Applications.MAIN, Applications.PARENT, securityChecks);
