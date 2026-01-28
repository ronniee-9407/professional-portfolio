import { Component, type ErrorInfo, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card p-10 rounded-3xl max-w-lg w-full text-center"
                    >
                        <div className="text-6xl mb-6">⚠️</div>
                        <h1 className="text-3xl font-display font-bold text-white mb-4">Something went wrong</h1>
                        <p className="text-gray-400 mb-8">
                            We encountered an unexpected error. Don't worry, your progress is safe.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
                        >
                            Reload Page
                        </button>
                        <details className="mt-8 text-left text-sm text-red-400 bg-red-950/20 p-4 rounded-xl border border-red-500/20">
                            <summary className="cursor-pointer font-semibold mb-2">Error Details</summary>
                            <pre className="whitespace-pre-wrap">{this.state.error?.toString()}</pre>
                        </details>
                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
