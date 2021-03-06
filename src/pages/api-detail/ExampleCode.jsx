import React, { useState } from 'react';
import { Tab } from '@headlessui/react'
import classNames from 'classnames';
const ExampleCode = ({data}) => {

    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    return (
        <>
            <header id="header" className="relative z-20">
                <div>
                    <h3 className="text-slate-900 tracking-tight dark:text-slate-200">
                        Ví dụ code
                    </h3>
                </div>
                <div className="w-full max-w-md px-2 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex p-1 space-x-1 bg-blue-900/50 rounded-xl">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((posts, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'bg-white rounded-xl p-3',
                                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                    )}
                                >
                                    <ul>
                                        {posts.map((post) => (
                                            <li
                                                key={post.id}
                                                className="relative p-3 rounded-md hover:bg-coolGray-100"
                                            >
                                                <h3 className="text-sm font-medium leading-5">
                                                    {post.title}
                                                </h3>

                                                <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                                                    <li>{post.date}</li>
                                                    <li>&middot;</li>
                                                    <li>{post.commentCount} comments</li>
                                                    <li>&middot;</li>
                                                    <li>{post.shareCount} shares</li>
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </header>
        </>
    )
}

export default ExampleCode
