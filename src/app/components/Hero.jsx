export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Upgrade Your Skills Today 🚀
          </h1>

          <p className="text-gray-600 mb-6 text-lg">
            Learn from industry experts and boost your career with modern skills.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>

          
          </div>
        </div>

        <div className="w-full md:w-1/2">
        <img
  src="/hero.gif"
  alt="Learning"
  className="rounded-xl shadow-lg w-full object-cover"
/>
        </div>
      </div>
    </section>
  )
}