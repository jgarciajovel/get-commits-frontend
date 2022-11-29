import React from 'react'
import PropTypes from 'prop-types'

function Commit({name}) {
  return (
    <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img src="https://avatars.githubusercontent.com/u/10103076?v=4" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center"></img>
        </div>

        <div className="ml-4 flex flex-1 flex-col">
            <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3 className="text-indigo-600 hover:text-indigo-500">
                        <a target='blank' href="https://github.com/jgarciajovel/get-commits/commit/fb51c01a052dfe669a45da6c814767ac0c9a7179">{name}</a>
                    </h3>
                    <p className="ml-4">Backend</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">Get commits controller and github integration</p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">2022-11-28T21:57:12Z</p>
            </div>
        </div>
    </li>
  )
}

export default Commit
