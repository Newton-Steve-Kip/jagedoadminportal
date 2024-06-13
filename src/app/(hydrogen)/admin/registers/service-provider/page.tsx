import FundisPage from '@/app/shared/registers/fundis';
import Register from '@/app/shared/registers/individual';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Customer Register'),
};

export default function Admin() {
  return <FundisPage />;
}