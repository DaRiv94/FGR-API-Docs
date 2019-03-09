

const FGR_President_API_data ={
    presidents: {
        title: "Presidents",
        endpoints: [
          {
            endpoint: "/api/presidents",
            multiroute: true,
            key: 0,
            endpoints: [
                {
                    title: "/api/presidents",
                    endpoint: "/api/presidents",
                    multiroute: false,
                    key: 1,
                    url: `https://fgr-president-api.herokuapp.com/api/presidents`,
                    methodType: "GET",
                    hasIdInput: false,
                    hasLogin: false,
                    hasPayload: false,
                    header: "Get all presidents",
                    description: `This endpoint is for when the client wants to call the server so that the client can get a list of all the presidents.`,
                    response: {
                      info: `Response will be a list of Presidents. Presidents have a PartitionKey and RowKey, these are used by the server to query for specifc or ranges of presidents. Presidents have an etag and Timestamp by default when creating entities. Presidents have a name, along with the political party they are associated with.`,
                      example: `[
                        {
                            "odata.etag": "W/\"datetime'2019-03-08T04%3A38%3A50.6948082Z'\"",
                            "PartitionKey": "presidents",
                            "RowKey": "10d5bb30-415c-11e9-94d2-159ed5d757d1",
                            "Timestamp": "2019-03-08T04:38:50.6948082Z",
                            "name": "Ronald Reagan",
                            "party": "Republican"
                        },
                        ...]`
                    },
                  },
              {
                title: "/api/presidents/:RowKey",
                endpoint: "/api/presidents/:RowKey",
                multiroute: false,
                key: 2,
                url: `https://fgr-president-api.herokuapp.com/api/presidents`,
                methodType: "PUT",
                hasIdInput: true,
                hasLogin: false,
                hasPayload: true,
                header: "Edit an existing president by RowKey",
                description: `This endpoint is meant for when the client wants to make changes to an existing president's name or party. Azure tables have PartitionKeys and RowKeys instead of your traditional Id. so while our presidents are all in the same partition name 'presidents' they all have a RowKey that is a Universial Unique Identifier (UUID)`,
                response: {
                  info: `Response will be the newly edited president. Presidents have a PartitionKey and RowKey, these are used by the server to query for specifc or ranges of presidents. Presidents have an etag and Timestamp by default when creating entities. Presidents have a name, along with the political party they are associated with.`,
                  example: `{
                    "odata.etag": "W/\"datetime'2019-03-09T04%3A29%3A16.4494972Z'\"",
                    "PartitionKey": "presidents",
                    "RowKey": "87dfcaf0-4223-11e9-b44f-593036e2cf11",
                    "Timestamp": "2019-03-09T04:29:16.4494972Z",
                    "name": "Thomas Jefferson",
                    "party": "Federalist"
                }`
                },
                payload: {
                    schema: [
                      { key: "name", type: "String", optional: false },
                      { key: "party", type: "String", optional: false }
                      
                    ],
                    example: `{ 
                        "name":"Thomas Jefferson",
                        "party":"Federalist"
                    }`
                  },
                  exampleId:"5c7da1ebc8217500179b7631",
            idNote:`Add your id and call /api/movies/:id to get back a movie.  NOTE: If you do not supply an id or do not change your input after calling other endpoints you will be making a GET request to /api/movies which will send back the list of movies.`
              },
              {
                title: "/api/presidents",
                endpoint: "/api/presidents",
                multiroute: false,
                key: 3,
                url: `https://fgr-president-api.herokuapp.com/api/presidents`,
                methodType: "POST",
                hasIdInput: false,
                hasLogin: false,
                hasPayload: true,
                header: "Create new president",
                description: `This endpoint is meant for when the client wants to create a new president by send a name and party to the server`,
                response: {
                  info: `Response will be the newly created president. Presidents have a PartitionKey and RowKey, these are used by the server to query for specifc or ranges of presidents. Presidents have an etag and Timestamp by default when creating entities. Presidents have a name, along with the political party they are associated with.`,
                  example: `{
                    "odata.metadata": "https://fgrpresidentapi.table.core.windows.net/$metadata#presidents/@Element",
                    "odata.etag": "W/\"datetime'2019-03-09T04%3A26%3A38.2542328Z'\"",
                    "PartitionKey": "presidents",
                    "RowKey": "87dfcaf0-4223-11e9-b44f-593036e2cf11",
                    "Timestamp": "2019-03-09T04:26:38.2542328Z",
                    "name": "Thomas Jefferson",
                    "party": "Federalist"
                }`
                },
                payload: {
                  schema: [
                    { key: "name", type: "String", optional: false },
                    { key: "party", type: "String", optional: false }
                    
                  ],
                  example: `{ 
                    "name":"Thomas Jefferson",
                    "party":"Federalist"
                }`
                }
              },
              {
                title: "/api/presidents/:RowKey",
                endpoint: "/api/presidents/:RowKey",
                multiroute: false,
                key: 4,
                url: `https://fgr-president-api.herokuapp.com/api/presidents`,
                methodType: "GET",
                hasIdInput: true,
                hasLogin: false,
                hasPayload: false,
                header: "Get an existing president by RowKey",
                description: `This endpoint is meant for when the client wants get a specifc president from the database. Azure tables have PartitionKeys and RowKeys instead of your traditional Id. so while our presidents are all in the same partition name 'presidents' they all have a RowKey that is a Universial Unique Identifier (UUID)`,
                response: {
                  info: `If they exist, the response will be the specifc president whose RowKey matches the param in the endpoint sent to the server. Presidents have a PartitionKey and RowKey, these are used by the server to query for specifc or ranges of presidents. Presidents have an etag and Timestamp by default when creating entities. Presidents have a name, along with the political party they are associated with.`,
                  example: `{
                    "odata.etag": "W/\"datetime'2019-03-09T04%3A29%3A16.4494972Z'\"",
                    "PartitionKey": "presidents",
                    "RowKey": "87dfcaf0-4223-11e9-b44f-593036e2cf11",
                    "Timestamp": "2019-03-09T04:29:16.4494972Z",
                    "name": "Thomas Jefferson",
                    "party": "Federalist"
                }`
                },
                exampleId:"5c7da1ebc8217500179b7631",
            idNote:`Add your id and call /api/movies/:id to get back a movie.  NOTE: If you do not supply an id or do not change your input after calling other endpoints you will be making a GET request to /api/movies which will send back the list of movies.`
              },
              {
                title: "/api/presidents/:RowKey",
                endpoint: "/api/presidents/:RowKey",
                multiroute: false,
                key: 5,
                url: `https://fgr-president-api.herokuapp.com/api/presidents`,
                methodType: "DELETE",
                hasIdInput: true,
                hasLogin: false,
                hasPayload: false,
                header: "Delete an existing president by RowKey",
                description:`This endpoint is meant for when the client wants delete a specifc president from the database. Azure tables have PartitionKeys and RowKeys instead of your traditional Id. so while our presidents are all in the same partition name 'presidents' they all have a RowKey that is a Universial Unique Identifier (UUID)`,
                response: {
                  info: `If they exist, the response will be the president that was just deleted from the database. Presidents have a PartitionKey and RowKey, these are used by the server to query for specifc or ranges of presidents. Presidents have an etag and Timestamp by default when creating entities. Presidents have a name, along with the political party they are associated with.`,
                  example: `{
                    "odata.etag": "W/\"datetime'2019-03-09T04%3A29%3A16.4494972Z'\"",
                    "PartitionKey": "presidents",
                    "RowKey": "87dfcaf0-4223-11e9-b44f-593036e2cf11",
                    "Timestamp": "2019-03-09T04:29:16.4494972Z",
                    "name": "Thomas Jefferson",
                    "party": "Federalist"
                }`
                },
                exampleId:"5c7da1ebc8217500179b7631",
                idNote:`Add your id and call /api/movies/:id to get back a movie.  NOTE: If you do not supply an id or do not change your input after calling other endpoints you will be making a GET request to /api/movies which will send back the list of movies.`
              }
            ]
          },
        
        ]
      }
    
}

export default FGR_President_API_data;