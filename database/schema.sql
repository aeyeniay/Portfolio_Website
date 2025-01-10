-- Ziyaretçi tablosu
CREATE TABLE visitors (
    id SERIAL PRIMARY KEY,
    ip_address VARCHAR(45),
    country_code VARCHAR(2),
    country_name VARCHAR(100),
    city VARCHAR(100),
    browser VARCHAR(100),
    os VARCHAR(100),
    device_type VARCHAR(20),
    referrer_url TEXT,
    page_url TEXT,
    visit_duration INTEGER, -- saniye cinsinden
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Oturum tablosu
CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,
    visitor_id INTEGER REFERENCES visitors(id),
    session_start TIMESTAMP WITH TIME ZONE,
    session_end TIMESTAMP WITH TIME ZONE,
    bounce BOOLEAN DEFAULT false,
    pages_visited INTEGER DEFAULT 1
);

-- Sayfa ziyaretleri tablosu
CREATE TABLE page_views (
    id SERIAL PRIMARY KEY,
    session_id INTEGER REFERENCES sessions(id),
    page_url TEXT,
    time_spent INTEGER, -- saniye cinsinden
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 