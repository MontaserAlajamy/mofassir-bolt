import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Settings, Users, MessageSquare, BarChart, Upload } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface DashboardStats {
  totalUsers: number;
  totalContacts: number;
  totalServices: number;
}

export function AdminDashboard() {
  const { isAdmin, isLoading } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalContacts: 0,
    totalServices: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch current logo
        const { data: settings } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'logo')
          .single();
        
        if (settings?.value?.url) {
          setLogoUrl(settings.value.url);
        }

        const [usersResponse, contactsResponse, servicesResponse] = await Promise.all([
          supabase.from('users').select('*', { count: 'exact', head: true }),
          supabase.from('contacts').select('*', { count: 'exact', head: true }),
          supabase.from('services').select('*', { count: 'exact', head: true }),
        ]);

        setStats({
          totalUsers: usersResponse.count || 0,
          totalContacts: contactsResponse.count || 0,
          totalServices: servicesResponse.count || 0,
        });
      } catch (err) {
        console.error('Error fetching dashboard stats:', err);
        setError('Failed to load dashboard statistics');
      } finally {
        setLoading(false);
      }
    };

    if (isAdmin) {
      fetchStats();
    }
  }, [isAdmin]);

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `logo.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('assets')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('assets')
        .getPublicUrl(fileName);

      // Update settings
      const { error: settingsError } = await supabase
        .from('settings')
        .upsert({ 
          key: 'logo',
          value: { url: publicUrl },
          updated_at: new Date().toISOString()
        });

      if (settingsError) throw settingsError;

      setLogoUrl(publicUrl);
    } catch (err) {
      console.error('Error uploading logo:', err);
      setError('Failed to upload logo');
    } finally {
      setUploading(false);
    }
  };

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

  if (isLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome to the Mofassir admin panel.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Logo Management</h2>
          {logoUrl && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Current Logo:</p>
              <img src={logoUrl} alt="Current logo" className="h-12 object-contain" />
            </div>
          )}
          <label className="block">
            <span className="sr-only">Choose logo file</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              disabled={uploading}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            />
          </label>
          {uploading && <p className="text-sm text-gray-600 mt-2">Uploading...</p>}
        </div>

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