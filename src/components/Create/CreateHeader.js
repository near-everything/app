import Link from "next/link";

function CreateHeader({ children, disabled, handleSubmit }) {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link href="/">
          <button className="btn btn-ghost">X</button>
        </Link>
      </div>
      <div className="navbar-center">
        {children}
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost"
          disabled={disabled}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateHeader;
