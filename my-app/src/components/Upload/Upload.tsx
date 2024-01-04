import { Disclosure } from '@headlessui/react';
import React from 'react';
import UploadFile from './UploadFile';

const Upload = () => {
    const coinis = 'https://ictcortex.me/wp-content/uploads/2021/04/coinis-logo.png'

    const navigation = [
        { name: 'Streaming', href: '/streaming', current: false },
        { name: 'Upload File', href: '/upload', current: true },
      ]

    const classNames = (...classes: any[]) => {
        return classes.filter(Boolean).join(' ')
    }
    
    return (
        <div>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-white border-b">
                    {({open}) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex-shrink-0">
                                        <img src={coinis} className="h-8 w-50" alt="" />
                                    </div>
                                    <div className="md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                  item.current
                                                    ? 'bg-gray-200 text-sky-600'
                                                    : 'text-gray-500 hover:bg-gray-200 hover:text-sky-900',
                                                  'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                                >
                                                {item.name}
                                              </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:flex lg:gap-x-12">
                        <h1 className="text-3xl font-bold tracking-tight text-sky-600">
                            Upload File
                        </h1>
                        <div>
                            <div className='mt-1'>
                                <span className="inline-flex items-center rounded-md bg-sky-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                    Upload
                                </span>
                                <span className="ml-2 inline-flex items-center rounded-md bg-sky-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                    Optimized
                                </span>
                                <span className="ml-2 inline-flex items-center rounded-md bg-sky-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                    Beta v1
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        <UploadFile />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Upload;