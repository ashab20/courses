const Dashboard = () => {
  return (
    <>
      <div className="w-full my-10 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div
          id="fullWidthTabContent"
          className="border-t border-gray-200 dark:border-gray-600"
        >
          <div
            className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Students
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Enrolls
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Courses
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Total Users
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Total Modules
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
