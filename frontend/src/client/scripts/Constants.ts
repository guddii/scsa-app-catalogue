import { EndpointProperties } from "@scsa/messaging";
import { cfg } from "../../config";

export const Applications = {
    MAIN: new EndpointProperties(
      cfg.CURRENT.options.text,
      cfg.CURRENT.options.url.href
    ),
    PARENT: new EndpointProperties(
      cfg.PARENT.options.text,
      cfg.PARENT.options.url.href
    ),
    ACCOUNT: new EndpointProperties(
      cfg.APPLICATIONS.Account.options.text,
      cfg.APPLICATIONS.Account.options.url.href
    ),
    CATALOGUE: new EndpointProperties(
      cfg.APPLICATIONS.Catalogue.options.text,
      cfg.APPLICATIONS.Catalogue.options.url.href
    ),
    CHECKOUT: new EndpointProperties(
      cfg.APPLICATIONS.Checkout.options.text,
      cfg.APPLICATIONS.Checkout.options.url.href
    ),
    SALES: new EndpointProperties(
      cfg.APPLICATIONS.Sales.options.text,
      cfg.APPLICATIONS.Sales.options.url.href
    ),
    WEBCOMPONENTS: new EndpointProperties(
      cfg.ORCHESTRATORS.WebComponents.options.text,
      cfg.ORCHESTRATORS.WebComponents.options.url.href
    ),
    IFRAME: new EndpointProperties(
      cfg.ORCHESTRATORS.iFrame.options.text,
      cfg.ORCHESTRATORS.iFrame.options.url.href
    ),
    COMPOXURE: new EndpointProperties(
      cfg.ORCHESTRATORS.Compoxure.options.text,
      cfg.ORCHESTRATORS.Compoxure.options.url.href
    )
};
