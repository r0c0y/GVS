"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Users, Mail, LogOut, Loader2 } from "lucide-react";

interface Stats {
    visitors: number;
    subscribersCount: number;
}

interface Subscriber {
    email: string;
    date: string;
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("/api/admin/stats");
                if (res.ok) {
                    const data = await res.json();
                    setStats(data.stats);
                    setSubscribers(data.subscribers);
                } else {
                    router.push("/admin/login");
                }
            } catch (error) {
                console.error("Failed to fetch stats");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [router]);

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-heading font-bold">Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 bg-white/5 border border-white/10 rounded-xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-medium text-muted">Total Visitors</h3>
                        </div>
                        <p className="text-4xl font-bold">{stats?.visitors}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-6 bg-white/5 border border-white/10 rounded-xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-medium text-muted">Total Subscribers</h3>
                        </div>
                        <p className="text-4xl font-bold">{stats?.subscribersCount}</p>
                    </motion.div>
                </div>

                {/* Subscribers Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                >
                    <div className="p-6 border-b border-white/10">
                        <h2 className="text-xl font-bold">Recent Subscribers</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-muted text-sm uppercase">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Email</th>
                                    <th className="px-6 py-4 font-medium">Date Joined</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {subscribers.length === 0 ? (
                                    <tr>
                                        <td colSpan={2} className="px-6 py-8 text-center text-muted">
                                            No subscribers yet.
                                        </td>
                                    </tr>
                                ) : (
                                    subscribers.map((sub, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4">{sub.email}</td>
                                            <td className="px-6 py-4 text-muted text-sm">{sub.date}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
