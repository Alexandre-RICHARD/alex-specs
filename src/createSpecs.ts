import { testApiEndpoint } from "./testEndpoint/testApi.endpoint.ts";
import { defineSpec } from "./utils/functions/defineSpec.ts";

export const testApi = defineSpec({
	name: "test",
	endpoints: [testApiEndpoint],
});
