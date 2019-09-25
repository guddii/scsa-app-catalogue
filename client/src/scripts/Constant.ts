import { EndpointProperties } from "scsa-lib-messaging/src/endpoints/Endpoint";

export const Applications = {
    MAIN: new EndpointProperties("MainApp", process.env.HOST_MAIN),
    ACCOUNT: new EndpointProperties("AccountApp", process.env.HOST_ACCOUNT),
    CATALOGUE: new EndpointProperties(
        "CatalogueApp",
        process.env.HOST_CATALOGUE
    ),
    CHECKOUT: new EndpointProperties("CheckoutApp", process.env.HOST_CHECKOUT)
};
