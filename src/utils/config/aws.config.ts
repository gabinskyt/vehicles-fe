
export const awsConfig = {
    Auth: {
        identityPoolId: 'us-east-1:a6aaf0cd-a296-4ee6-981a-995fa8a769ee',
        region: 'us-east-1'
    },
    API: {
        endpoints: [
            {
                name: 'vehicles-service-dev',
                endpoint: 'https://okn3au18ek.execute-api.us-east-1.amazonaws.com/dev'
            }
        ]
    }
};
