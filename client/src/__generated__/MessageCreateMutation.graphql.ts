/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MessageCreateInput = {
    messageType?: unknown | null;
    text?: string | null;
    imageUrls?: Array<string> | null;
    fileUrls?: Array<string> | null;
};
export type MessageCreateMutationVariables = {
    channelId: string;
    message: MessageCreateInput;
    deviceKey: string;
};
export type MessageCreateMutationResponse = {
    readonly createMessage: {
        readonly id: string;
        readonly text: string | null;
        readonly messageType: unknown;
        readonly imageUrls: ReadonlyArray<string | null> | null;
        readonly fileUrls: ReadonlyArray<string | null> | null;
        readonly sender: {
            readonly id: string;
        } | null;
        readonly channel: {
            readonly id: string;
            readonly channelType: unknown;
            readonly name: string | null;
            readonly memberships: ReadonlyArray<{
                readonly user: {
                    readonly name: string | null;
                    readonly nickname: string | null;
                    readonly thumbURL: string | null;
                    readonly photoURL: string | null;
                } | null;
            }> | null;
            readonly lastMessage: {
                readonly messageType: unknown;
                readonly text: string | null;
                readonly imageUrls: ReadonlyArray<string | null> | null;
                readonly fileUrls: ReadonlyArray<string | null> | null;
                readonly createdAt: unknown | null;
            } | null;
        } | null;
    } | null;
};
export type MessageCreateMutation = {
    readonly response: MessageCreateMutationResponse;
    readonly variables: MessageCreateMutationVariables;
};



/*
mutation MessageCreateMutation(
  $channelId: String!
  $message: MessageCreateInput!
  $deviceKey: String!
) {
  createMessage(channelId: $channelId, message: $message, deviceKey: $deviceKey) {
    id
    text
    messageType
    imageUrls
    fileUrls
    sender {
      id
    }
    channel {
      id
      channelType
      name
      memberships(excludeMe: true) {
        user {
          name
          nickname
          thumbURL
          photoURL
        }
      }
      lastMessage {
        messageType
        text
        imageUrls
        fileUrls
        createdAt
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "channelId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "deviceKey"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "message"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "messageType",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrls",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fileUrls",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "channelId",
        "variableName": "channelId"
      },
      {
        "kind": "Variable",
        "name": "deviceKey",
        "variableName": "deviceKey"
      },
      {
        "kind": "Variable",
        "name": "message",
        "variableName": "message"
      }
    ],
    "concreteType": "Message",
    "kind": "LinkedField",
    "name": "createMessage",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "sender",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Channel",
        "kind": "LinkedField",
        "name": "channel",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "channelType",
            "storageKey": null
          },
          (v8/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "excludeMe",
                "value": true
              }
            ],
            "concreteType": "Membership",
            "kind": "LinkedField",
            "name": "memberships",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nickname",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "thumbURL",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "photoURL",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "memberships(excludeMe:true)"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "kind": "LinkedField",
            "name": "lastMessage",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v4/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageCreateMutation",
    "selections": (v9/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "MessageCreateMutation",
    "selections": (v9/*: any*/)
  },
  "params": {
    "cacheID": "8c6d2c5aa0c7f7f1da9297e14a067a68",
    "id": null,
    "metadata": {},
    "name": "MessageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation MessageCreateMutation(\n  $channelId: String!\n  $message: MessageCreateInput!\n  $deviceKey: String!\n) {\n  createMessage(channelId: $channelId, message: $message, deviceKey: $deviceKey) {\n    id\n    text\n    messageType\n    imageUrls\n    fileUrls\n    sender {\n      id\n    }\n    channel {\n      id\n      channelType\n      name\n      memberships(excludeMe: true) {\n        user {\n          name\n          nickname\n          thumbURL\n          photoURL\n        }\n      }\n      lastMessage {\n        messageType\n        text\n        imageUrls\n        fileUrls\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9b92d316535633c66e53a01aeaad0f5c';
export default node;
