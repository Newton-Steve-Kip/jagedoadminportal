import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/commons/page-header';
import CompletedJobDetails from '@/app/shared/admin/dashboard/jobs/completed/view-job-details';

export const metadata = {
  ...metaObject('Completed Jobs'),
};

const pageHeader = {
  title: 'Completed Job Details',
  breadcrumb: [
    {
      name: 'View Job',
    },
  ],
};

export default function CompletedJobDetailsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <CompletedJobDetails />
    </>
  );
}
