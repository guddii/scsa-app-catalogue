import {
    EventDrivenConsumerMS,
    IEventDrivenConsumer,
    Logger,
    Message
} from "@scsa/messaging";
import { cfg } from "../../config";

const eventDrivenConsumer = new EventDrivenConsumerMS(cfg);

export class Iframe implements IEventDrivenConsumer {
    public button = document.querySelector("button");
    private logger: Logger;

    constructor() {
        eventDrivenConsumer.subscribe(this);

        if (this.button) {
            this.button.addEventListener("click", this.handleClick);
        }

        this.logger = new Logger();
    }

    public handleClick(event) {
        eventDrivenConsumer.publish(
            new Message({ product: { name: "Test Product" } })
        );
    }

    public callback(data) {
        this.logger.write(data);
    }
}

const iframe = new Iframe();
