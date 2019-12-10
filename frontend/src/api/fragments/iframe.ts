import {
    EventDrivenConsumer,
    IEventDrivenConsumer,
    LoggerSingleton,
    Message
} from "@scsa/messaging";
import { cfg } from "../../config";

const eventDrivenConsumer = new EventDrivenConsumer(cfg);

export class Iframe implements IEventDrivenConsumer {
    button = document.querySelector("button");
    private logger: LoggerSingleton;

    constructor() {
        if (top === self) {
            console.warn("This system was not instantiated in an iFrame");
        }
        eventDrivenConsumer.subscribe(this);

        if (this.button) {
            this.button.addEventListener("click", this.handleClick);
        }

        this.logger = LoggerSingleton.getInstance();
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

new Iframe();
