const ProfilePage = () => {
  const user = {
    username: "tamjid_ahmed",
    email: "tamjid@example.com",
    bio: "Web developer and Next.js enthusiast.",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors px-4">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Username</h2>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{user.username}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{user.email}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Bio</h2>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
