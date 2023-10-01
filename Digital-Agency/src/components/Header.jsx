import Link from "next/link";

function Header() {
  return (
    <section className="relative bg-green-100 ">
      <div className="container mx-auto">
        <nav className="relative px-6 py-6 flex justify-between items-center z-10">
          <Link className="text-3xl font-bold leading-none" href="/">
            <div className="flex">
              <h2 className="text text-lg text-black ">Design</h2>
              <h2 className="text text-lg text-orange-500 ">AGENCY</h2>
            </div>
          </Link>
          <ul className="hidden absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                className="text-sm text-black font-bold hover:text-gray-500"
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link className="text-sm text-black font-bold" href="/team">
                Team
              </Link>
            </li>

            <li>
              <Link
                className="text-sm text-black font-bold hover:text-gray-500"
                href="/service"
              >
                Service
              </Link>
            </li>

            <li>
              <Link
                className="text-sm text-black font-bold hover:text-gray-500"
                href="/project"
              >
                Project
              </Link>
            </li>

            <li>
              <Link
                className="text-sm text-black font-bold hover:text-gray-500"
                href="/testimonial"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/login">
                <button className="btn border border-solid border-green-500 hover:bg-green-500 hover:text-white py-2 px-4 rounded">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <button className="btn bg-green-500 hover:bg-white text-white hover:text-gray-500 py-2 px-4 rounded">
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Header;
