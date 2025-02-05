import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCustomers } from '../../hooks/useCustomers';

export default function CustomerDetailsModal({ customer, isOpen, onClose }) {
  const { getCustomerAnalytics } = useCustomers();

  if (!customer) return null;

  const analytics = getCustomerAnalytics(customer.id);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                      Customer Details
                    </Dialog.Title>

                    <div className="mt-6 space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Name</p>
                          <p className="mt-1 text-sm text-gray-900">{customer.name}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Email</p>
                          <p className="mt-1 text-sm text-gray-900">{customer.email}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Phone</p>
                          <p className="mt-1 text-sm text-gray-900">{customer.phone}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Location</p>
                          <p className="mt-1 text-sm text-gray-900">{customer.location}</p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="text-sm font-medium text-gray-900">Customer Analytics</h4>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Total Spent</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                              ${analytics.totalSpent}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Average Booking Value</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                              ${analytics.averageBookingValue}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Booking Frequency</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                              {analytics.bookingFrequency} per month
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Last Booking</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                              {analytics.lastBooking 
                                ? new Date(analytics.lastBooking).toLocaleDateString()
                                : 'N/A'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        type="button"
                        className="btn-secondary"
                        onClick={onClose}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
