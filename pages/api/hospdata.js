import NextCors from "nextjs-cors";

export default async function HospData(req,res){
    await NextCors(req,res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    });
    res.json({
        "hospitals":[
            {
                "id": "044a953c-341d-455c-be85-9c5b1a25b3a1",
                "hosp_name": "Stoltenberg - Medhurst",
                "latitude": -51.075699633082095,
                "longitude": -106.56173613038946
            },
            {
                "id": "0b15c983-b1b7-4a82-8839-993b0bffa411",
                "hosp_name": "Hoeger Inc",
                "latitude": -23.61582135353825,
                "longitude": -160.46440418984696
            },
            {
                "id": "53117a78-d4a1-4d29-8b35-1bd53799d204",
                "hosp_name": "Kling, Armstrong and Konopelski",
                "latitude": 47.871394108535554,
                "longitude": 67.02261459564605
            },
            {
                "id": "160784ca-1f52-4842-ae95-8bbeb68176da",
                "hosp_name": "Hand and Sons",
                "latitude": -87.10511276709173,
                "longitude": -132.17557554727452
            },
            {
                "id": "464d3f81-5004-4e04-afe3-ee14ec638bca",
                "hosp_name": "Bernhard - Stiedemann",
                "latitude": 25.356868376951795,
                "longitude": -135.23493117632415
            },
            {
                "id": "c897e4dd-7647-489c-a456-dc640a835e92",
                "hosp_name": "Upton and Sons",
                "latitude": 15.54719455443562,
                "longitude": 170.45296669173484
            },
            {
                "id": "dfe629da-933d-4227-9a51-385b6a46a538",
                "hosp_name": "Orn, Howell and Jaskolski",
                "latitude": -9.386801445755893,
                "longitude": 79.7997805871745
            },
            {
                "id": "e0fd1283-60d5-4c49-bc89-56dfaf8db4d7",
                "hosp_name": "Paucek, Weber and DuBuque",
                "latitude": -23.556064671987087,
                "longitude": -17.844883452729334
            },
            {
                "id": "47695dd4-8798-4884-a323-ceb1033fcd06",
                "hosp_name": "Bauch, Hodkiewicz and Hansen",
                "latitude": -64.15387017532788,
                "longitude": 96.5816292807271
            },
            {
                "id": "a9a55240-7f03-4992-b980-6cf9c38503a4",
                "hosp_name": "Kunze Inc",
                "latitude": -22.222028983730397,
                "longitude": 81.76113517426347
            },
            {
                "id": "4eb961a9-3ed8-43b7-8019-d44d2a4f2b3c",
                "hosp_name": "Bashirian, Kertzmann and Fay",
                "latitude": 89.98149109820591,
                "longitude": -39.57714366307539
            },
            {
                "id": "f6dfdb41-74f3-4c88-986b-757e529f2aac",
                "hosp_name": "Ortiz, Oberbrunner and Botsford",
                "latitude": 42.842694111084256,
                "longitude": 90.18164035246656
            },
            {
                "id": "a3eb0a32-516a-428c-927a-6a53d72bf0b0",
                "hosp_name": "Bode, Nolan and Barton",
                "latitude": -85.51790060221732,
                "longitude": 43.67495985899518
            },
            {
                "id": "46469c15-a2e5-4ceb-b7a2-68d10cb6e989",
                "hosp_name": "Schaefer - Cremin",
                "latitude": -52.92692516251988,
                "longitude": -31.42715967975147
            },
            {
                "id": "fccc6bbc-0cb8-43e8-8a51-f3909fa175aa",
                "hosp_name": "Schamberger, Boyer and Harber",
                "latitude": -9.627797440868093,
                "longitude": -147.2234399466108
            },
            {
                "id": "5a955896-8e1a-42ec-92c5-c1316701ec7f",
                "hosp_name": "West - Shields",
                "latitude": 22.659589893098172,
                "longitude": -153.34761532532994
            },
            {
                "id": "be73c2fe-ff1c-4f4b-9de9-13a1e5b1bb19",
                "hosp_name": "Labadie, Kozey and Ankunding",
                "latitude": -69.6629148343664,
                "longitude": -153.95127041171176
            },
            {
                "id": "4feb1fe2-fe6d-4099-b3e6-49dc3f45c708",
                "hosp_name": "Bashirian, Williamson and Hartmann",
                "latitude": 6.621086097662683,
                "longitude": 24.846999514643954
            },
            {
                "id": "3ec6f9b4-07a2-45f3-8469-895336adf20d",
                "hosp_name": "Gibson, Carroll and Auer",
                "latitude": -1.1849000154845015,
                "longitude": 92.29145668630565
            },
            {
                "id": "981017b2-7b3b-4336-9ccc-7a43b4e1b15d",
                "hosp_name": "Kovacek - Effertz",
                "latitude": 17.971555091624964,
                "longitude": 30.461466555343833
            },
            {
                "id": "45585be5-ebcb-46a6-a62a-373b0e68b9b2",
                "hosp_name": "Stehr - Runolfsdottir",
                "latitude": 14.934957199066048,
                "longitude": 32.54410834029923
            },
            {
                "id": "d51f6bec-465b-4e7a-a683-42aadb8a9bc4",
                "hosp_name": "Von, Weimann and Hegmann",
                "latitude": 85.78471252371884,
                "longitude": -34.80490979189682
            },
            {
                "id": "1ce9a645-abbe-4133-b4fd-860141257c50",
                "hosp_name": "Kirlin, Hartmann and Goyette",
                "latitude": 3.603483377237424,
                "longitude": -41.374340453268445
            },
            {
                "id": "9826f644-5c79-416a-84e9-53c62e15fe06",
                "hosp_name": "Osinski - Beahan",
                "latitude": 0.5437133236735718,
                "longitude": -69.66565812357743
            },
            {
                "id": "167f3365-3e72-46e7-9211-d9568b02e879",
                "hosp_name": "Trantow - Gaylord",
                "latitude": -4.150757297550598,
                "longitude": -133.57915668725826
            },
            {
                "id": "84d94879-defd-47cd-aa86-877532e1573e",
                "hosp_name": "Legros, Bartoletti and Cartwright",
                "latitude": 76.0799169461551,
                "longitude": -41.25545377043866
            },
            {
                "id": "8f72a3b6-3539-438d-ba7c-47b0c1c90747",
                "hosp_name": "Robel - Wilkinson",
                "latitude": -1.139785591976306,
                "longitude": 139.14918099314957
            },
            {
                "id": "a98872f0-649d-4a75-9504-5b46bb89b9a1",
                "hosp_name": "Glover, Rath and Adams",
                "latitude": -22.997166431500645,
                "longitude": -121.17231554693528
            },
            {
                "id": "3b0b52a8-1e38-4a43-8930-d48c9d7e6f3d",
                "hosp_name": "Cronin Inc",
                "latitude": -0.15894761921964573,
                "longitude": 94.93308977484725
            },
            {
                "id": "c0d9e7fa-8e2d-4ebc-9285-253036c6131e",
                "hosp_name": "Emmerich Inc",
                "latitude": -42.387009066647025,
                "longitude": -26.126891820632324
            },
            {
                "id": "71f05afb-609a-4712-a77d-a625265b68e6",
                "hosp_name": "Kihn - Marvin",
                "latitude": -60.29583988558883,
                "longitude": 143.64532250034557
            },
            {
                "id": "ba5db712-68df-43b9-a338-ccc4e7ffecd0",
                "hosp_name": "Mann - Kessler",
                "latitude": 13.477726819076281,
                "longitude": 173.94782614087194
            }
        ]
    })}