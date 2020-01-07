import {
    ChannelKeys,
    MessagingBridge,
    MessagingSystem,
    SecurityChecks
} from "@scsa/messaging";
import "../../client/index.css";
import { cfg } from "../../config";
import { Controller } from "./Controller";

const controller = new Controller();

class MessagingBridgeMessagingSystem extends MessagingSystem {
    public security(): this {
        super.security();
        this.options.security = new SecurityChecks(cfg.endpoints());
        return this;
    }

    public channel(): this {
        super.channel();
        this.type = ChannelKeys.MessagingBridge;
        this.options.channel = new MessagingBridge(this.options);
        return this;
    }
}

const messaging = new MessagingBridgeMessagingSystem();
