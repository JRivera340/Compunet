"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequest = getRequest;
const graphql_1 = require("@nestjs/graphql");
function getRequest(context) {
    if (context.getType() === 'graphql') {
        return graphql_1.GqlExecutionContext.create(context).getContext().req;
    }
    return context.switchToHttp().getRequest();
}
//# sourceMappingURL=get-request.js.map