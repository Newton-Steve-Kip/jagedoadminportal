import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button, Text } from 'rizzui';
import PageHeader from '@/app/shared/commons/page-header';
import ReviewsTable from '@/app/shared/ecommerce/review/table';
import { metaObject } from '@/config/site.config';
import AssignServiceProvidersTable from '@/app/shared/admin/dashboard/tables/assign-service-providers';
import CustomTextArea2 from '@/app/shared/account-settings/custom-text-area2';
import toast from 'react-hot-toast';
import { SubmitHandler } from 'react-hook-form';
import { PersonalInfoFormTypes } from '@/utils/validators/personal-info.schema';

export const metadata = {
  ...metaObject('Assign Service Providers'),
};

const pageHeader = {
  title: 'Assign Service Providers ',
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

// {
//   className,
// }: {
//   className?: string;
// }

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
