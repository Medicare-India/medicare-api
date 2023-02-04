import NextCors from "nextjs-cors";

async function UserOne(req,res){
    await NextCors(req,res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    });
    res.json({
        "user":[
            {
                "id": "79884472-48a5-4e7a-b454-c06c80818106",
                "first name": "Beulah",
                "last name": "Hartmann",
                "username": "Beulah_Hartmann",
                "phone": "8371692050",
                "emailId": "Beulah.Hartmann95@hotmail.com",
                "gender": "Female",
                "aadhaar_number": "2687 3712 1875",
                "isAadhaarVerified": true,
                "password": "reprehen",
                "latitude": 26.335546747425077,
                "longitude": -5.240998218112006,
                "address": {
                    "house_no": "266 Audra Gateway",
                    "address_line_1": "5462 Ratke Curve",
                    "address_line_2": null,
                    "address_line_3": null,
                    "state": "07144 Jermey Flats",
                    "city": "Dar Chioukh",
                    "zip_code": "02053",
                    "country": "DZ"
                },
                "medical_docs": {
                    "doctors": [
                        {
                            "doc_id": "bb918567-c718-4f71-8364-0a7f253b4b13",
                            "doc_full_name": "Misty",
                            "doc_phone_number": "6530592107"
                        },
                        {
                            "doc_id": "54ecae73-b158-4c47-8b48-d30d57878caa",
                            "doc_full_name": "Tami",
                            "doc_phone_number": "8156472189"
                        },
                        {
                            "doc_id": "da241432-543b-4d91-917f-0fedfb50a6bf",
                            "doc_full_name": "Clara",
                            "doc_phone_number": "4875519881"
                        },
                        {
                            "doc_id": "ac1a21f9-e12e-4409-acd2-fffebb9552ff",
                            "doc_full_name": "Jacquelyn",
                            "doc_phone_number": "8414147644"
                        },
                        {
                            "doc_id": "c2cfdc06-fd52-49d9-8f71-d52e4726d7cd",
                            "doc_full_name": "Natalie",
                            "doc_phone_number": "9716378088"
                        },
                        {
                            "doc_id": "6782faf6-3dd1-4fd3-b99a-37de4d122cc9",
                            "doc_full_name": "Shari",
                            "doc_phone_number": "9444746305"
                        },
                        {
                            "doc_id": "08d1caae-5c48-4cc0-8b42-fcd0ed16427d",
                            "doc_full_name": "Maggie",
                            "doc_phone_number": "0365278395"
                        },
                        {
                            "doc_id": "aeec7020-7631-4a80-a974-99eb8e1bc9d2",
                            "doc_full_name": "Susie",
                            "doc_phone_number": "9167511377"
                        }
                    ],
                    "prescriptions": [
                        {
                            "doc_id": "09bbbc93-a787-4b79-ae1e-ea6d89e4e2c0",
                            "Rx_url": "http://jonas.com"
                        },
                        {
                            "doc_id": "38916d22-9097-45ae-895a-0d62efd97b0d",
                            "Rx_url": "http://damon.com"
                        },
                        {
                            "doc_id": "85a4e41d-2192-44e7-89e5-a03347fbd722",
                            "Rx_url": "https://felipa.info"
                        },
                        {
                            "doc_id": "c61e5fd9-9f69-4f9f-bb08-66e6e7519cc5",
                            "Rx_url": "http://jenifer.info"
                        }
                    ],
                    "lab_reports": [
                        {
                            "doc_id": "d64f711f-661c-4474-a623-2e7bb87f8452",
                            "lab_id": "8b143097-9d03-44d1-a59d-ab00f4238855",
                            "lab_report_url": "https://terrence.com"
                        },
                        {
                            "doc_id": "6031f084-570d-4d59-9360-edc5f220337f",
                            "lab_id": "31b77e70-5490-4c32-9a80-a462766f4016",
                            "lab_report_url": "http://domenica.biz"
                        },
                        {
                            "doc_id": "1deb159b-6223-4ca4-a3f4-47de0db8517d",
                            "lab_id": "fefaf741-ce90-495f-bcba-d2aaabe5c603",
                            "lab_report_url": "http://hal.org"
                        },
                        {
                            "doc_id": "67d75f70-78ed-4011-a782-d44a93dab824",
                            "lab_id": "2cc5b7c5-9a3e-4d5b-9c4a-a50c22ad8cda",
                            "lab_report_url": "http://euna.info"
                        }
                    ]
                },
                "appointment_hospital": {
                    "hospital_id": "cbb76bfb-c8f5-46c2-b31e-3316ed0e92b7",
                    "hospital_name": "Beulah Hartmann",
                    "appointment_date": "2022-11-03 16:34:44",
                    "isAppointmentConfirmed": true,
                    "token_no": 4,
                    "doc_id": "c46385a6-62d2-4398-9912-d4dcaae27d2b"
                },
                "appointment_clinic": {
                    "clinic_id": "a4cf226c-e8fb-4e04-8b33-b1cd38335a8e",
                    "clinic_name": "Beulah Hartmann",
                    "appointment_date": "2022-03-30 22:21:20",
                    "isAppointmentConfirmed": true,
                    "token_no": 131,
                    "doc_id": "6c3b29bc-7033-4e56-852c-7d7530e80f65"
                },
                "appointment_lab": {
                    "lab_id": "f4837a0a-ae5e-4dc5-80f4-bb271d55eece",
                    "lab_name": "Beulah Hartmann",
                    "appointment_date": "2022-09-10 21:13:21",
                    "isAppointmentConfirmed": false,
                    "token_no": 379,
                    "doc_id": "1a03198c-ca01-4e3f-9a5d-c20a1ad43014"
                }
            }
        ]
    })
}

export default UserOne