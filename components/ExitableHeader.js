import Link from "next/link";

function ExitableHeader({ children, href = "/" }) {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link href={href}>
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="navbar-center">{children}</div>
      <div className="navbar-end" />
    </div>
  );
}

export default ExitableHeader;
