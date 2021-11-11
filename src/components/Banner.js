import {AlertIcon, ArrowRightIcon} from '@primer/octicons-react';
import {useTranslation} from 'react-i18next';

function Banner(props) {
  const {t} = useTranslation();

  return (
    <div className="Banner fadeInDown" style={{animationDelay: '0.4s'}}>
      <div className="wrapper">
        <div className="alert-icon">
          <AlertIcon size={16} />
        </div>
        <div className="content">
          {t(
            'After 16 months of daily updates, we stopped our operations on 31st October, 2021. You can only view data from January 2020 to October 2021 on this website.'
          )}{' '}
        </div>
      </div>
    </div>
  );
}

export default Banner