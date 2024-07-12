'use client';

import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/commons/page-header';
import Link from 'next/link';
import OrderView from '@/app/shared/admin/order/order-view';
import EditFundiForm from '@/app/shared/admin/profile/edit-profile/fundi/index';
import { useSearchParams } from 'next/navigation';

export default function OrderDetailsPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || '';

  const pageHeader = {
    title: `Profile`,
    breadcrumb: [
      {
        href: routes.admin.dashboard,
        name: 'Home',
      },
      {
        href: routes.admin.editFundiProfile,
        name: 'Edit Fundi Profile',
      },
      {
        name: status || 'Status',
      },
    ],
  };

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link href={'#'} className="mt-4 w-full @lg:mt-0 @lg:w-auto"></Link>
      </PageHeader>
      <EditFundiForm slug={status} />
    </>
  );
}
