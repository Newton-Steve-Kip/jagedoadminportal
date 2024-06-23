import AnalyzeQuotationsTable from '@/app/shared/admin/dashboard/tables/quotations/analyze-quotations';
import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { Button } from 'rizzui';

export const metadata = {
  ...metaObject('Admin Req'),
};

export default function AdminRequisitionsPage() {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
        <AnalyzeQuotationsTable className="relative  @4xl:col-span-2 @7xl:col-span-12" />
      </div>
      <Link
        href={routes.admin.generateReport}
        className=" mt-6 grid grid-cols-1 @lg:w-auto"
      >
        <Button as="span" className="w-full @lg:w-auto">
          Generate report
        </Button>
      </Link>
    </div>
  );
}
