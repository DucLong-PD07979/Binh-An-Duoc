import { useContext } from 'react';
import useFetch from '../../hooks/useFetch';

import ManShip from '../../assets/images/home/man_shiping2.jpg';
import Banner from '../../assets/images/logo/Banner_1.jpg';

import { SpinnerLoading } from '../../components/ui/loaders';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderConfigProduct, sliderConfigBanner } from '../../configs/sliderConfig';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionWrapper from '../../components/sectionWrapper/SectionWrapper';
import AppIcons from '../../components/ui/icon/index';
import StepOrder from './components/StepOrder';

import { UserContext } from '../../contexts/UserContext';
import { HandleCartContext } from '../../contexts/HandleCartContext';

import categoryServices from '../../services/categoryService';
import productServices from '../../services/productService';
import commentServices from '../../services/commentService';
import bannerServices from '../../services/bannerService';

import CardCategory from '../../components/card/CardCategory';
import CardProduct from '../../components/card/CardProduct';
import Advertisement from '../../components/card/Advertisement';
import FeedbackUser from '../../components/card/FeedbackUser';

const SectionHeroBanner = () => {
  const { isLoading, responsData: bannerData } = useFetch(bannerServices.getAllBanner);

  if (isLoading)
    return (
      <div className='flex justify-center pt-[50px]'>
        <SpinnerLoading />
      </div>
    );

  return (
    <div className='flex max-md:flex-col gap-4'>
      <Swiper {...sliderConfigBanner} className='mySwiper rounded-xl flex-[7] max-w-[1000px]'>
        {bannerData &&
          bannerData.map((banner, index) => (
            <SwiperSlide key={index}>
              <img
                className='object-cover w-full cursor-pointer rounded-xl h-[300px] max-md:h-[200px]'
                src={banner?.url_img}
                alt={banner?.title || 'Banner'}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className='flex-[3] border-2 border-slate-200 rounded-xl overflow-hidden'>
        <img className='w-full h-[210px] object-cover' src={Banner} alt='Tư vấn' />
        <div className='flex justify-between items-center p-4'>
          <div>
            <span className='block text-sm text-gray-600'>Bạn cần tư vấn</span>
            <span className='block text-[#2563eb] font-bold text-[20px] max-md:text-[18px]'>Với chúng tôi</span>
          </div>
          <button className='bg-[#2563eb] text-white py-2 px-4 rounded-full max-md:py-2 max-md:px-3 max-md:text-[14px]'>
            ĐẶT TƯ VẤN
          </button>
        </div>
      </div>
    </div>
  );
};

const SectionListCategory = () => {
  const { responsData: categoriesData, isLoading, isError, messageError } = useFetch(categoryServices.getCategory);

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <SpinnerLoading />
      </div>
    );
  }

  if (isError) {
    return <div>{messageError}</div>;
  }

  return (
    <SectionWrapper
      title='Danh mục sản phẩm'
      addClassNames={{ title: 'font-bold text-[24px] text-gray-800 text-center mt-[32px] mb-[32px]', wrapper: 'py-0' }}
    >
      <div className='grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1'>
        {categoriesData &&
          categoriesData.map((category) => {
            return (
              <div key={category._id}>
                <CardCategory
                  categoriesId={category._id}
                  name={category?.name}
                  description={category?.description}
                  image={category?.url_img}
                />
              </div>
            );
          })}
      </div>
    </SectionWrapper>
  );
};

const SectionProductsNew = () => {
  const {
    responsData: productsNewData,
    isLoading,
    isError,
    messageError
  } = useFetch(productServices.getListProductNew);

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <SpinnerLoading />
      </div>
    );
  }

  if (isError) {
    return <div>{messageError}</div>;
  }

  const { handleAddToCart } = useContext(HandleCartContext);
  const { user } = useContext(UserContext);

  return (
    <SectionWrapper
      title='Sản phẩm mới nhất'
      addClassNames={{ title: 'font-bold text-[24px] text-gray-800 text-center mt-[32px] mb-[32px]', wrapper: 'py-0' }}
    >
      <div className='flex'>
        <Swiper {...sliderConfigProduct} className='mySwiper rounded-[5px]'>
          {productsNewData &&
            productsNewData.length > 0 &&
            productsNewData.map((product) => (
              <SwiperSlide key={product._id}>
                <CardProduct
                  products={product}
                  handleAddToCart={() => handleAddToCart(product?._id, user?._id, product?.stock, true)}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};

const SectionCustomerBenefits = () => {
  const customerBenefits = [
    {
      icon: <AppIcons.FastDelivery addClassNames='w-[100px] text-[#2563EB] mb-2 mt-2 ' width='45px' height='50px' />,
      title: 'GIAO THUỐC NHANH',
      description: 'Đơn hàng của bạn sẽ được mua và giao từ nhà thuốc gần nhất và tốt nhất'
    },
    {
      icon: <AppIcons.ShieldIcon2 addClassNames='w-[100px] text-[#2563EB]' width='35px' height='35px' />,
      title: 'ĐÁNG TIN CẬY',
      description: 'Bình An Dược chỉ hoạt động với các hiệu thuốc đạt chuẩn GPP và được cấp phép của Bộ Y Tế'
    },
    {
      icon: <AppIcons.PhonePlus addClassNames='w-[100px] text-[#2563EB]' width='35px' height='35px' />,
      title: 'TƯ VẤN NHIỆT TÌNH',
      description: 'Các dược sĩ kinh nghiệm sẽ gọi điện và tư vấn nhiệt tình cho bạn'
    },
    {
      icon: <AppIcons.TimeIcon2 addClassNames='w-[100px] text-[#2563EB]' width='35px' height='35px' />,
      title: 'PHỤC VỤ 24H',
      description: 'Khách hàng luôn biết trước giá với mức giá thành hợp lý , giúp bạn an tâm sử dụng dịch vụ'
    }
  ];
  return (
    <SectionWrapper addClassNames={{ wrapper: 'py-[50px]' }}>
      <div className='grid grid-cols-4 place-items-center max-md:grid-cols-2 max-sm:grid-cols-1'>
        {customerBenefits.map((benefit) => {
          return (
            <div className='max-md:mb-4' key={benefit.title}>
              <Advertisement {...benefit} />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

const SectionCustomerFeedback = () => {
  const {
    responsData: userFeedbackData,
    isLoading,
    isError,
    messageError
  } = useFetch(commentServices.getCommentFeedback, {});

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <SpinnerLoading />
      </div>
    );
  }

  if (isError) {
    return <div>{messageError}</div>;
  }

  return (
    <SectionWrapper
      title='Đánh giá của khách hàng'
      addClassNames={{ title: 'font-bold text-[24px] text-gray-800 text-center mt-[32px] mb-[32px]', wrapper: 'py-0' }}
    >
      <div className='grid grid-cols-4 w-[100%] gap-4 m-auto max-md:w-full max-md:grid-cols-2'>
        {userFeedbackData &&
          userFeedbackData.length > 0 &&
          userFeedbackData.map((comment) => (
            <FeedbackUser
              avatar={
                comment.user_id?.avatar ||
                'https://res.cloudinary.com/dz93cdipw/image/upload/v1713866997/Book-Store/Avatar/kwuemqemetzsp4jw21mt.webp'
              }
              username={comment.user_id?.fullname}
              content={comment.content}
              key={comment.id}
            />
          ))}
      </div>
    </SectionWrapper>
  );
};

const SectionWebsiteUserGuide = () => {
  return (
    <SectionWrapper
      title='Cách đặt thuốc online qua website Bình An Dược'
      addClassNames={{
        title: 'font-bold text-[24px] text-gray-800 text-center mt-[32px] mb-[32px]',
        wrapper: 'py-0 my-[80px]'
      }}
    >
      <div className='flex justify-center items-center gap-4'>
        <div>
          <StepOrder />
        </div>
      </div>
    </SectionWrapper>
  );
};

const SectionIntroduce = () => {
  return (
    <SectionWrapper
      title='Giới thiệu webiste đặt thuốc online'
      addClassNames={{ title: 'font-bold text-[24px] text-gray-800 text-center mt-[32px] mb-[32px]', wrapper: 'py-0' }}
    >
      <div className='flex items-center justify-between bg-[#F3F8FB] rounded-md max-md:flex-col'>
        <div className='p-5'>
          <p className='w-[850px] text-[14px] max-md:w-[300px] max-md:m-auto'>
            Website <span className='text-[#2563EB] font-semibold '>Bình An Dược</span> mang trong mình sứ mệnh chăm sóc
            sức khỏe cho hàng triệu người dân Việt Nam. Chúng tôi luôn không ngừng nâng cao dịch vụ để mang lại chất
            lượng và trải nghiệm tốt nhất cho khách hàng.
          </p>
          <p className='w-[850px] text-[14px] pt-4 max-md:w-[300px] max-md:m-auto'>
            Với khát vọng trở thành nền tảng y tế từ xa uy tín, chất lượng hàng đầu Việt Nam và tương lai là vươn ra thế
            giới, <span className='text-[#2563EB] font-semibold'>Bình An Dược</span> không ngừng nỗ lực, sáng tạo để
            mang lại cho người dùng dịch vụ chăm sóc sức khỏe nhanh chóng và chất lượng nhất.
          </p>
        </div>
        <div>
          <img className='w-[400px]' src={ManShip} alt='' />
        </div>
      </div>
    </SectionWrapper>
  );
};

const HomePage = () => {
  return (
    <div className='overflow-hidden w-full'>
      <SectionHeroBanner />
      <SectionListCategory />
      <SectionProductsNew />
      <SectionCustomerBenefits />
      <SectionCustomerFeedback />
      <SectionWebsiteUserGuide />
      <SectionIntroduce />
    </div>
  );
};

export default HomePage;
