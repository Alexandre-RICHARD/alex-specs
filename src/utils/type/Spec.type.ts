import type { Endpoint } from "./Endpoint.type.ts";
import type { ErrorResponse } from "./ErrorResponse.type.ts";

export type Spec = {
	name: string;
	commonErrors?: ErrorResponse;
	endpoints: Endpoint[];
};
