import { cfg } from "../../config";
import "../../client/index.css";
import { Controller } from "./Controller";

const selector = `[data-endpoint="${cfg.CURRENT.options.text}"]`;
new Controller({
    ctx: document.querySelector(selector)
});
