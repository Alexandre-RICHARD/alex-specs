import type { HttpMethodEnum } from "../enum/HttpMethod.enum.ts";
import type { Endpoint } from "../type/Endpoint.type.ts";

export function defineEndpoint<
	Path extends string,
	Method extends HttpMethodEnum,
>(endpoint: Endpoint<Path, Method>) {
	return endpoint;
}
