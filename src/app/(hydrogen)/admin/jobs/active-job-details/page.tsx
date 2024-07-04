import ActiveJobDetailsCard from '@/app/shared/admin/dashboard/jobs/active/active-job-details';
import ProgressBarActive from '@/app/shared/admin/progress-bar';
import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import cn from '@/utils/class-names';
import Link from 'next/link';
import { PiCheckCircle } from 'react-icons/pi';
import { Button, Progressbar } from 'rizzui';

export const metadata = {
  ...metaObject('Admin'),
};

type PageProps = {
  className: string;
  // other props as needed
};

export default function ActiveJobsPage({ className }: PageProps) {
  return (
    <div className={cn('xl:gap-15 grid grid-cols-2 lg:grid-cols-2', className)}>
      <div>
        <ActiveJobDetailsCard />
        <Progressbar
          className="mt-6"
          value={75}
          label="75% Ongoing"
          color="info"
          size="xl"
        />
        <Link href={routes.admin.active}>
          <div className="flex  justify-center">
            <Button className="mt-6">Back</Button>
          </div>
        </Link>
      </div>
      <div className="-ml-12">
        <ProgressBarActive />
      </div>
    </div>
  );
}
