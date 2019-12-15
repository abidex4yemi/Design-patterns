const logger = require("./Logger");

logger.log("Hello world");
logger.log("Hi world");
logger.log("Yo world");

logger.changeStrategy("none");

logger.log("Hello world");
logger.log("Hi world");
logger.log("Yo world");
