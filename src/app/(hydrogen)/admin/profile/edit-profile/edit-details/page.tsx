import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/commons/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import CreateFundiForm from '@/app/shared/admin/profile/create-profile/fundi/page';

export const metadata = {
  ...metaObject('Edit Fundi Profile'),
};

const pageHeader = {
  title: 'Edit Fundi Profile',
  breadcrumb: [
    {
      href: routes.admin.dashboard,
      name: 'Service Providers',
    },
    {
      href: routes.admin.createFundiProfile,
      name: 'Fundi',
    },
    {
      name: 'Edit profile',
    },
  ],
};

export default function CreateFundiPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CreateFundiForm slug={'1'} />
    </>
  );
}
