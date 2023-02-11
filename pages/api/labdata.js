import NextCors from "nextjs-cors";

export default async function HospData(req,res){
    await NextCors(req,res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    });
    res.json({
        "labs":
        [
            {
                "id": "239c259a-2603-4843-a8f8-09b308a4902f",
                "lab_name": "ArcBest",
                "latitude": -1.0326809230354002,
                "longitude": 171.8699832141466
            },
            {
                "id": "ffbdfef6-0e43-46eb-a308-f15bf6e51582",
                "lab_name": "Live Nation Entertainment",
                "latitude": 1.8509117043675332,
                "longitude": 141.92979299221543
            },
            {
                "id": "25c0508b-f214-45fa-9f79-6341c25f823f",
                "lab_name": "Abercrombie & Fitch",
                "latitude": -21.108209235741285,
                "longitude": -54.14423768082338
            },
            {
                "id": "b8406473-2b2d-45d7-aa02-bd212ab94c9c",
                "lab_name": "HNI",
                "latitude": -25.284328149631236,
                "longitude": -123.29986107992465
            },
            {
                "id": "2e4ef72e-5fae-48c8-a53b-aa1d79641a4a",
                "lab_name": "Tesla Motors",
                "latitude": 53.22357174761228,
                "longitude": 4.124671560907927
            },
            {
                "id": "2523ff25-4795-4620-8964-68eb2a128b44",
                "lab_name": "Comerica",
                "latitude": 69.24938248673072,
                "longitude": -140.71186891013815
            },
            {
                "id": "1c125767-3ce5-4863-9fb4-7db480de4d61",
                "lab_name": "W.R. Berkley",
                "latitude": 15.946672697546859,
                "longitude": 76.39350876507558
            },
            {
                "id": "9e9142de-143a-4105-91b0-2a4ce808e695",
                "lab_name": "WhiteWave Foods",
                "latitude": 54.68680066797279,
                "longitude": 141.82378217534136
            },
            {
                "id": "344e3be2-586b-4554-97c3-c95731511615",
                "lab_name": "Hospira",
                "latitude": -65.05091810885915,
                "longitude": 8.754214462903718
            },
            {
                "id": "20592f50-30cf-4738-ab1a-c17ff7deae30",
                "lab_name": "TRW Automotive Holdings",
                "latitude": -50.41238605521724,
                "longitude": -62.245488358061934
            },
            {
                "id": "7a13c8f3-afac-4ca7-a6fe-d3db96bfb091",
                "lab_name": "Stryker",
                "latitude": -70.42017884413609,
                "longitude": -61.83789219877677
            },
            {
                "id": "e3d563d4-76c8-4fe9-9704-cac370d6fded",
                "lab_name": "Nationwide",
                "latitude": -68.95438662620239,
                "longitude": -177.89795409179746
            },
            {
                "id": "a601dad7-efd1-4267-af12-5e3773643d6d",
                "lab_name": "KeyCorp",
                "latitude": 48.830048897104206,
                "longitude": 107.00322352155547
            },
            {
                "id": "1fdb94c6-3b17-470b-b17a-d7c128619205",
                "lab_name": "Outerwall",
                "latitude": -8.179631545097763,
                "longitude": 155.88529179971437
            },
            {
                "id": "66f502e6-ff4f-4541-ba6f-af8284aa2f9f",
                "lab_name": "KB Home",
                "latitude": 1.7332680454188676,
                "longitude": 94.13169351114402
            },
            {
                "id": "8530021d-ca78-475d-96ca-3012c58ccd5a",
                "lab_name": "CIT Group",
                "latitude": 26.506743089115943,
                "longitude": 96.80316361373218
            },
            {
                "id": "5465e05c-e68e-4d36-a25d-36e91905a59c",
                "lab_name": "Westar Energy",
                "latitude": 54.69134446656372,
                "longitude": 102.19692879250823
            },
            {
                "id": "65673ab4-280f-437a-bc60-db6a878164f7",
                "lab_name": "General Electric",
                "latitude": 28.828967388941678,
                "longitude": 101.06066569064114
            },
            {
                "id": "56703e06-cdd1-4e69-8cc6-950047db2cae",
                "lab_name": "Ross Stores",
                "latitude": -73.56604212341477,
                "longitude": -45.38137480979313
            },
            {
                "id": "08f7742b-cf55-4113-baa7-0fa1a5f3661a",
                "lab_name": "Brink's",
                "latitude": 25.12368928025363,
                "longitude": 4.897348402482095
            }
        ]
    })}