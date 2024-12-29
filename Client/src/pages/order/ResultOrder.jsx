import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PATH_ROUTERS_CLIENT } from '../../utils/constant/routers';

const ResultOrderFailed = () => {
  const Navigate = useNavigate();
  const handleSwitchToCartPage = () => {
    Navigate(`/${PATH_ROUTERS_CLIENT.CART}`);
  };

  return (
    <div className='text-center bg-red-100 border border-red-400 text-red-700 px-4 py-6 rounded-md max-w-sm mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-2'>Đặt hàng thất bại</h1>
      <p className='text-base mb-4'>
        Rất tiếc, chúng tôi không thể xử lý đơn hàng của bạn. Vui lòng thử lại hoặc liên hệ hỗ trợ.
      </p>
      <button
        onClick={() => handleSwitchToCartPage()}
        className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300'
      >
        Thử lại
      </button>
    </div>
  );
};

const ResultOrderSuccess = () => {
  const Navigate = useNavigate();
  const handleSwitchToAccountPage = () => {
    Navigate(`/${PATH_ROUTERS_CLIENT.ACCOUNT}`);
  };
  return (
    <div className='text-center bg-green-100 border border-green-400 text-green-700 px-4 py-6 rounded-md max-w-sm mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-2'>Đặt hàng thành công!</h1>
      <p className='text-base mb-4'>Cảm ơn bạn đã đặt hàng. Bạn sẽ nhận được email xác nhận ngay sau đây.</p>
      <button
        onClick={() => handleSwitchToAccountPage()}
        className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300'
      >
        Xem đơn hàng
      </button>
    </div>
  );
};

const ResultOrder = () => {
  const [searchParams] = useSearchParams();
  const typeOrder = searchParams.get('type_order');

  switch (typeOrder) {
    case 'failed':
      return <ResultOrderFailed />;
    case 'successful':
      return <ResultOrderSuccess />;
    default:
      return <div>Hiện không có thông tin đơn hàng của bạn</div>;
  }
};

export default ResultOrder;
