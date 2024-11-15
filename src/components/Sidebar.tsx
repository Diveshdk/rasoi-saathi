'use client';
import { useRouter } from 'next/navigation';

function Sidebar({ className }:{className:string}) {
    const router = useRouter();

    return (
        <aside className={`${className} bg-gray-800 text-white w-full md:w-1/4 p-6 rounded-lg shadow-lg`}>
            <div className="space-y-6">
                {/* Home Page Link */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">🏠</span>
                    <a onClick={() => router.push('/')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Home Page</a>
                </div>
                
                {/* Analytics Link */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">📊</span>
                    <a onClick={() => router.push('/analytics')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Analytics</a>
                </div>
                
                {/* Donation Section */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">💰</span>
                    <a onClick={() => router.push('/donation')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Donation</a>
                </div>

                {/* Donation History Link */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">📜</span>
                    <a onClick={() => router.push('/donation-history')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Donation History</a>
                </div>
                
                {/* Education Section Link */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">📚</span>
                    <a onClick={() => router.push('/education')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Education</a>
                </div>

                {/* Recipe Suggestion Link */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">🍲</span>
                    <a onClick={() => router.push('/recipe-suggestions')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Recipe Suggestions</a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
