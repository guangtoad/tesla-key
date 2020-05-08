// Graphql
import { gql } from '@apollo/client'


export type FlashLightsArgs = {
    input: {
        foo: string,
        bar: number,
    },
    id: string,
}

export type FlashLightsPayload = {
    reason: string,
    result: boolean,
}

export type FlashLightsResult = {
    flashLights: FlashLightsPayload,
}

export const FLASH_LIGHTS = gql`
    mutation FlashLights(
        $input: FlashLightsInput!
        $id: String!
    ) {
        flashLights(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/flash_lights"
            type: "DriverState"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`