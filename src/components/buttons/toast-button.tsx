'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'rizzui';
import toast from 'react-hot-toast';
import { Text } from 'rizzui';
import { routes } from '@/config/routes';

export default function ToastButton({
  title,
  message,
}: {
  title?: string;
  message?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (message) {
      toast.success(<Text as="b">{message}</Text>);
    }

    router.push(routes.admin.dashboard);
  };

  return (
    <Button className="w-full @lg:w-auto" onClick={handleClick}>
      {title}
    </Button>
  );
}
