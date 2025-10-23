import type { EndpointModel } from "../../../specUtils/endpointModel.type.ts";
import type { HttpMethodEnum } from "../../../specUtils/httpMethod.enum.ts";
import type { HttpStatutCodeEnum } from "../../../specUtils/httpStatutCode.enum.ts";

export interface DeleteTest extends EndpointModel {
	request: {
		url: "/test/:id";
		method: HttpMethodEnum.DELETE;
		protected: false;
		pathParams: {
			id: string;
		};
	};
	response: {
		[HttpStatutCodeEnum.SUCCESS]: null;
		[HttpStatutCodeEnum.NOT_FOUND]: null;
		[HttpStatutCodeEnum.BAD_REQUEST]: null;
	};
}
