import React from 'react';
import AppIcons from '../../components/ui/icon';
import Button from '../../components/ui/button/Button';
import InputText from '../../components/ui/form/InputText';
import { Textarea } from '../../components/ui/form';
// import BreadCrumb from '../../components/breadCrumb/BreadCrumb';

const TemplateComponent = () => {
  return (
    <div>
      <div className='static p5 mt-3'>
        <div className='flex gap-2'>
          <Button rounded='s' size='m' addClassNames='bg-slate-500 text-white'>
            Button
          </Button>
          <Button rounded='s' size='m' addClassNames='bg-slate-500 text-white'>
            Input text
          </Button>
          <Button rounded='s' size='m' addClassNames='bg-slate-500 text-white'>
            Image
          </Button>
        </div>
      </div>
      {/* Button component */}
      <div className='pt-5'>
        <h3 className='text-lg capitalize font-semibold mb-4'>Button component</h3>
        <div className='grid gap-3 w-fit'>
          <Button size='s' rounded='s' leftIcon={<AppIcons.NotiIcon />} addClassNames='bg-slate-500 text-white'>
            size s , rouded s , leftIcon
          </Button>
          <Button size='m' rounded='m' addClassNames='bg-slate-600 text-white '>
            size m , rouded m ,
          </Button>
          <Button size='l' rounded='l' addClassNames='bg-slate-700 text-white '>
            size l , rouded l ,
          </Button>
        </div>
      </div>
      {/* input component */}
      <div className='pt-5'>
        <h3 className='text-lg capitalize font-semibold mb-4'>Input component</h3>
        <div className='grid gap-3 w-fit'>
          <InputText size='s' rounded='s' placeholder='size s , rouded s'></InputText>
          <InputText size='m' rounded='m' placeholder='size m , rouded m'></InputText>
          <InputText size='l' rounded='l' placeholder='size l, rouded l'></InputText>
        </div>
      </div>

      {/* Textarea component */}
      <div className='pt-5'>
        <h3 className='text-lg capitalize font-semibold mb-4'>Textarea component</h3>
        <div className='grid gap-3'>
          <Textarea placeholder='Message here ...' rounded='s' />
          <Textarea placeholder='Message here ...' rounded='m' rows={6} />
        </div>
      </div>

      {/*icon component */}
      <div className='pt-5'>
        <h3 className='text-lg capitalize font-semibold mb-4'>Icon component</h3>
        <div className='grid gap-3 grid-cols-7 w-fit text-blue-900'>
          <div className='flex gap-1 items-center'>
            <AppIcons.HomeIcon />
            <span>HomeIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.ArrowDownIcon />
            <span>ArrowDownIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.CashIcon />
            <span>CashIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.ChatIcon />
            <span>ChatIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.CustomerIcon />
            <span>CustomerIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.DarkIcon />
            <span>DarkIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.LightIcon />
            <span>LightIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.LogIcon />
            <span>LogIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.NotiIcon />
            <span>NotiIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.OderIcon />
            <span>OderIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.ProductIcon />
            <span>ProductIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.SearchIcons />
            <span>SearchIcons</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.SetIcon />
            <span>SetIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.UserIcon />
            <span>UserIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.PencilSquare />
            <span>PencilSquare</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.CategoryIcon />
            <span>CategoryIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.PhotoIcon />
            <span>PhotoIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.UserGroup />
            <span>UserGroup</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.BuildingStorefront />
            <span>BuildingStorefront</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.GiftIcon />
            <span>GiftIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.BrandIcon />
            <span>BrandIcon</span>
          </div>
          <div className='flex gap-1 items-center'>
            <AppIcons.BanknotesIcon />
            <span>BanknotesIcon</span>
          </div>
        </div>
      </div>

      {/*breadCrumb component */}
      {/* <div className='pt-5'>
        <h3 className='text-lg capitalize font-semibold mb-4'>BreadCrumb component</h3>
        <div className='grid gap-3 w-fit'>
          <BreadCrumb>
            <a href=''>Home</a>
            <a href=''>product</a>
            <p>khẩu trang y tế</p>
          </BreadCrumb>
        </div>
      </div> */}
    </div>
  );
};

export default TemplateComponent;