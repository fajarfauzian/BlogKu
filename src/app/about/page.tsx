import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hi! I’m Fajar Fauzian! 👋
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I am a{" "}
                  <span className="font-semibold text-blue-600">
                    frontend and web developer
                  </span>{" "}
                  with a strong focus on developing responsive and user-friendly
                  web applications. I specialize in JavaScript, PHP, and modern
                  frameworks such as Vue.js, React.js, Next.js, and Laravel. I
                  enjoy turning ideas into clean and functional interfaces that
                  enhance the user experience.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Passionate Frontend Developer
                  </h3>
                  <p className="text-gray-600">
                    For me, frontend is not just about creating an attractive interface. More than that, frontend is about how users interact with the application directly from speed, responsiveness, navigation flow, to the ease of using existing features. So, in addition to understanding UI/UX design, I also focus on the logic behind components, clean code structure, and seamless integration with the backend.
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let&apos;s Collaborate!
              </h3>
              <p className="text-gray-700 mb-6">
                Interested in collaborating or want to share ideas? Don&apos;t hesitate to contact me!
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://wa.me/6285710249716"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contact Me
                </Link>
                <Link
                  href="https://zianscode.vercel.app/"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
