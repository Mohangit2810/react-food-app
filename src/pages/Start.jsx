/* eslint-disable react/prop-types */
function Start({ goToLayout }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full w-full bg-[#0088D1] gap-6">
        <h1 className="text-white text-5xl">Order Food</h1>
        <button
          type="button"
          onClick={() => goToLayout("Order")}
          className="text-white hover:text-[#0088D1] border-2 border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-xl font-bold px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-[#0088D1] dark:hover:bg-white dark:focus:ring-white"
        >
          Order
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full bg-[#FFA000] gap-6">
        <h1 className="text-white text-5xl">Nah I&apos;d Cook</h1>
        <button
          type="button"
          onClick={() => goToLayout("Food")}
          className="text-white hover:text-[#FFA000] border-2 border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-xl font-bold px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-[#FFA000] dark:hover:bg-white dark:focus:ring-white"
        >
          Cook
        </button>
      </div>
    </div>
  );
}

export default Start;
