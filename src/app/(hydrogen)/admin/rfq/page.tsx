import ContactorsTable from '@/app/shared/admin/dashboard/tables/contractor';
import RFQCard from '@/app/shared/admin/rfq';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('RFQ '),
};

export default function RFQPagr() {
  return (
    <div className="@container">
      <div className="mt-2 mt-6 flex flex-col gap-y-6 @container sm:gap-y-10">
        <RFQCard className="relative  @4xl:col-span-2 @7xl:col-span-12" />
      </div>
    </div>
  );
}
