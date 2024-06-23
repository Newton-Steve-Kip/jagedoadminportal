'use client';

import { HeaderCell } from '@/components/ui/table';
import { Text, Checkbox, ActionIcon, Tooltip, Select, Button } from 'rizzui';
import EyeIcon from '@/components/icons/eye';
import DateCell from '@/components/ui/date-cell';
import { useState } from 'react';
import { PiCheckCircleBold, PiPlusCircle } from 'react-icons/pi';
import Link from 'next/link';
import { routes } from '@/config/routes';

const statusOptions = [
  { label: 'Live', value: 'Live' },
  { label: 'Closed', value: 'Closed' },
];

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

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
    title: (
      <div className="ps-3.5">
        <Checkbox
          title={'Select All'}
          onChange={handleSelectAll}
          checked={checkedItems.length === data.length}
          className="cursor-pointer"
        />
      </div>
    ),
    dataIndex: 'checked',
    key: 'checked',
    width: 30,
    render: (_: any, row: any) => (
      <div className="inline-flex ps-3.5">
        <Checkbox
          aria-label={'ID'}
          className="cursor-pointer"
          checked={checkedItems.includes(row.id)}
          {...(onChecked && { onChange: () => onChecked(row.id) })}
        />
      </div>
    ),
  },
  {
    title: <HeaderCell title="JOB NO" />,
    dataIndex: 'id',
    key: 'id',
    width: 50,
    render: (id: string) => <Text>RFQ#{id}</Text>,
  },

  {
    title: <HeaderCell title="RFQ type" />,
    dataIndex: 'rfqType',
    key: 'rfqType',
    width: 30,
    render: (rfqType: string) => (
      <Text className="text-sm font-semibold text-gray-900 dark:text-gray-700">
        {rfqType}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Category" />,
    dataIndex: 'category',
    key: 'category',
    width: 50,
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
    width: 50,
    render: (subCategory: string) => (
      <Text className="text-sm font-semibold text-gray-900 dark:text-gray-700">
        {subCategory}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Description" />,
    dataIndex: 'description',
    key: 'description',
    width: 150,
    render: (description: string) => <Text>{description}</Text>,
  },

  {
    title: <HeaderCell title="Location" />,
    dataIndex: 'location',
    key: 'location',
    width: 50,
    render: (location: string) => <Text>{location}</Text>,
  },

  {
    title: <HeaderCell title="Date" className="uppercase" />,
    dataIndex: 'date',
    key: 'date',
    width: 60,
    render: (date: Date) => <DateCell date={date} />,
  },

  {
    title: (
      <HeaderCell
        title="Status"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'status'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('status'),
    dataIndex: 'status',
    key: 'status',
    width: 20,
    render: (status: string) => {
      return <StatusSelect selectItem={status} />;
    },
  },
  {
    title: <HeaderCell title="Actions" />,
    dataIndex: 'action',
    key: 'action',
    width: 10,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-3">
        <Link href={routes.admin.analyzeQuotations}>
          {' '}
          <Button color="primary" rounded="lg">
            Analyse
          </Button>
        </Link>
      </div>
    ),
  },
];

function StatusSelect({ selectItem }: { selectItem?: string }) {
  const selectItemValue = statusOptions.find(
    (option) => option.value === selectItem
  );
  const [value, setValue] = useState(selectItemValue);
  return (
    <Select
      dropdownClassName="!z-10"
      className="min-w-[140px]"
      inPortal={false}
      placeholder="Select Role"
      options={statusOptions}
      value={value}
      onChange={setValue}
      displayValue={(option: { value: any }) =>
        renderOptionDisplayValue(option.value as string)
      }
    />
  );
}

function renderOptionDisplayValue(value: string) {
  switch (value) {
    case 'Closed':
      return (
        <div className="flex items-center">
          <PiPlusCircle className="shrink-0 rotate-45 fill-red-dark text-lg" />
          <Text className="ms-1.5 text-sm font-medium capitalize text-gray-700">
            {value}
          </Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <PiCheckCircleBold className="shrink-0 fill-green-dark text-lg" />
          <Text className="ms-1.5 text-sm font-medium capitalize text-gray-700">
            {value}
          </Text>
        </div>
      );
  }
}
