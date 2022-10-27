import { useState } from "react";
import { RgbaStringColorPicker } from "react-colorful";
import Avatar from "../Avatar";

function EditProfile() {
  const [color, setColor] = useState("#ffffff");

  return (
    <>
      <input type="checkbox" id="edit-profile" className="modal-toggle" />
      <label
        htmlFor="edit-profile"
        className="modal modal-bottom sm:modal-middle cursor-pointer"
      >
        <label className="modal-box relative h-full" htmlFor="">
          <div className="h-3/4">
            <div className="dropdown">
              <label tabIndex="0">
                <Avatar color={color} />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
              >
                <RgbaStringColorPicker color={color} onChange={setColor} />
              </ul>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}

export default EditProfile;
