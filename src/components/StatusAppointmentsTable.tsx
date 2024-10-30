import { useGetAppointmentsByStatus } from '@/pages/admin/hooks/ueGetAppointmentsByStatus';
import { SiReactquery } from 'react-icons/si';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { getAppointmentsByStatusRes } from '@/pages/admin/api/admin.apis';
import { toISO8601DateString } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { PiUserCircleFill } from 'react-icons/pi';
import { Badge } from './ui/badge';
import { useApproveAppointment } from '@/pages/admin/hooks/useApproveAppointment';
import { useDenyAppointment } from '@/pages/admin/hooks/useDenyAppointment';
import { useTranslation } from 'react-i18next';

interface Props {
  status: 'pending' | 'approved' | 'denied';
}

export const StatusAppointmentsTable: React.FC<Props> = ({ status }) => {
  const { appointments, error, loading } = useGetAppointmentsByStatus({
    status,
  });
  const { t } = useTranslation();
  const { approveAppointment } = useApproveAppointment();
  const { denyAppointment } = useDenyAppointment();

  if (loading)
    return (
      <Card className='flex-1 mb-10 flex justify-center items-center shadow-2xl'>
        <CardContent className='h-full w-full flex flex-col justify-center items-center'>
          <SiReactquery className='h-12 w-12 md:w-16 md:h-12 xl:h-20 xl:w-20 aspect-square animate-spin' />
          <h1 className='text-sm md:text-base xl:text-lg font-medium'>
            {t('adminAppointments.load')}
          </h1>
        </CardContent>
      </Card>
    );

  if (error)
    return (
      <Card className='flex-1 mb-10 flex justify-center items-center shadow-2xl'>
        <CardContent className='h-full w-full flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center bg-red-600 text-white p-3 px-6 lg:p-4 lg:px-8 2xl:p-6 2xl:px-12 shadow-2xl rounded-xl'>
            <h1 className='text-sm font-medium text-center md:text-base xl:text-lg'>
              {t('adminAppointments.errTitle')}
            </h1>
            <p className='text-xs text-center md:text-sm xl:text-base'>
              {t('adminAppointments.errDesc')}
            </p>
            <Button
              className='mt-3 bg-transparent hover:bg-red-500 border border-white text-white text-sm'
              onClick={() => window.location.reload()}
            >
              {t('adminAppointments.try')}
            </Button>
          </div>
        </CardContent>
      </Card>
    );

  return (
    <Card className='mb-10 shadow-2xl'>
      <CardContent className='m-0 p-2'>
        <ScrollArea className='h-[650px] relative overflow-auto'>
          <Table>
            <TableHeader className='shadow-md bg-secondary sticky top-0 z-50'>
              <TableRow className='text-xs lg:text-lg'>
                <TableHead>
                  {t('adminAppointments.tableHeader.service')}
                </TableHead>
                <TableHead>{t('adminAppointments.tableHeader.dt')}</TableHead>
                <TableHead>
                  {t('adminAppointments.tableHeader.client')}
                </TableHead>
                <TableHead>
                  {t('adminAppointments.tableHeader.contact')}
                </TableHead>
                <TableHead>{t('adminAppointments.tableHeader.desc')}</TableHead>
                <TableHead>
                  {t('adminAppointments.tableHeader.master')}
                </TableHead>
                <TableHead>
                  {t('adminAppointments.tableHeader.status')}
                </TableHead>
                {status === 'pending' && (
                  <TableHead>
                    {t('adminAppointments.tableHeader.actions')}
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody className='z-40'>
              {appointments.map(
                (
                  appointment: getAppointmentsByStatusRes & {
                    service: string;
                  },
                  _: number
                ) => {
                  const date = new Date(appointment.time).getHours().toString();

                  return (
                    <TableRow key={_} className='text-xs lg:text-lg'>
                      <TableCell className='max-lg:p-2'>
                        {appointment.service}
                      </TableCell>
                      <TableCell className='max-lg:p-2'>
                        {toISO8601DateString(new Date(appointment.date))}{' '}
                        {`${date.length === 1 ? `0${date}` : date}:00`}
                      </TableCell>
                      <TableCell className='flex items-center gap-2 max-lg:p-2'>
                        <Avatar className='h-6 w-6 m-0 p-0 aspect-square'>
                          <AvatarImage
                            src={
                              appointment.googleUser !== null &&
                              appointment.googleUser.profile.photos[0].value
                            }
                          />
                          <AvatarFallback>
                            <PiUserCircleFill className='h-6 w-6 m-0 p-0 aspect-square' />
                          </AvatarFallback>
                        </Avatar>
                        {appointment.unauthUser !== null &&
                          `${appointment.unauthUser.firstName} ${appointment.unauthUser.lastName}`}
                        {appointment.user !== null &&
                          `${appointment.user.firstName} ${appointment.user.lastName}`}
                        {appointment.googleUser !== null &&
                          appointment.googleUser.profile.name.givenName}
                      </TableCell>
                      <TableCell className='max-lg:p-2'>
                        {appointment.phone}
                      </TableCell>
                      <TableCell className='max-lg:p-2'>
                        {appointment.description.length !== 0
                          ? appointment.description
                          : '---'}
                      </TableCell>
                      <TableCell className='flex items-center gap-2 max-lg:p-2'>
                        <Avatar className='h-6 w-6 m-0 p-0 aspect-square'>
                          <AvatarImage
                            src={`${import.meta.env.VITE_THUMBS_URL}/${
                              appointment.master.thumbnail
                            }`}
                            className='aspect-square object-cover object-center'
                          />
                          <AvatarFallback>
                            <PiUserCircleFill className='h-6 w-6 m-0 p-0 aspect-square' />
                          </AvatarFallback>
                        </Avatar>
                        {appointment.master.firstName}{' '}
                        {appointment.master.lastName}
                      </TableCell>
                      <TableCell className='max-lg:p-2'>
                        <Badge
                          className={`${
                            appointment.status === 'PENDING' &&
                            'bg-yellow-500 hover:bg-yellow-500'
                          } ${
                            appointment.status === 'APPROVED' &&
                            'bg-green-500 hover:bg-green-500'
                          } ${
                            appointment.status === 'DENIED' &&
                            'bg-red-500 hover:bg-red-500'
                          } text-white text-xs`}
                        >
                          {appointment.status === 'PENDING' &&
                            t('adminAppointments.status.pending')}
                          {appointment.status === 'APPROVED' &&
                            t('adminAppointments.status.approved')}
                          {appointment.status === 'DENIED' &&
                            t('adminAppointments.status.denied')}
                        </Badge>
                      </TableCell>
                      {status === 'pending' && (
                        <TableCell className='flex gap-4 max-lg:p-2'>
                          <Button
                            variant={'outline'}
                            className='text-xs lg:text-sm text-green-600 border-green-600 bg-transparent hover:bg-green-600 hover:text-white'
                            onClick={() =>
                              approveAppointment({
                                service: appointment.service,
                                id: appointment.id,
                              })
                            }
                          >
                            {t('adminAppointments.btns.approve')}
                          </Button>
                          <Button
                            variant={'outline'}
                            className='text-xs lg:text-sm text-red-600 border-red-600 bg-transparent hover:bg-red-600 hover:text-white'
                            onClick={() =>
                              denyAppointment({
                                service: appointment.service,
                                id: appointment.id,
                              })
                            }
                          >
                            {t('adminAppointments.btns.deny')}
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
