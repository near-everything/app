function ProfileData() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mt-2 mb-4">
            <p>Elliot Braem</p>
          </div>
          <button className="btn">edit profile</button>
        </div>
      </div>
    </>
  );
}

export default ProfileData;
