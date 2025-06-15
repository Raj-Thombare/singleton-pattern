// import { games } from "./store";
import { startLogger } from "./logger";
import { GameManager } from "./store";
import { PubSubManager } from "./PubSubManager";

startLogger();

//GameManager
setInterval(() => {
    GameManager.getInstance().addGame(Math.random().toString())
}, 5000);

// PubSubManager
setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPLE");
}, 5000)
