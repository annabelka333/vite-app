import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/app.context';

const InfoModal = () => {
  const {t} = useTranslation();
  const {showInfoModal, closeModalHandler, modalTitle, modalContent } = useAppContext();

  if(!showInfoModal){
    return <></>;
  }

  const ModalContent = modalContent;
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center">
      <div className="h-4/5 bg-white w-3/6 rounded-md flex flex-col justify-start">
        <div className='flex-1 p-8 overflow-y-auto'>
          <h2 className='text-2xl text-center mb-4 mt-3'>{t(modalTitle)}</h2>
          <ModalContent />
        </div>
        <hr/>
        <div className='p-8'>
          <button onClick={closeModalHandler} className='bg-green-500 p-2 rounded-md uppercase w-full text-white text-lg'>{t('Close')}</button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;