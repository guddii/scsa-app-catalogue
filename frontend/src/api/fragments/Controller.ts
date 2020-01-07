import {
    EventDrivenConsumerGT,
    IEventDrivenConsumer,
    Logger,
    Message
} from "@scsa/messaging";
import "../../client/index.css";
import { cfg } from "../../config";

interface IIframeOptions {
    ctx?: Element | Document;
    edc?: any;
}

export class Controller implements IEventDrivenConsumer {
    public button = document.querySelector("button");
    private logger: Logger;
    private options: IIframeOptions;

    constructor(
        options: IIframeOptions = {
            ctx: document,
            edc: new EventDrivenConsumerGT(cfg)
        }
    ) {
        this.options = options;
        this.options.edc.subscribe(this);

        this.logger = new Logger({
            ctx: options.ctx
        });
    }

    public handleSearchRequest(data) {
        if (data.payload.search) {
            this.options.edc.publish(
                new Message({ found: { products: ["Product 1"] } })
            );
        }
    }

    public callback(data) {
        this.logger.write(data);
        this.handleSearchRequest(data);
    }
}
