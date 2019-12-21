import { EventDrivenConsumerMS } from "@scsa/messaging";
import "../../client/index.css";
import { cfg } from "../../config";
import { Controller } from "./Controller";

const selector = `[data-endpoint="${cfg.CURRENT.options.text}"]`;
const controller = new Controller({
    ctx: document.querySelector(selector),
    edc: new EventDrivenConsumerMS(cfg)
});
