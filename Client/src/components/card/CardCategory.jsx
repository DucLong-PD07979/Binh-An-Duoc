import { Link } from 'react-router-dom';
const CardCategory = ({ name, description, image, categoriesId }) => {
  return (
    <Link to={`/danh-muc/${categoriesId}`}>
      <div className='flex bg-gradient-to-l from-blue-300 to-blue-700  rounded-xl justify-between p-2 h-[100px] overflow-hidden'>
        <div>
          <span className='block font-bold text-[17px] text-[#fff]'>{name}</span>
          <span className='block text-[#fff]'>{description}</span>
        </div>
        <div>
          <img className='w-[100px] h-[80px]  rounded-lg object-cover' src={image} alt={name} />
        </div>
      </div>
    </Link>
  );
};

export default CardCategory;
