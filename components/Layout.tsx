import { useState } from 'react'
import Link from 'next/link'

function Layout({ children }: { children: JSX.Element }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const handleMenu = () => setMenuOpen(!menuOpen)
  const handleOpen = () => setCartOpen(!cartOpen)
  return (
    <div className="bg-white">
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
              Brandt Studios
            </div>
            <div className="flex items-center justify-end w-full">
              <button
                onClick={handleOpen}
                className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>

              <div className="flex sm:hidden">
                <button
                  onClick={handleMenu}
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <nav
            className={`${menuOpen ? '' : 'hidden'
              } sm:flex sm:justify-center sm:items-center mt-4`}
          >
            <div className="flex flex-col sm:flex-row">
              <Link href="/">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Gallery
                </a>
              </Link>
              <Link href="/paintings">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Paintings
                </a>
              </Link>
              <Link href="/pottery">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Pottery
                </a>
              </Link>
              <Link href="/photography">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Photography
                </a>
              </Link>
              <Link href="/about">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Contact
                </a>
              </Link>
            </div>
          </nav>
          <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <input
              className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </header>
      {/*
      // This Cart doesn't really work… yet!
      <Cart cartOpen={cartOpen} handleOpen={handleOpen} />
      */}
      <main className="my-8">{children}</main>
      <footer className="bg-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-bold text-gray-500 hover:text-gray-400"
          >
            Pulp Inc.
          </a>
          <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
