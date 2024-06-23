import ProfileHeader from '@/app/shared/profile/profile-header';
import ProfileDetails from '@/app/shared/profile/profile-details';
import { metaObject } from '@/config/site.config';
import CreateForm from '@/app/shared/admin/atsali/invoice';

export const metadata = {
  ...metaObject('Profile'),
};

export default function ProfilePage() {
  return (
    <div className="@container">
      <CreateForm />
    </div>
  );
}
