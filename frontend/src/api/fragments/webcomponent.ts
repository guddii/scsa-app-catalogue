import {
    EventDrivenConsumerMS,
    IEventDrivenConsumer,
    Logger,
    Message
} from "@scsa/messaging";
import "../../client/index.css";
import { cfg } from "../../config";
import tpl from "../../server/views/partials/entry.pug";

const eventDrivenConsumer = new EventDrivenConsumerMS(cfg);

class CatalogueStock extends HTMLElement implements IEventDrivenConsumer {
    private logger: Logger;

    constructor() {
        super();

        this.render();

        const button = this.shadowRoot.querySelector("button");
        button.addEventListener("click", this.handleClick);

        this.logger = new Logger({ ctx: this.shadowRoot });

        eventDrivenConsumer.subscribe(this);
    }

    public render() {
        const template = document.createElement("template");
        template.innerHTML += tpl();
        template.innerHTML += `<link type="text/css" rel="stylesheet" href="${cfg
            .CURRENT.options.url + "api/fragments/webcomponent.css"}">`;
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    public handleClick(event) {
        eventDrivenConsumer.publish(
            new Message({ add: { products: ["Product 1"] } })
        );
    }

    public handleSearchRequest(data) {
        if (data.payload.search) {
            eventDrivenConsumer.publish(
                new Message({ found: { products: ["Product 1"] } })
            );
        }
    }

    public callback(data) {
        this.logger.write(data);
        this.handleSearchRequest(data);
    }
}

window.customElements.define("catalogue-stock", CatalogueStock);
