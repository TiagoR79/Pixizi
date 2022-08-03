import { CognitoUserPool } from "amazon-cognito-identity-js";

import { USER_POOL_ID } from "../../env-var";
import { CLIENT_ID } from "../../env-var";

const poolData = {
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID
}

export default new CognitoUserPool(poolData);