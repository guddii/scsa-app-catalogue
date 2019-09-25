import { MessageEndpoint } from "scsa-lib-messaging/src/endpoints/MessageEndpoint";
import { Message } from "scsa-lib-messaging/src/constructors/Message";
import { EndpointProperties } from "scsa-lib-messaging/src/endpoints/Endpoint";
import { SecurityChecks } from "scsa-lib-messaging/src/SecurityChecks";

export class App extends MessageEndpoint {
    button = document.querySelector("button");


    constructor(
        endpointProperties: EndpointProperties,
        mainProperties: EndpointProperties,
        securityChecks: SecurityChecks = new SecurityChecks()
    ) {
        super(endpointProperties, mainProperties, securityChecks);
        this.button.addEventListener("click", (event: MouseEvent) => {
            const target: HTMLElement = event.target as HTMLElement;
            this.publish(new Message({ product: { name: "Test Product" } }));
        });
    }

    subscribe(event: MessageEvent) {
        super.subscribe(event);
        if (event.data.body.hasOwnProperty("hello")) {
            this.publish(
                new Message({
                    hello: `Hello Main, ${this.endpointProperties.name} is here.`
                })
            );
        }
    }
}
