import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

export default function BookingDetailsModal({ booking, isOpen, onClose }) {
  if (!booking) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
                      Booking Details
                    </Dialog.Title>

                    <div className="mt-6 space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Activity</p>
                          <p className="mt-1 text-sm text-gray-900">{booking.activity}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Status</p>
                          <span className={clsx(
                            'mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                            getStatusColor(booking.status)
                          )}>
                            {booking.status}
                          </span>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Customer</p>
                          <p className="mt-1 text-sm text-gray-900">{booking.customer}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Date</p>
                          <p className="mt-1 text-sm text-gray-900">{booking.date}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Participants</p>
                          <p className="mt-1 text-sm text-gray-900">{booking.participants}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Amount</p>
                          <p className="mt-1 text-sm text-gray-900">${booking.amount}</p>
                        </div>
                      </div>

                      {booking.notes && (
                        <div>
                          <p className="text-sm font-medium text-gray-500">Notes</p>
                          <p className="mt-1 text-sm text-gray-900">{booking.notes}</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                      {booking.status === 'Pending' && (
                        <>
                          <button
                            type="button"
                            className="btn-primary"
                            onClick={() => {
                              // Handle confirm booking
                              onClose();
                            }}
                          >
                            Confirm Booking
                          </button>
                          <button
                            type="button"
                            className="btn-secondary text-red-600 hover:text-red-700"
                            onClick={() => {
                              // Handle reject booking
                              onClose();
                            }}
                          >
                            Reject Booking
                          </button>
                        </>
                      )}
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
