import Fastify from "fastify";

import { fileURLToPath } from 'url';
import path from 'path';
import formbody from '@fastify/formbody'
import fastifyHttpProxy from '@fastify/http-proxy';
import fastifyCors from '@fastify/cors';

const fastify=Fastify({
  logger: true
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
fastify.register(formbody)


  
  fastify.register(fastifyCors, {
    origin: '*',
  });
  

// fastify.register(fastifyHttpProxy, {
//     upstream: 'https://first.iovation.com',
//     prefix: '/iojs',
//     rewritePrefix: '/iojs',
//   });

// fastify.register(import('@fastify/static'), {
//     root: path.join(__dirname, 'public'),
// });

fastify.get('/', async (req, res) => {
    return res.send('hello world');
});


fastify.post('/submit',async(req,res)=>{
    console.log('BLACKBOX....',req.body.ioBlackBox)
    res.send({msg:`recieved black box ${req.body.ioBlackBox}`})
})


fastify.listen({port:9000},(err,add)=>{
    if(err) console.log('ERORR RUNNING SERVER',err)
    console.log('SERVER RUNNING......',add)
})
