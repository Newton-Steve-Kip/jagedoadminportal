'use client';

import { HeaderCell } from '@/components/ui/table';
import { Text, Checkbox, ActionIcon, Tooltip, Select, Badge } from 'rizzui';
import PencilIcon from '@/components/icons/pencil';
import EyeIcon from '@/components/icons/eye';
import DeletePopover from '@/app/shared/commons/delete-popover';
import DateCell from '@/components/ui/date-cell';
import { useState } from 'react';
import { PiCheckCircleBold, PiPlusCircle } from 'react-icons/pi';
import { last } from 'lodash';
import Link from 'next/link';
import { routes } from '@/config/routes';

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'under review':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'open':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

export const getColumns = ({
  data,
  onChecked,
  sortConfig,
  checkedItems,
  onDeleteItem,
  handleSelectAll,
  onHeaderCellClick,
}: Columns) => [
  {
    title: <HeaderCell title="NUMBER" />,
    dataIndex: 'id',
    key: 'id',
    width: 90,
    render: (id: string) => <Text>RE#{id}</Text>,
  },
  {
    title: <HeaderCell title="Joined Date" className="uppercase" />,
    dataIndex: 'date',
    key: 'date',
    width: 230,
    render: (date: Date) => <DateCell date={date} />,
  },

  {
    title: <HeaderCell title="Category" />,
    dataIndex: 'category',
    key: 'category',
    width: 200,
    render: (category: string) => (
      <Text className="text-sm font-semibold text-gray-900 dark:text-gray-700">
        {category}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Sub Category" />,
    dataIndex: 'subCategory',
    key: 'subCategory',
    width: 200,
    render: (subCategory: string) => (
      <Text className="text-sm font-semibold text-gray-900 dark:text-gray-700">
        {subCategory}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Request Type" />,
    dataIndex: 'requestType',
    key: 'requestType',
    width: 200,
    render: (requestType: string) => (
      <Text className="text-sm font-semibold text-gray-900 dark:text-gray-700">
        {requestType}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Description" />,
    dataIndex: 'description',
    key: 'description',
    width: 200,
    render: (description: string) => (
      <Text className="text-sm font-semibold text-gray-900 dark:text-gray-700">
        {description}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Location" />,
    dataIndex: 'location',
    key: 'location',
    width: 200,
    render: (location: string) => (
      <Text className="text-sm font-semibold text-gray-900 dark:text-gray-700">
        {location}
      </Text>
    ),
  },

  {
    title: <HeaderCell title="Joined Date" className="uppercase" />,
    dataIndex: 'date',
    key: 'date',
    width: 230,
    render: (date: Date) => <DateCell date={date} />,
  },

  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (value: string) => getStatusBadge(value),
  },
  {
    title: <HeaderCell title="Actions" />,
    dataIndex: 'action',
    key: 'action',
    width: 100,
    render: (_: any, row: { requestType: string }) => {
      const requestType = row.requestType.toLowerCase();
      const queryParams =
        requestType === 'managed by self'
          ? '?type=self'
          : requestType === 'managed by jagedo'
            ? '?type=jagedo'
            : '';

      return (
        <div className="flex items-center justify-end gap-3 pe-3">
          <Tooltip size="sm" content={'View'} placement="top" color="invert">
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              aria-label={'View Appointment'}
              className="hover:!border-gray-900 hover:text-gray-700"
            >
              <Link href={`${routes.admin.requisitionDetails}${queryParams}`}>
                <EyeIcon className="h-4 w-4" />
              </Link>
            </ActionIcon>
          </Tooltip>
          {/* DeletePopover code */}
        </div>
      );
    },
  },
];
