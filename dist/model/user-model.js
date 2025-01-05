"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserResponse = toUserResponse;
function toUserResponse(user) {
    return {
        id: user.id,
        username: user.username,
        name: user.name,
        token: user.token,
        roles: user.roles,
        created_at: user.created_at,
        updated_at: user.updated_at,
    };
}
