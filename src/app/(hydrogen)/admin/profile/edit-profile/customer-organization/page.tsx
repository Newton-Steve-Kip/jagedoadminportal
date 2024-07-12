import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/commons/page-header';
import Link from 'next/link';
import EditCustomersForm from '@/app/shared/admin/profile/edit-profile/customers-form';

export default function IndividualPage({ params }: any) {
  const pageHeader = {
    title: `Profile`,
    breadcrumb: [
      {
        href: routes.admin.dashboard,
        name: 'Dashboard',
      },
      {
        href: routes.admin.dashboard,

        name: 'Individual Customer',
      },
      {
        name: params.id,
      },
    ],
  };
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.eCommerce.editOrder(params.id)}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        ></Link>
      </PageHeader>
      <EditCustomersForm />
    </>
  );
}
