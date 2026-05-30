create table public.courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.courses enable row level security;

create policy "Allow public read" on public.courses
  for select using (true);

insert into public.courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Code2'),
  ('System Design Fundamentals', 42, 'Server'),
  ('TypeScript Deep Dive', 91, 'FileType'),
  ('Node.js Microservices', 28, 'Network');
