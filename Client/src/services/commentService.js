import http from '../utils/helpers/http';
import END_POIND_API from '../utils/helpers/endpoind';
import { showToastError, showToastSuccess } from '../configs/toastConfig';

const commentServices = {
  addComment: async (requestParams, requestBody) => {
    try {
      const { data } = await http.post(`${END_POIND_API.COMMENT}/${requestParams}`, requestBody);
      if (!data) return;
      showToastSuccess(data.message);
      return data;
    } catch (error) {
      showToastError(error.response.data.message);
    }
  },
  getCommentsByProductId: async (requestParams) => {
    try {
      const { data } = await http.get(`${END_POIND_API.COMMENT}/${requestParams}`);
      return data;
    } catch (error) {
      showToastError(error.response.data.message);
      console.log(error.message);
    }
  },
  getAllComments: async () => {
    try {
      const { data } = await http.get(`${END_POIND_API.COMMENT}`);
      return data;
    } catch (error) {
      showToastError(error.response.data.message);
      console.log(error.message);
    }
  },
  updateComment: async (requestParams, requestBody) => {
    try {
      const { data } = await http.put(`${END_POIND_API.COMMENT}/${requestParams}`, requestBody);
      showToastSuccess(data.message || 'Cập nhật comment thành công');
      return data;
    } catch (error) {
      showToastError(error.response.data.message);
      console.log(error.message);
    }
  },
  deleteComment: async (requestParams) => {
    try {
      const { data } = await http.delete(`${END_POIND_API.COMMENT}/${requestParams}`);
      showToastSuccess(data.message || 'Xoá comment thành công');
      return data;
    } catch (error) {
      showToastError(error.response?.data?.message || 'Lỗi khi xoá comment');
      console.log(error);
    }
  },
  getCommentFeedback: async (requestParams) => {
    try {
      const { data } = await http.get(`${END_POIND_API.COMMENT}/list`);
      console.log(data);
      return data;
    } catch (error) {
      showToastError(error.response.data.message);
      console.log(error);
    }
  }
};

export default commentServices;
