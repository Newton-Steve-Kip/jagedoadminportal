import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/commons/page-header';
import ReviewsTable from '@/app/shared/ecommerce/review/table';
import { metaObject } from '@/config/site.config';
import AssignServiceProvidersTable from '@/app/shared/admin/dashboard/tables/assign-service-providers';
import CustomTextArea2 from '@/app/shared/account-settings/custom-text-area2';

export const metadata = {
  ...metaObject('Reviews'),
};

const pageHeader = {
  title: 'Add to Service Providers ',
  breadcrumb: [
    {
      href: routes.admin.dashboard,
      name: 'Home',
    },
    {
      href: routes.admin.requisitionDetails,
      name: 'Requisition Details',
    },
    {
      name: 'List',
    },
  ],
};

export default function AddtoServiceProviders() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>
      <div className="@container">
        <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
          <AssignServiceProvidersTable className="relative  @4xl:col-span-2 " />
          <CustomTextArea2 className="col-span-full" />
        </div>
      </div>
    </>
  );
}
