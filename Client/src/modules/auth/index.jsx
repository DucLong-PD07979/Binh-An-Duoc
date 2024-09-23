import { useContext, useEffect } from 'react';
import Register from './Register'
import Login from './Login'
import { UserContext } from '../../contexts/UserContext'
import authServices from '../../services/auth';
// import cartServices from '../../services/cart';
import Input from '../../components/ui/input/Input'

const index = () => {
    const { user } = useContext(UserContext)
//     const getCartUser = async ()=>{
//          const res = await cartServices.getCartByUserId()
//          console.log(res);
//     }
//   useEffect(()=>{
//     getCartUser()
//   },[])
    return (
        <div>
            <Register></Register>
            {user && (
                <>
                    <span>{user.fullname}</span>
                    <button onClick={authServices.logout}>Đăng xuất</button>
                </>
            )}
            <Input></Input>
            <Login></Login>
        </div>
    );
};

export default index;