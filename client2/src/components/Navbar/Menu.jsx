import React from "react"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {CgProfile} from 'react-icons/cg'
import {FaSignInAlt} from 'react-icons/fa'
import {MdSwitchAccount} from 'react-icons/md'
import {IoIosHelpCircleOutline} from 'react-icons/io'

export default function Example() {
  return (
    <div className="top-16 text-right ml-6">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <CgProfile className="text-4xl text-white"/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-center divide-y divide-gray-100 rounded-md bg-white">
            <div className="px-1 py-1">
              
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-leaf text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-3`}
                  >
                    <FaSignInAlt className="text-md"/>
                    Sign In
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-leaf text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-3`}
                  >
                    <MdSwitchAccount className="text-md"/>
                    Sign Up
                  </button>
                )}
              </Menu.Item>

            </div>

            <div className="px-1 py-1">
              
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-leaf text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-3`}
                  >
                    <IoIosHelpCircleOutline className="text-md"/>
                    Help
                  </button>
                )}
              </Menu.Item>
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}