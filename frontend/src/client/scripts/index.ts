import { SecurityChecks } from "@scsa/messaging";
import { App } from "./App";
import { cfg } from "../../config";

new App(cfg.CURRENT, cfg.PARENT, new SecurityChecks(cfg.endpoints()));
