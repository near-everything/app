import Link from "next/link";

function SettingsHeader() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link href="/profile">
          <button className="btn btn-ghost">{"<"}</button>
        </Link>
      </div>
      <div className="navbar-center">
        <p className="font-semibold">Settings</p>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default SettingsHeader;
