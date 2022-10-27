function Header({ title }) {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-4xl">{title}</a>
      </div>
    </div>
  );
}

export default Header;
