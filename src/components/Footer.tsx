export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-10 px-4 border-t border-gray-100 bg-gray-50/50">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex flex-col items-center gap-2">
          <div className="text-xl font-black text-gray-300 italic tracking-tighter uppercase">
            FUN88 <span className="text-gray-200">Clone</span>
          </div>
          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            Developed for Andes Technical Exam • Unofficial Use
          </p>
        </div>

        <div className="h-px w-12 bg-gray-200 mx-auto"></div>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Created by{" "}
            <a
              href="https://github.com/tylerbert31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 font-bold hover:text-sky-600 transition-colors"
            >
              Tyler Bert Baring
            </a>
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/tylerbert31"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 hover:text-gray-900 hover:shadow-md transition-all duration-300"
              title="GitHub Profile"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://github.com/tylerbert31/andes-fe-challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-sky-50 text-sky-600 rounded-lg text-xs font-bold hover:bg-sky-100 transition-colors border border-sky-100"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Repository
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
