import React from 'react';
import { BaseLoyout } from '../../components/Loyout';
import { FancySwitch } from '@/components/ui/fancy-switch';
import { cn } from '@/lib/utils';
import {
  SetURLSearchParams,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { StatusAppointmentsTable } from '@/components/StatusAppointmentsTable';
import { usei18nUtil } from '@/utils/usei18nUtil';

const Status: string[] = ['Pending', 'Approved', 'Denied'];

const setValue = (str: string): string => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const Appointments: React.FC = () => {
  const { lang } = useParams();
  const { setLangUrl } = usei18nUtil();
  const [params, setParams]: [URLSearchParams, SetURLSearchParams] =
    useSearchParams();
  React.useEffect(() => setLangUrl(lang as 'en' | 'ro' | 'ru'), [lang]);
  // console.log(params.toString().split('=')[0]);

  return (
    <BaseLoyout adminNavbar={true}>
      <div className='px-8 md:px-11 xl:px-40 2xl:px-56 pt-36 min-h-screen flex flex-col gap-4 h-screen'>
        <FancySwitch
          value={setValue(params.toString().split('=')[0])}
          options={Status}
          onChange={(value) =>
            setParams({ [value.toString().toLowerCase()]: 'true' })
          }
          className='flex bg-white shadow-2xl rounded-full gap-4 p-2'
          radioClassName={cn(
            'relative flex focus:outline-none h-9 cursor-pointer items-center justify-center rounded-full text-sm font-medium transition-colors data-[checked]:text-primary-foreground px-4'
          )}
        />

        {params.size === 1 &&
          (params.get('pending') === 'true' ||
            params.get('approved') === 'true' ||
            params.get('denied') === 'true') && (
            <StatusAppointmentsTable
              // @ts-ignore
              status={
                params.toString().toLowerCase().split('=')[0] as
                  | 'pending'
                  | 'approved'
                  | 'denied'
              }
            />
          )}
      </div>
    </BaseLoyout>
  );
};
