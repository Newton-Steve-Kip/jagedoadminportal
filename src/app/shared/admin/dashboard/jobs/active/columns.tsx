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

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'ongoing':
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
    case 'completed':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

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
    title: <HeaderCell title="JOB ID" />,
    dataIndex: 'id',
    key: 'id',
    width: 10,
    render: (id: string) => <Text>#{id}</Text>,
  },

  {
    title: <HeaderCell title="Requisition Date" className="uppercase" />,
    dataIndex: 'requisitionDate',
    key: 'requisitionDate',
    width: 100,
    render: (requisitionDate: Date) => <DateCell date={requisitionDate} />,
  },
  {
    title: <HeaderCell title="Description" />,
    dataIndex: 'description',
    key: 'description',
    width: 80,
    render: (gender: string) => <Text>{gender}</Text>,
  },
  {
    title: <HeaderCell title="Specification" />,
    dataIndex: 'specification',
    key: 'specification',
    width: 100,
    render: (specification: string) => <Text>{specification}</Text>,
  },
  {
    title: <HeaderCell title="Assigned Fundi" />,
    dataIndex: 'fundi',
    key: 'fundi',
    width: 80,
    render: (fundi: string) => <Text>{fundi}</Text>,
  },

  {
    title: <HeaderCell title="Quote Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (value: string) => getStatusBadge(value),
  },
];
