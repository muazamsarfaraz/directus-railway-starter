import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Directus Railway Starter
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A modern headless CMS setup with Directus backend, Next.js frontend,
            and visual editing capabilities - all deployed on Railway.
          </p>

          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
            <Link
              href="/blog"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
            >
              View Blog
            </Link>
            <a
              href={`${process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'}/admin`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-solid border-blue-600 text-blue-600 transition-colors flex items-center justify-center hover:bg-blue-50 font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
            >
              Open Directus Admin
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🚀 Directus CMS
            </h3>
            <p className="text-gray-600">
              Powerful headless CMS with intuitive admin interface and flexible data modeling.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ⚡ Next.js Frontend
            </h3>
            <p className="text-gray-600">
              Modern React framework with server-side rendering and optimal performance.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ✨ Visual Editing
            </h3>
            <p className="text-gray-600">
              Edit content directly on your website with Directus visual editing capabilities.
            </p>
          </div>
        </div>
      </main>
      <footer className="text-center py-8 border-t border-gray-200 bg-white">
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600 hover:text-gray-900"
            href="https://directus.io/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Directus Docs
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600 hover:text-gray-900"
            href="https://railway.app/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚂 Railway Docs
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600 hover:text-gray-900"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⚡ Next.js Docs
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Built with Directus, Next.js, and deployed on Railway
        </p>
      </footer>
    </div>
  );
}
