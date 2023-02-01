import NextCors from "nextjs-cors";

async function UserOne(req,res){
    await NextCors(req,res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    });
    res.json({
        
    })
}

export default UserOne