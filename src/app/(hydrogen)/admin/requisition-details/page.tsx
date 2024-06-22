import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/commons/page-header';
import { metaObject } from '@/config/site.config';
import RequisitionDetails from '@/app/shared/admin/dashboard';
import CustomerDetails from '@/app/shared/admin/dashboard/tables/requisitions/requisition-details/customer-details';
import CustomerDetailsCard from '@/app/shared/logistics/dashboard/cutomer-details';
import JobDetailsCard from '@/app/shared/logistics/dashboard/job-details';
import CustomTextArea2 from '@/app/shared/account-settings/custom-text-area2';
import CustomTextArea from '@/app/shared/account-settings/custom-text-area';

export const metadata = {
  ...metaObject('View Job'),
};

const pageHeader = {
  title: 'View Job',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.eCommerce.products,
      name: 'Products',
    },
    {
      name: 'List',
    },
  ],
};

export default function RequisitionDetailsPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CustomerDetailsCard className="mt-6" />
      <JobDetailsCard className="mt-6" />
      <CustomTextArea className="mt-6" />
    </>
  );
}
