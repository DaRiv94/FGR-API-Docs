

const FGR_USColony_API_data
 ={
    uscolonies: {
        title: "FGR US Colony API",
        endpoints: [
            {
                title: "/api/uscolony/:Id",
                endpoint: "/api/uscolony/:Id",
                multiroute: false,
                key: 4,
                url: `https://fgrfunctions.azurewebsites.net/api/uscolony`,
                methodType: "GET",
                hasIdInput: true,
                hasLogin: false,
                hasPayload: false,
                header: "Get one of the 13 US Colonies by Id",
                description: `This endpoint gets a specific US Colony by id. NOTE: The Id is also the same as the order in which a colony entered the Union.`,
                response: {
                  info: `The response will be the specifc US Colony whose Id matches the one sent to the server. US Colony responses have an id, name, capitol, year established, and number to join the union.`,
                  example: `{"id": "7", "name": "Maryland", "capital": "Annapolis","yearEstablished": 1788, "numberToJoinTheUnion": 7}`
                },
                exampleId:"7",
            idNote:`NOTE: If you do not supply an Id param, then FGR_API_Docs will default to sending /api/uscolony/1 . Meaning the US Colony with an Id of 1 will be called.`
              },
        ]
      }
    
}

export default FGR_USColony_API_data
;