-- Create the public.habits table used by the Habit Tracker API.
-- Run this SQL in your Supabase SQL editor or via psql against the project database.

CREATE TABLE IF NOT EXISTS public.habits (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  habit_name text NOT NULL,
  category text NOT NULL,
  frequency text NOT NULL,
  start_date date NOT NULL,
  status text NOT NULL DEFAULT 'Pending',
  inserted_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
