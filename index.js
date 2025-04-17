import http from 'http';
import app from './app.js';

let PORT=process.env.PORT;

let server=http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

// console.log(process.env);
