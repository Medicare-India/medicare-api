import NextCors from "nextjs-cors";

async function CustomerMenu(req,res){
    await NextCors(req,res,{
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    });
    res.json({
        "menu":[
            {
                "id":"1",
                "title":"Home",
                "source":"/home"
            },
            {
                "id":"2",
                "title":"Appointments",
                "source":"/appointments"
            },
            {
                "id":"3",
                "title":"Reports",
                "source":"/reports"
            },
            {
                "id":"4",
                "title":"Prescriptions",
                "source":"/prescriptions"
            },
            {
                "id":"5",
                "title":"About Us",
                "source":"/about-us"
            },
            {
                "id":"6",
                "title":"Contact Us",
                "source":"/contact-us"
            }
        ]
    })
}

export default CustomerMenu