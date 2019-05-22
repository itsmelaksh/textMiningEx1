const config = {
    // Cognito Config
    'aws_cognito_identity_pool_id': process.env.REACT_APP_COGNITO_1,
    // Get from AWS Cognito console -> Manage Federated Identities -> (App Name) -> Edit identity pool
    'aws_cognito_region': process.env.REACT_APP_COGNITO_2,
    
    // S3 Config for Images
    'aws_user_files_s3_bucket': process.env.REACT_APP_S3_1,
    'aws_user_files_s3_bucket_region': process.env.REACT_APP_S3_2,
    
    // Cognito User Pools Config
    'aws_user_pools_id': process.env.REACT_APP_COGNITO_3,
    'aws_user_pools_web_client_id': process.env.REACT_APP_COGNITO_4,

    // Appsync Config
    //'aws_appsync_graphqlEndpoint': process.env.REACT_APP_APPSYNC_1,
    'aws_appsync_graphqlEndpoint': 'http://localhost:3000',
    //'aws_appsync_region': process.env.REACT_APP_APPSYNC_2,
    'aws_appsync_region': 'Asia Pacific (Singapore)',
    /*'aws_appsync_authenticationType': process.env.REACT_APP_APPSYNC_3,*/
    'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS',
}

export default config;
