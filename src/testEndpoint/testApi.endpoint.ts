import { HttpMethodEnum } from "../utils/enum/HttpMethod.enum.ts";
import { defineEndpoint } from "../utils/functions/defineEndpoint.ts";
import type { Error } from "../utils/type/Error.type.ts";
import type { PathParamsOf } from "../utils/type/PathParamsOf.type.ts";
import type { Schema } from "../utils/type/Schema.type.ts";

export type TestBody = {
	label: string;
	power: number;
};
export type TestDto = {
	id: string;
	label: string;
	power: number;
	createdAt: string;
};

export const testApiEndpoint = defineEndpoint({
	alias: "createWidget",
	description: "Crée un widget avec un id en path et un body",
	method: HttpMethodEnum.POST,
	path: "/widgets/:wid",
	params: {
		path: {} as Schema<PathParamsOf<"/widgets/:wid">>,
		body: {} as Schema<TestBody>,
	},
	responses: {
		201: {} as Schema<TestDto>,
	},
	errors: {
		404: {} as Schema<Error>,
	},
});
