/* eslint-disable @next/next/no-img-element */
import { useAuth } from '../../context/auth';
import { Bars4Icon } from '@heroicons/react/24/outline';
import clsxm from '@myaccountui/ui';
import Link from 'next/link';

export function Navbar() {
  const { state: authState, dispatch } = useAuth();

  return authState.kind === 'AUTHENTICATED' ? (
    <nav
      style={{ backgroundColor: `rgb(var(--color-fill))` }}
      className="p-2 shadow bg-skin-fill md:flex md:items-center md:justify-between"
    >
      <div className="flex items-center justify-between ">
        <span className="text-2xl cursor-pointer">
          <img
            className="inline h-16 px-8"
            src="https://www.socalgas.com/sites/default/files/2021-07/socal-footer_logo.png"
            alt="socal gas logo"
          />
        </span>

        <span className="block mx-2 text-3xl cursor-pointer md:hidden">
          <Bars4Icon name="menu" className="w-6 h-6 text-white"></Bars4Icon>
        </span>
      </div>
      <ul className="text-white md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/payments/create-payment"
            className="text-xl duration-500 hover:text-cyan-500"
          >
            PAY
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            ABOUT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            CONTACT
          </a>
        </li>
      </ul>
      <div>
        {authState.kind === 'AUTHENTICATED' ? (
          <button
            type="button"
            className={clsxm(
              'inline-flex items-center rounded px-4 py-2 font-medium',
              'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
              'shadow-sm',
              'transition-colors duration-75',
              'hidden md:block',
              'bg-primary-500 text-white',
              'border border-primary-600',
              'hover:bg-primary-600 hover:text-white',
              'active:bg-primary-500',
              'disabled:bg-primary-400 disabled:hover:bg-primary-400'
            )}
            onClick={() => authState.logout(dispatch)}
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  ) : null;
}

export default Navbar;
