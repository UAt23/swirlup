import axios, { AxiosResponse } from "axios";
import { MemberModel } from "./models/MemberModel";

const baseURL = "http://localhost:3001";

class Api {
	async getMembers(): Promise<AxiosResponse<MemberModel[]>> {
		return axios.get<MemberModel[]>(`${baseURL}/memberList`);
	}

	async addMemberModel(
		MemberModel: MemberModel
	): Promise<AxiosResponse<MemberModel>> {
		return axios.post<MemberModel>(`${baseURL}/feed`, MemberModel);
	}

	async updateMemberModel(
		MemberModelId: string,
		updatedMemberModel: Partial<MemberModel>
	): Promise<AxiosResponse<MemberModel>> {
		return axios.put<MemberModel>(
			`${baseURL}/feed/${MemberModelId}`,
			updatedMemberModel
		);
	}
}

export default new Api();
