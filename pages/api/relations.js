import NextCors from "nextjs-cors";

export default async function Relations(req,res){
    await NextCors(req,res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    });
    res.json({
        "relations":[
            {
                "id": "1",
                "relation": "Mother"
            },
            {
                "id": "2",
                "relation": "Father"
            },
            {
                "id": "3",
                "relation": "Son"
            },
            {
                "id": "4",
                "relation": "Daughter"
            },
            {
                "id": "5",
                "relation": "Grandmother"
            },
            {
                "id": "6",
                "relation": "Grandfather"
            }
        ]
    })}