import { supabase } from './supabase';

const ADMIN_EMAIL = 'admin@mofassir.com';
const ADMIN_PASSWORD = 'Admin@2025!'; // You should change this password

export async function setupAdminUser() {
  const { data: existingUser } = await supabase
    .from('users')
    .select('id')
    .eq('email', ADMIN_EMAIL)
    .single();

  if (!existingUser) {
    const { data, error } = await supabase.auth.signUp({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      options: {
        data: {
          role: 'admin'
        }
      }
    });

    if (error) {
      console.error('Error creating admin user:', error);
      return false;
    }

    // Set admin role in the database
    if (data.user) {
      await supabase.from('users')
        .update({ role: 'admin' })
        .eq('id', data.user.id);
    }
  }

  return true;
}

export async function isAdmin() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { data } = await supabase
    .from('users')
    .select('role')
    .eq('id', user.id)
    .single();

  return data?.role === 'admin';
}

export async function requireAdmin() {
  const adminStatus = await isAdmin();
  if (!adminStatus) {
    throw new Error('Unauthorized: Admin access required');
  }
  return true;
}