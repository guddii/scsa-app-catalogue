import {
  EventDrivenConsumer,
  IEventDrivenConsumer,
  Logger,
  Message
} from "@scsa/messaging";
import { cfg } from "../../config";
import "../../client/index.css";

const eventDrivenConsumer = new EventDrivenConsumer(cfg);

interface IframeOptions {
  ctx?: Element | Document;
}

export class Controller implements IEventDrivenConsumer {
  button = document.querySelector("button");
  private logger: Logger;

  constructor(options: IframeOptions = { ctx: document }) {
    eventDrivenConsumer.subscribe(this);

    const button = options.ctx.querySelector("button");
    button.addEventListener("click", this.handleClick);

    this.logger = new Logger({
      ctx: options.ctx
    });
  }

  handleClick(event) {
    eventDrivenConsumer.publish(
      new Message({ add: { products: ["Product 1"] } })
    );
  }

  callback(data) {
    this.logger.write(data);
  }
}
