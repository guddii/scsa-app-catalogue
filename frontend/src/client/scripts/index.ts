import {
    EventDrivenConsumer,
    IEventDrivenConsumer,
    Logger,
    Message
} from "@scsa/messaging";
import { cfg } from "../../config";

const eventDrivenConsumer = new EventDrivenConsumer(cfg);

export class Iframe implements IEventDrivenConsumer {
    button = document.querySelector("button");
    private logger: Logger;

    constructor() {
        eventDrivenConsumer.subscribe(this);

        if (this.button) {
            this.button.addEventListener("click", this.handleClick);
        }

        this.logger = new Logger();
    }

    handleClick(event) {
        eventDrivenConsumer.publish(
            new Message({ product: { name: "Test Product" } })
        );
    }

    callback(data) {
        this.logger.write(data);
    }
}

new Iframe();
