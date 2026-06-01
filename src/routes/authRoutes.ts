import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {loginSchema} from "../schemas/carSchemas";
import {checkSession, login, logout} from "../handlers/authHandlers";

export async function authRoutes(app:FastifyInstance){
    app.post('api/login.php', {schema:loginSchema}, login);

    app.post('api/logout.php', logout);

    app.get('api/checkSession.php', checkSession);

}