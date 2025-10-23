import type { EndpointModel } from "../../../specUtils/endpointModel.type.ts";
import type { HttpMethodEnum } from "../../../specUtils/httpMethod.enum.ts";
import type { HttpStatutCodeEnum } from "../../../specUtils/httpStatutCode.enum.ts";
import type { TestDto } from "../dto/test.dto.ts";

export interface UpdateTest extends EndpointModel {
	request: {
		url: "/test/:id";
		method: HttpMethodEnum.PUT;
		protected: false;
		pathParams: {
			id: string;
		};
		body: {
			name: string;
			isActive: boolean;
		};
	};
	response: {
		[HttpStatutCodeEnum.SUCCESS]: TestDto;
		[HttpStatutCodeEnum.NOT_FOUND]: null;
		[HttpStatutCodeEnum.CONFLICT_WITH_SERVER]: null;
		[HttpStatutCodeEnum.BAD_REQUEST]: null;
	};
}
