'use client';

import WidgetCard from '@/components/cards/widget-card';
import { Accordion, Badge, FileInput, Input } from 'rizzui';
import { Collapse } from 'rizzui';
import { PiArrowDown, PiArrowDownDuotone } from 'react-icons/pi';
import cn from '@/utils/class-names';
import { useState } from 'react';
import ToastButton from '@/components/buttons/toast-button';
import { routes } from '@/config/routes';
import { useSearchParams } from 'next/navigation';
import ReportTable from '../dashboard/tables/report-table';

const data = [
  {
    'Job No': '#A940312',
  },
  {
    Location: 'Kome,Homabay',
  },
];

const specData = [{}];

export default function ReportComponent({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const type = searchParams.get('type')?.toLowerCase();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="col-span-full grid items-start rounded-xl border border-gray-300 p-4 ">
        <li className="flex items-center gap-2 @3xl:justify-between @5xl:justify-start">
          <span className="mb-2 font-semibold text-gray-900">
            Site Conditions:
          </span>
          <span className="mb-2  text-gray-900">
            Plot of land is on a relatively low-lying flat riparian land with
            black cotton soil.
          </span>
        </li>
        <ul className=" grid gap-2 @3xl:col-span-full @3xl:mb-2 @5xl:col-span-1 @5xl:mb-0">
          <li className="flex items-center gap-2 @3xl:justify-between @5xl:justify-start">
            <span className="font-semibold text-gray-900">
              Deadline for quotation submition:
            </span>
            <span className=" text-gray-900">3/4/2024, 7am</span>
          </li>
          <li className="flex items-center gap-2 @3xl:justify-between @5xl:justify-start">
            <span className="font-semibold text-gray-900">Specifications:</span>
            <span className=" text-gray-900">
              Drilling and Construction of 4No. boreholes
            </span>
          </li>
          <ul className="flex flex-col gap-1 whitespace-nowrap @3xl:justify-between @5xl:justify-start">
            <li className="font-semibold text-gray-900">Scope of works:</li>
            <li>1. Drilling</li>
            <li>2. Flush</li>
            <li>3. Construction and development</li>
          </ul>

          <li className="flex items-center gap-3 @3xl:justify-between @5xl:justify-start">
            <span className=" text-gray-900">
              Please see an attached hydrogeological report
            </span>
          </li>
        </ul>
        <ReportTable className="col-span-full  border-none" />
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="flex border ">
              <h3 className="w-1/2 bg-gray-200 font-semibold">
                Recommendation:
              </h3>
              <Input
                type="text"
                className="w-full rounded border"
                placeholder="Enter recommendation"
              />
            </div>
          </div>
          <div className="w-full  md:w-1/2">
            <div className="flex border ">
              <h3 className="w-1/2 bg-gray-200 font-semibold">Reason:</h3>
              <Input
                type="text"
                className="w-full rounded border"
                placeholder="Enter reason"
              />
            </div>
          </div>
        </div>

        <h3 className="mb-2  flex justify-center bg-yellow-200">SUMMARY</h3>
        <ul className="grid gap-2 @3xl:col-span-full @3xl:mb-2 @5xl:col-span-1 @5xl:mb-0">
          <li className="flex items-center gap-2 @3xl:justify-between @5xl:justify-start">
            <span className="text-gray-900">
              1. Contractor to be signed within 7 days
            </span>
          </li>
          <li className="flex items-center gap-2 @3xl:justify-between @5xl:justify-start">
            <span className="text-gray-900">
              2. Payment is in advance within 7 days after contract signing
            </span>
          </li>
          <li className="flex items-center gap-2 @3xl:justify-between @5xl:justify-start">
            <span className="text-gray-900">
              3. Assignment starts within 7 days after contract signing and
              immediately after payment
            </span>
          </li>
        </ul>
      </div>

      {/* 
      <Accordion>
        <Accordion.Header>
          <div
            onClick={handleToggle}
            className="flex w-full items-center justify-between py-5 text-xl font-semibold"
          >
            {'Note'}
            <PiArrowDown
              className={`flex h-5 w-5 transform  transition-transform duration-300 ${
                isOpen ? 'rotate-0' : '-rotate-90'
              }`}
            />
          </div>
        </Accordion.Header>

        <Accordion.Body></Accordion.Body>
      </Accordion> */}
      <div className="col-span-full grid">
        <ToastButton
          title="Submit"
          route={routes.admin.dashboard}
          message="Report generated successfully"
        />
      </div>
    </>
  );
}
