# Mofassir Website

A modern AI solutions platform built with React, TypeScript, and Supabase.

## Features

- 🔐 Secure authentication system
- 📧 Contact form with file attachments
- 🎨 Dynamic services showcase
- 👑 Admin dashboard
- 📱 Responsive design
- 🔄 Real-time updates

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Database Schema

### Users Table
- Managed by Supabase Auth

### Services Table
- `id` (uuid, primary key)
- `title` (text)
- `description` (text)
- `icon` (text)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Contacts Table
- `id` (uuid, primary key)
- `name` (text)
- `email` (text)
- `subject` (text)
- `message` (text)
- `attachment_url` (text)
- `created_at` (timestamp)

### Settings Table
- `id` (uuid, primary key)
- `key` (text)
- `value` (jsonb)
- `updated_at` (timestamp)

## Security Considerations

1. Row Level Security (RLS) is enabled on all tables
2. Public access is restricted to necessary operations only
3. Admin operations require proper authentication
4. File uploads are restricted to allowed types
5. All user input is validated and sanitized

## Admin Panel Usage

1. Access the admin panel at `/admin`
2. Features available:
   - User management
   - Services management
   - Contact form submissions
   - Site settings
   - Analytics dashboard

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to your hosting provider
3. Set up environment variables on your hosting platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.