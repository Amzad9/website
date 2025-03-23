import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="max-w-md w-full space-y-8 p-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Page Not Found
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>
        <motion.div 
          className="mt-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => router.back()}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-medium text-white bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-black"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="w-full flex justify-center py-3 px-4 border border-white/10 rounded-xl text-sm font-medium text-white bg-white/5 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-black"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 