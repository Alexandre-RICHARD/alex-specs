import type { HttpMethodEnum } from "../enum/HttpMethod.enum.ts";
import type { ErrorResponse } from "./ErrorResponse.type.ts";
import type { PathParamsOf } from "./PathParamsOf.type.ts";
import type { Response } from "./Response.type.ts";
import type { Schema } from "./Schema.type.ts";

export type Endpoint<
	Path extends string = string,
	Method extends HttpMethodEnum = HttpMethodEnum,
> = {
	alias?: string;
	description?: string;
	method: Method;
	path: Path;
	params?: {
		path?: Schema<PathParamsOf<Path>>;
		query?: Schema<Record<string, string | string[] | undefined>>;
		headers?: Schema<Record<string, string | undefined>>;
		body?: Schema<unknown>;
	};
	responses?: Response<unknown>;
	errors?: ErrorResponse;
};
