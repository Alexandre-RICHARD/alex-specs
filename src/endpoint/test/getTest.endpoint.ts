import type { EndpointModel } from "../../specUtils/endpointModel.type.ts";
import type { HttpMethodEnum } from "../../specUtils/httpMethod.enum.ts";

export interface GetTest extends EndpointModel {
	request: {
		url: "/test/get";
		method: HttpMethodEnum.GET;
		protected: true;
		pathParams: {
			uuid: string;
		};
		queryParams: {
			getNode: string;
		};
	};
	response: {
		user: string[];
	};
}
