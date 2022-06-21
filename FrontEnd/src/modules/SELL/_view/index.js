import React from 'react';
import SellContent from '../_components/SellContent/SellContent';
import SellFooter from '../_components/SellFooter/SellFooter';
import SellHeader from '../_components/SellHeader/SellHeader';
import '../_style/style.scss';
import { isLogin } from 'utils/jwt';
import useRouter from 'hooks/useRouter';

const Sell = () => {
  const router = useRouter();

  if (!isLogin()) {
    router.push('/login');
    return false;
  }
  return (
    <div className="sell">
      <SellHeader />
      <SellContent />
      <SellFooter />
    </div>
  );
};

export default Sell;
