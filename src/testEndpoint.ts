import { initContract } from "@ts-rest/core";

const c = initContract();

export const contract = c.router({
	testEndPoint: {
		body: c.type<{
			testBody: string;
		}>(),
		pathParams: c.type<{
			testParam: string;
		}>(),
		query: c.type<{
			testQuery: string;
		}>(),
		responses: {
			200: c.type<{
				testGoodResponse: string;
			}>(),
			403: c.type<{
				testWrongResponse: string;
			}>(),
		},
		method: "POST",
		path: "/test/endpoint/:testParam",
		summary: "Test the endpoint",
		description:
			"Try to setup a full client/spec/server organization and full-typing of my futur endpoint",
	},
});
