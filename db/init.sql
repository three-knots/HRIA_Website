-- Create tables
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tool_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS tools (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES users(id),
    category_id INTEGER REFERENCES tool_categories(id),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    condition VARCHAR(50),
    available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tool_loans (
    id SERIAL PRIMARY KEY,
    tool_id INTEGER REFERENCES tools(id),
    borrower_id INTEGER REFERENCES users(id),
    loan_date DATE NOT NULL,
    return_date DATE,
    status VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS masjid (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    admin_email VARCHAR(255) NOT NULL,
    contact_method VARCHAR(255),
    donation_links JSONB,
    iqama_times JSONB
);

-- Insert some sample data
INSERT INTO tool_categories (name) VALUES
('Garden Tools'),
('Hand Tools'),
('Power Tools');

-- You can add sample users and tools here if needed