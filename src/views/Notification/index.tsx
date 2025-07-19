// import Notifications from '@/components/common/notification';
import Title from '@/components/common/title';
// import { NotificationData } from '@/constant/common/notification-data';
// import Image from 'next/image';
// import { NotificationData } from '@/constant/common/notification-data';
// import Image from 'next/image';

const NotificationView = () => {
  return (
    <div className='flex flex-col m-4 sm:m-9 md:m-9 rounded-3xl shadow-2xl'>
      {/* Title Notification */}
      <div className='p-9'>
        <Title
          text='Notification'
          className='text-3xl'
        />
      </div>

      {/* <main className='px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto'>
        <Notifications />
      </main> */}
    </div>
  );
};

export default NotificationView;
{
  /* <div>
        {NotificationData.map((item, i) => (
          <div key={i}>
            <p className='flex text-text-dark font-semibold p-5 md:px-12 text-xl'>
              {item.title}
            </p>
            <div className='flex flex-col'>
              {item.title === 'Today' ? (
                <div className='flex flex-col gap-y-6'>
                  {item.data.map((list, index) => (
                    <div
                      key={index}
                      className='flex flex-col sm:flex-row items-start justify-between gap-y-6 px-3'
                    >
                      <div className='flex flex-col lg:flex-row items-start gap-3 w-full'>
                        {list.profile && (
                          <Image
                            src={list.profile}
                            alt=''
                            width={40}
                            height={20}
                          />
                        )}

                        <p className='text-text-light line-clamp-1 max-w-[250px]'>
                          {list.name}
                        </p>
                        <p className='text-heading font-semibold line-clamp-1 max-w-[350px]'>
                          {list.message}
                        </p>
                      </div>
                      <p className='flex text-text-normal text-sm'>
                        {list.time}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='flex flex-col gap-y-6'>
                  {item.data.map((list, index) => (
                    <div
                      key={index}
                      className='flex flex-col sm:flex-row items-start justify-between gap-y-6 px-3'
                    >
                      <div className='flex flex-col lg:flex-row items-start gap-3 w-full'>
                        {list.profile && (
                          <Image
                            src={list.profile}
                            alt=''
                            width={40}
                            height={20}
                          />
                        )}

                        <p className='text-text-light line-clamp-1 max-w-[250px]'>
                          {list.name}
                        </p>
                        <p className='text-heading font-semibold line-clamp-1 max-w-[350px]'>
                          {list.message}
                        </p>
                      </div>
                      <p className='flex text-text-normal text-sm'>
                        {list.time}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div> */
}
