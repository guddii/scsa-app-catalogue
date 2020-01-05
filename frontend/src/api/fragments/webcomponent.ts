import {
    EventDrivenConsumerMS,
    IEventDrivenConsumer,
    Logger,
    Message
} from "@scsa/messaging";
import "../../client/index.css";
import { cfg } from "../../config";
import entry from "../../server/views/partials/entry.pug";
import thin from "../../server/views/partials/thin.pug";

const eventDrivenConsumer = new EventDrivenConsumerMS(cfg);

class CatalogueStock extends HTMLElement implements IEventDrivenConsumer {
    private logger: Logger;

    constructor() {
        super();

        this.render();

        this.logger = new Logger({ ctx: this.shadowRoot });

        eventDrivenConsumer.subscribe(this);
    }

    public render() {
        const template = document.createElement("template");
        template.innerHTML += entry();
        template.innerHTML += `<link type="text/css" rel="stylesheet" href="${cfg
            .CURRENT.options.url + "api/fragments/webcomponent.css"}">`;
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
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

// tslint:disable-next-line:max-classes-per-file
class CatalogueList extends HTMLElement implements IEventDrivenConsumer {
    private logger: Logger;

    constructor() {
        super();

        this.render();

        this.logger = new Logger({ ctx: this.shadowRoot });

        eventDrivenConsumer.subscribe(this);
    }

    public render() {
        const template = document.createElement("template");
        template.innerHTML += thin();
        template.innerHTML += `<link type="text/css" rel="stylesheet" href="${cfg
          .CURRENT.options.url + "api/fragments/webcomponent.css"}">`;
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
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

window.customElements.define("catalogue-list", CatalogueList);
window.customElements.define("catalogue-stock", CatalogueStock);
