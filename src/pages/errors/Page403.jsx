import React from 'react';
import { Link } from 'react-router-dom';
import { routerMain } from 'constants/routerMain';

export const Page403 = () => {
    return (
        <section className="bg-yellow-700 z-50 absolute top-0 left-0 h-screen w-screen">
            <div className="container">
                <div className="flex -mx-4 ">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[400px] text-center absolute top-2/4 right-2/4 -translate-y-2/4 translate-x-2/4">
                            <h2 className="font-bold text-white mb-2 text-[50px] sm:text-[80px] md:text-[100px] leading-none">
                                403
                            </h2>
                            <h4
                                className="text-white font-medium text-[22px] leading-tight mb-3"
                            >
                                Oops! Access denied
                            </h4>
                            <p className="text-lg text-white mb-8">
                            You don't have permission to access 🚧 this area
                            </p>
                            <Link
                                to={routerMain.HOME}
                                className="
                  text-base
                  font-medium
                  text-white
                  inline-block
                  text-center
                  border border-white
                  rounded-lg
                  px-8
                  py-3
                  hover:bg-white hover:text-primary
                  transition
                  "
                            >
                                Go To Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="
      absolute
      -z-10
      w-full
      h-full
      top-0
      left-0
      flex
      justify-between
      items-center
      space-x-5
      md:space-x-8
      lg:space-x-14
      "
            >
                <div
                    className="w-1/3 h-full bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
                ></div>
                <div className="w-1/3 h-full flex">
                    <div
                        className="
            w-1/2
            h-full
            bg-gradient-to-b
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
                    ></div>
                    <div
                        className="
            w-1/2
            h-full
            bg-gradient-to-t
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
                    ></div>
                </div>
                <div
                    className="w-1/3 h-full bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
                ></div>
            </div>
        </section>
    )
}

export default Page403
