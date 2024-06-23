import CustomersTable from '@/app/shared/admin/dashboard/tables/customers';
import QuotationReportTable from '@/app/shared/admin/dashboard/tables/quoatationreport';
import QuotationReport from '@/app/shared/admin/dashboard/tables/quoatationreport';
import EvaluateQuoatations from '@/app/shared/admin/evaluate-quotations';
import PageHeader from '@/app/shared/commons/page-header';
import ViewRequisition from '@/app/shared/customers/requisitions/requisition-details';
import InvoiceDetails from '@/app/shared/logistics/shipment/details/invoice-details';
import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import Link from 'next/link';
import { Button } from 'rizzui';

export const metadata = {
  ...metaObject('Profile Page'),
};

const pageHeader = {
  title: 'Plumber',
  breadcrumb: [
    {
      href: routes.admin.analyzeQuotations,
      name: 'Analyze Quotations',
    },
    {
      name: 'Generate Report',
    },
  ],
};

export default function GenerateReport() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />

      <div className="mt-2 flex flex-col gap-y-6 @container sm:gap-y-10">
        <EvaluateQuoatations />
        <QuotationReportTable />
        <Link
          href={routes.admin.dashboard}
          className="  grid grid-cols-1 @lg:w-auto"
        >
          <Button as="span" className="w-full @lg:w-auto">
            Submit
          </Button>
        </Link>
      </div>
    </>
  );
}
