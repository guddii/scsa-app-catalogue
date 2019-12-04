// tslint:disable-next-line:no-submodule-imports
import { Blueprint } from "@scsa/styling/src/dev";
import { cfg } from "../../config";

// Initialize default application
const app = new Blueprint(cfg).mounts();

// Assign application to listener
app.listen(cfg.PORT);
