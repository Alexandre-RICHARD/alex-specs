import type { EndpointModel } from "../../../specUtils/endpointModel.type.ts";
import type { HttpMethodEnum } from "../../../specUtils/httpMethod.enum.ts";
import type { HttpStatutCodeEnum } from "../../../specUtils/httpStatutCode.enum.ts";
import type { TestDto } from "../dto/test.dto.ts";

export interface CreateTest extends EndpointModel {
	request: {
		url: "/test";
		method: HttpMethodEnum.POST;
		protected: false;
		body: {
			name: string;
		};
	};
	response: {
		[HttpStatutCodeEnum.CREATED]: TestDto;
		[HttpStatutCodeEnum.CONFLICT_WITH_SERVER]: null;
		[HttpStatutCodeEnum.BAD_REQUEST]: null;
	};
}
