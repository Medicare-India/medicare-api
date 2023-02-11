import NextCors from "nextjs-cors";

export default async function ClinicData(req,res){
    await NextCors(req,res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    });
    res.json({
        "clinics":[
            {
                "id": "2c229562-3836-4209-95ab-c83c255e9452",
                "clinic_name": "United States Steel",
                "latitude": -6.750883268008067,
                "longitude": 149.21269243456607
            },
            {
                "id": "fc09682b-94c3-47f8-bdd4-724af0ad23af",
                "clinic_name": "Lennar",
                "latitude": 39.889118693421835,
                "longitude": -14.544139942625634
            },
            {
                "id": "0c1a9c60-18a2-4361-8754-50478b39714f",
                "clinic_name": "Thor Industries",
                "latitude": 82.5842273751907,
                "longitude": -92.5311396491741
            },
            {
                "id": "82a5257c-feb0-497f-88ab-3f7923ddf6cf",
                "clinic_name": "Pacific Life",
                "latitude": 79.75350121213165,
                "longitude": 75.21734658287644
            },
            {
                "id": "0413d5e0-1142-4d4c-8ce1-cd37340f3a5e",
                "clinic_name": "American National Insurance",
                "latitude": 23.247501387222712,
                "longitude": -139.80995240165947
            },
            {
                "id": "89635886-7bbd-49bd-a0f9-be4c208966d4",
                "clinic_name": "WESCO International",
                "latitude": 42.00691702018409,
                "longitude": -65.76384826737271
            },
            {
                "id": "ee71a70b-9ba2-4b86-bf8b-f79b717a5a17",
                "clinic_name": "Boyd Gaming",
                "latitude": 71.43026096626261,
                "longitude": 148.72561086630282
            },
            {
                "id": "cf19cd62-95f4-453b-9abb-56f68c1d21a0",
                "clinic_name": "3M",
                "latitude": -83.93708907611469,
                "longitude": -75.73645543459915
            },
            {
                "id": "b88361ca-e7e3-4355-97e5-97289e646449",
                "clinic_name": "Dresser-Rand Group",
                "latitude": -25.753920483553628,
                "longitude": -32.62933854391892
            },
            {
                "id": "fdf64841-4a78-4bf0-904a-96f6ee784311",
                "clinic_name": "American Water Works",
                "latitude": 3.66869395843716,
                "longitude": 49.01061895091513
            },
            {
                "id": "4549729f-d7fd-4176-aef2-d31ce2c7d5ac",
                "clinic_name": "AAR",
                "latitude": -29.380173004872894,
                "longitude": 86.26884456680892
            },
            {
                "id": "3de4aa6a-7d0e-4ac1-a17e-06cbdfecdb41",
                "clinic_name": "Skyworks Solutions",
                "latitude": -73.81964739719608,
                "longitude": 92.5935499969255
            },
            {
                "id": "c18d75fe-6c3b-41cc-96cb-04445b8989cf",
                "clinic_name": "Concho Resources",
                "latitude": 85.45321843732103,
                "longitude": -142.0928357463759
            },
            {
                "id": "f30309a1-e52d-453b-b06d-311935a8ec55",
                "clinic_name": "New York Life Insurance",
                "latitude": 9.585147286240371,
                "longitude": -72.42688780391133
            },
            {
                "id": "81f6a7d6-ab59-43e3-b02b-84c121e1a036",
                "clinic_name": "Pfizer",
                "latitude": -75.22591893355046,
                "longitude": 138.95957874961329
            },
            {
                "id": "ab16511d-453f-4757-b24f-bdf51f911039",
                "clinic_name": "Dow Chemical",
                "latitude": -54.40363224139269,
                "longitude": 29.7896399783927
            },
            {
                "id": "364a999d-9bc1-495d-a3b3-cca4ec25e502",
                "clinic_name": "WGL Holdings",
                "latitude": 53.274312920488796,
                "longitude": 156.49596635502763
            },
            {
                "id": "d41287b8-5cde-49ca-b0cb-419fede6fe5a",
                "clinic_name": "News Corp.",
                "latitude": -89.04789697738944,
                "longitude": 25.37900863139103
            },
            {
                "id": "c1241e2e-934a-41c5-bd24-84b11425dbbf",
                "clinic_name": "Great Plains Energy",
                "latitude": 26.90815008323287,
                "longitude": -179.50419326372304
            },
            {
                "id": "57742cf4-0b06-4a0c-b681-ad3e18025873",
                "clinic_name": "Wyndham Worldwide",
                "latitude": -61.183314838671876,
                "longitude": -113.05384910495454
            },
            {
                "id": "7a0cda00-98b6-4cac-832f-f077d586c01a",
                "clinic_name": "Textron",
                "latitude": -73.41685991117714,
                "longitude": -93.413899996073
            },
            {
                "id": "10604fb5-c620-4bb4-b21f-13d0aa3df51d",
                "clinic_name": "RPC",
                "latitude": 73.6257829730398,
                "longitude": 26.26798697577763
            },
            {
                "id": "32fb41e5-4c67-4b30-a0b3-39466fd28e62",
                "clinic_name": "Valspar",
                "latitude": 37.08238376611189,
                "longitude": 95.62269126187459
            },
            {
                "id": "914fc30a-bb03-46c5-a188-3cbab6186e17",
                "clinic_name": "Ecolab",
                "latitude": -86.61723038499386,
                "longitude": -45.86805633026253
            },
            {
                "id": "5c8d3656-02f0-4c3f-b425-e5ce6fee3154",
                "clinic_name": "Crown Holdings",
                "latitude": -83.9756804497297,
                "longitude": 98.62286716571577
            },
            {
                "id": "20c5ab89-5c53-4bc3-b2a0-62b5dd57587f",
                "clinic_name": "Pep Boys-Mann",
                "latitude": -65.71268934015343,
                "longitude": -116.72246492838596
            },
            {
                "id": "d017c1ed-bd4f-4eb0-937f-9d1c0faa3ddf",
                "clinic_name": "Alleghany",
                "latitude": 44.33758764180894,
                "longitude": 173.3028306375387
            },
            {
                "id": "65283724-e6b9-46ba-8213-cedc8be5cfd9",
                "clinic_name": "Selective Insurance Group",
                "latitude": 88.22042957275741,
                "longitude": 100.11172637606984
            },
            {
                "id": "4f4b49d0-7e87-4d17-99a1-2b047833bde9",
                "clinic_name": "HCA Holdings",
                "latitude": 53.573258153023886,
                "longitude": 135.09485239449873
            },
            {
                "id": "0eb22e78-3ee4-44ef-92e2-54b38e44d96e",
                "clinic_name": "Windstream Holdings",
                "latitude": 34.43469350512038,
                "longitude": 29.751790047066095
            },
            {
                "id": "504054f8-42c2-4886-bcb7-01662aef39f5",
                "clinic_name": "Teradata",
                "latitude": 34.96382933165802,
                "longitude": -123.73702691579408
            },
            {
                "id": "c387d2d9-2588-4627-9bb2-6eff222f1074",
                "clinic_name": "Voya Financial",
                "latitude": -75.57726631949534,
                "longitude": -77.66401847240584
            },
            {
                "id": "b5ffe81c-50f0-4a3b-82ed-2fd54158ddee",
                "clinic_name": "Lansing Trade Group",
                "latitude": 18.91918894850177,
                "longitude": 141.9892816841728
            },
            {
                "id": "4a419fc8-4e30-44f6-a93f-89d0d41a6fa4",
                "clinic_name": "Allison Transmission Holdings",
                "latitude": 1.4020218404046005,
                "longitude": -173.88063163669705
            },
            {
                "id": "c19beaad-0a6a-494d-8f7e-07c899592a44",
                "clinic_name": "Tempur Sealy International",
                "latitude": 50.527534464941596,
                "longitude": -98.45966391303945
            },
            {
                "id": "3f15e20b-4693-4b7f-8e22-2df4fcfb6621",
                "clinic_name": "Tutor Perini",
                "latitude": -11.615712512897915,
                "longitude": 20.998304544484114
            },
            {
                "id": "cc8dcdec-77cf-4c27-aa50-54c762e50e48",
                "clinic_name": "Lockheed Martin",
                "latitude": -14.025495116687082,
                "longitude": 2.4342761561837847
            },
            {
                "id": "b6ab76ae-d3a9-4a69-8fc6-2a9504cd3b5f",
                "clinic_name": "Axiall",
                "latitude": 65.1991722922784,
                "longitude": 142.31785235209367
            },
            {
                "id": "4ae25e19-fec5-46c9-b7bc-5c84ba4225ed",
                "clinic_name": "Church & Dwight",
                "latitude": 21.969657505108074,
                "longitude": -28.394050560999545
            },
            {
                "id": "59302502-0818-4542-899a-023798a0ad24",
                "clinic_name": "Realogy Holdings",
                "latitude": 23.12627081177611,
                "longitude": 129.91102776197135
            },
            {
                "id": "e77456a2-bcba-4a93-98fc-7ed6bb1eafbe",
                "clinic_name": "Molina Healthcare",
                "latitude": -83.963706664853,
                "longitude": 45.54382417523976
            },
            {
                "id": "1fde5350-ed69-49e8-bd89-26ba262a2c0e",
                "clinic_name": "H&R Block",
                "latitude": -1.3069716514272756,
                "longitude": 141.62913004068002
            },
            {
                "id": "db1b2dca-cfbe-495a-99ac-b8f6372f327a",
                "clinic_name": "Anthem",
                "latitude": -50.51998215996762,
                "longitude": 148.83232673858998
            },
            {
                "id": "5ca33170-d143-42cd-be58-db1daadb41c6",
                "clinic_name": "Williams-Sonoma",
                "latitude": -64.57317482270736,
                "longitude": -73.64454456185109
            },
            {
                "id": "e927689e-9425-4c9a-b641-1ca4765d409d",
                "clinic_name": "Marathon Oil",
                "latitude": -72.52582849302537,
                "longitude": -51.24690114865322
            },
            {
                "id": "de803509-240f-4bbf-b819-426390f3b806",
                "clinic_name": "Becton Dickinson",
                "latitude": 48.51257970779213,
                "longitude": 39.78482817103642
            },
            {
                "id": "ba808651-69eb-4bb7-b7aa-3dc8ce155eb8",
                "clinic_name": "Covance",
                "latitude": -35.47073782676828,
                "longitude": 88.59384663297317
            },
            {
                "id": "5bfd60d8-a154-4552-8af4-fef055f67009",
                "clinic_name": "Alaska Air Group",
                "latitude": -8.219290733179776,
                "longitude": 10.579222445725122
            },
            {
                "id": "0a465edb-01e9-49fd-a3dd-358b689ab83e",
                "clinic_name": "Bloomin' Brands",
                "latitude": 38.8873557042736,
                "longitude": -149.91935746930494
            },
            {
                "id": "cb9877b7-dced-4b5e-90a0-6c213a343d17",
                "clinic_name": "Denbury Resources",
                "latitude": 77.59753973103565,
                "longitude": 70.35342162191361
            },
            {
                "id": "cb43b9cc-b31a-46c7-82ad-ae22be77d632",
                "clinic_name": "Orbital ATK",
                "latitude": 0.16851564565602928,
                "longitude": -136.73913867419984
            },
            {
                "id": "31d51ae7-426b-44ee-8f0e-dd664ffaa2f9",
                "clinic_name": "Kemper",
                "latitude": -18.39193486051103,
                "longitude": 160.47976608708723
            },
            {
                "id": "40ffd9d0-d936-4b4f-ac39-215df66f0b03",
                "clinic_name": "Edwards Lifesciences",
                "latitude": -11.361623587629737,
                "longitude": 118.48908824785747
            },
            {
                "id": "f7a352de-1bab-47ae-bcec-47916ac680ca",
                "clinic_name": "Casey's General Stores",
                "latitude": 84.30634009344675,
                "longitude": 59.751851055052896
            },
            {
                "id": "5f5dba2e-63b5-4886-9c72-8437f57be8dc",
                "clinic_name": "UnitedHealth Group",
                "latitude": 20.66989707116511,
                "longitude": -56.15071116237881
            },
            {
                "id": "cb6b5cbd-2b8a-44d5-b5d4-0de22da4b910",
                "clinic_name": "PolyOne",
                "latitude": 57.48480437917601,
                "longitude": -112.82162677233038
            },
            {
                "id": "6ca0c038-dc13-44c8-8691-2ccb1166bab2",
                "clinic_name": "Amgen",
                "latitude": -41.03548470446945,
                "longitude": 129.32509768472454
            },
            {
                "id": "9c26adbb-fffe-4b62-bcc2-2dc5d349b32c",
                "clinic_name": "Tenneco",
                "latitude": 10.682046876877891,
                "longitude": 38.06377439126962
            },
            {
                "id": "b73c9896-ed99-47cb-a8b1-fb511d64f90e",
                "clinic_name": "SunTrust Banks",
                "latitude": -79.81699043334572,
                "longitude": -15.627569108060726
            },
            {
                "id": "b86076e9-74e8-49f2-9218-0b55d6428499",
                "clinic_name": "Chico's FAS",
                "latitude": 57.267215304047056,
                "longitude": 146.6526470924756
            },
            {
                "id": "9bbcac04-ec0c-4e23-98c7-7bbab6ac9502",
                "clinic_name": "Timken",
                "latitude": 19.7393973987797,
                "longitude": -88.23118852864637
            },
            {
                "id": "d07aaa57-61ab-4918-94ab-2b75b4fc93b6",
                "clinic_name": "PerkinElmer",
                "latitude": -89.86603788375174,
                "longitude": -80.77231756734919
            },
            {
                "id": "085b6488-fff9-4b61-8e5b-62e3c799b62b",
                "clinic_name": "Alphabet",
                "latitude": -15.637545028886663,
                "longitude": -165.38983182845544
            },
            {
                "id": "4f088e5a-e28d-448f-a623-d1ef51c43e79",
                "clinic_name": "Martin Marietta Materials",
                "latitude": -79.24340805696772,
                "longitude": -62.24338262046709
            },
            {
                "id": "5369e4f4-4e7e-4b30-87d8-bf728a2836f7",
                "clinic_name": "Textron",
                "latitude": -27.89426865265709,
                "longitude": 76.65813533810444
            },
            {
                "id": "4d6dbd8b-3715-4298-81ee-bc2df0b1a792",
                "clinic_name": "Fannie Mae",
                "latitude": -8.281259612293155,
                "longitude": -62.02236273383457
            },
            {
                "id": "80670381-6a17-405e-8160-7c26efda38dd",
                "clinic_name": "Southwest Airlines",
                "latitude": -21.604475937382233,
                "longitude": -153.0399289577693
            },
            {
                "id": "2a9854b1-8a36-42a8-8ca7-a4af46832ff2",
                "clinic_name": "Southwest Airlines",
                "latitude": -81.68779555865768,
                "longitude": -127.79900280852668
            },
            {
                "id": "65a5d1b0-8189-4655-b89a-44e656f236a4",
                "clinic_name": "Jarden",
                "latitude": -53.010710223346294,
                "longitude": -148.45157554563093
            },
            {
                "id": "59814a9d-905e-4ff4-8ecb-c1ef0bfcd473",
                "clinic_name": "KLA-Tencor",
                "latitude": 18.160835479462833,
                "longitude": -122.08463929971927
            },
            {
                "id": "16cb9cd7-a0a8-4d35-8900-7ea755e1fc51",
                "clinic_name": "Ingram Micro",
                "latitude": 36.37456446736586,
                "longitude": -106.31742872325779
            },
            {
                "id": "ead6c02e-ca03-4d46-9b5a-467719c7cbda",
                "clinic_name": "Party City Holdings",
                "latitude": -27.169116335905763,
                "longitude": 16.178126727555792
            },
            {
                "id": "0cd26c97-3572-42f3-9c90-3df85721dcb5",
                "clinic_name": "Universal Forest Products",
                "latitude": 77.80272822524873,
                "longitude": 65.5328227231013
            },
            {
                "id": "bc7a7703-d80b-4900-96c6-4b5cfcc34f76",
                "clinic_name": "Regency Energy Partners",
                "latitude": -64.05394970939744,
                "longitude": -152.8243779935916
            },
            {
                "id": "9598912f-b5ce-433d-a70e-bc20090584af",
                "clinic_name": "Broadridge Financial Solutions",
                "latitude": 85.4896393543359,
                "longitude": -142.37252242003814
            }
        ]
    })}