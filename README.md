# Modern Portfolio Website

A modern portfolio website built with Next.js 14, featuring real-time analytics, interactive resume display, and a responsive design.

![Portfolio Website Preview](/public/images/screenshots/home.png)

## 🚀 Features

- **Modern UI/UX**: Clean and responsive design using Tailwind CSS
- **Real-time Analytics**: Track page views and visitor statistics
- **Interactive Resume**: Dynamic resume display with downloadable PDF option
- **Project Showcase**: Showcase your projects with detailed descriptions
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Database Integration**: Prisma ORM for efficient data management
- **TypeScript**: Type-safe development environment
- **Mobile Responsive**: Fully responsive design for all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Analytics**: Custom analytics implementation
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📸 Screenshots


### Home Page
![Home Page](/public/images/screenshots/home.png)

### Projects Page
![Projects Page](/public/images/screenshots/projects.png)

### Resume Page
![Resume Page](/public/images/screenshots/resume.png)

### Analytics Page
![Analytics](/public/images/screenshots/analytics.png)


## 🚀 Getting Started

1. **Clone the repository**

```bash 
git clone https://github.com/yourusername/portfolio-website.git
```


2. **Install dependencies**
```bash 
npm install
```


3. **Set up environment variables**
```bash 
cp .env.example .env
```


4. **Set up the database**
```bash
npx prisma migrate dev
```


5. **Run the development server**
```bash
npm run dev
```


## 📄 Environment Variables

Create a `.env` file with the following variables:
```env
DATABASE_URL="your-database-url"
NEXT_PUBLIC_SITE_URL="your-site-url"
```


## 🗄️ Database Schema

The project uses Prisma with PostgreSQL. Key models include:
- PageView
- Visitor
- Analytics

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized for all screen sizes

## 🔍 SEO

- Meta tags optimization
- Semantic HTML
- Sitemap generation
- robots.txt configuration

## 🛠️ Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Run linting
npm run lint
```


## 📈 Performance

- Lighthouse Score: 90+ on all metrics
- Optimized images and assets
- Efficient data fetching
- Code splitting and lazy loading

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Ahmet Erdem Yeniay - [aeyeniay@gmail.com](mailto:your@email.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)
