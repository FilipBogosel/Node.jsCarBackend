import {FastifyReply, FastifyRequest} from "fastify";
import {prisma} from "../lib/prisma";

export async function login(request : FastifyRequest, reply : FastifyReply){
    const {username, password} = request.body as {username:string; password:string};

    const user = await prisma.users.findFirst({
        where : {username, password}
    });

    if(!user){
        return reply.code(401).send({error: 'Invalid username or password'});
    }

    request.session.userId = user.id;
    request.session.username = user.username;

    reply.send({message: 'Login successful'});

    return {success:true, username:user.username};
}


export async function logout(request : FastifyRequest, reply : FastifyReply){
    await request.session.destroy();
    return {success:true, message: 'Logged out successfully!'};
}

export async function checkSession(request : FastifyRequest, reply : FastifyReply){
    if(!request.session.userId){
        return reply.code(401).send({error:'No active session!'});
    }

    return {logged_in : true, username: request.session.username};
}