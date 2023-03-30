import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <Disclosure as="nav" className="bg-gray-800 h-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="text-white font-bold text-start ">
                    🍥 Kawappy 🍥
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6 ml-4">
                    <NavLink to="/" className="text-white h-full hover:bg-slate-600">
                      Postres
                    </NavLink>
                    <NavLink to="/Comidas" className="text-white h-full hover:bg-slate-600">
                      Comidas
                    </NavLink>
                    <NavLink to="/Bebidas" className="text-white h-full hover:bg-slate-600">
                      Bebidas
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className=" absolute h-[20%] items-center bg-gray-800 w-full flex flex-col mt-[-11px]">
            <NavLink to="/" className="text-white h-full w-full justify-center hover:bg-slate-600 flex items-center">
                      Postres
                    </NavLink>
                    <NavLink to="/Comidas" className="text-white w-full h-full justify-center hover:bg-slate-600 flex items-center">
                      Comidas
                    </NavLink>
                    <NavLink to="/Bebidas" className="text-white w-full justify-center h-full hover:bg-slate-600 flex items-center">
                      Bebidas
                    </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
