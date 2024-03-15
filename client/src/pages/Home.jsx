import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div class="mx-auto max-w-3xl text-center">
                    <h1
                        class="bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Modern Issue Tracker

                        <span class="sm:block"> for your team. </span>
                    </h1>

                    <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed ">
                        Let's track now your all issues, assigned task and
                        <br />project activities at one place
                    </p>

                    <div class="mt-8 flex flex-wrap justify-center gap-4">
                        <Link to="/signup"

                            class="block w-full rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:text-indigo-600 hover:bg-transparent focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
