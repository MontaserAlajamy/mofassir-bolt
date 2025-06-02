import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Settings, Users, MessageSquare, BarChart } from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  totalContacts: number;
  totalServices: number;
}

export function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalContacts: 0,
    totalServices: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        const [usersResponse, contactsResponse, servicesResponse] = await Promise.all([
          supabase.from('users').select('*', { count: 'exact', head: true }),
          supabase.from('contacts').select('*', { count: 'exact', head: true }),
          supabase.from('services').select('*', { count: 'exact', head: true }),
        ]);

        // Check for any errors in the responses
        if (usersResponse.error) throw usersResponse.error;
        if (contactsResponse.error) throw contactsResponse.error;
        if (servicesResponse.error) throw servicesResponse.error;

        setStats({
          totalUsers: usersResponse.count || 0,
          totalContacts: contactsResponse.count || 0,
          totalServices: servicesResponse.count || 0,
        });
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
        setError('Failed to load dashboard statistics. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      name: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      name: 'Contact Messages',
      value: stats.totalContacts,
      icon: MessageSquare,
      color: 'bg-green-500',
    },
    {
      name: 'Services',
      value: stats.totalServices,
      icon: Settings,
      color: 'bg-purple-500',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome to the Mofassir admin panel.</p>
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {statCards.map((stat) => (
              <div
                key={stat.name}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {/* Add recent activity items here */}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Users className="h-6 w-6 text-gray-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Manage Users</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Settings className="h-6 w-6 text-gray-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Edit Services</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <MessageSquare className="h-6 w-6 text-gray-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">View Messages</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <BarChart className="h-6 w-6 text-gray-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}