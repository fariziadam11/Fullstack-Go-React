# Backend API with Go

This is a RESTful API backend service built with Go (Golang) using the Gin framework and GORM for database operations.

## 🚀 Features

- RESTful API architecture
- MySQL database integration with GORM
- JWT authentication
- Environment configuration
- Structured project layout
- Middleware support
- Input validation
- Error handling

## 📋 Prerequisites

- Go 1.24.4 or higher
- MySQL database
- Air (for hot reloading during development)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd backend-golang
```

2. Install dependencies:
```bash
go mod download
```

3. Create a `.env` file in the root directory with the following variables:
```env
APP_PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
```

4. Run the application:
```bash
# Using Air for development (hot reload)
air

# Or using Go directly
go run main.go
```

## 📁 Project Structure

```
.
├── config/         # Configuration files
├── controllers/    # Request handlers
├── database/       # Database connection and setup
├── helpers/        # Helper functions
├── middlewares/    # Custom middlewares
├── models/         # Database models
├── routes/         # Route definitions
├── structs/        # Data structures
├── main.go         # Application entry point
└── .env           # Environment variables
```

## 🛠️ Technologies Used

- [Gin](https://github.com/gin-gonic/gin) - Web framework
- [GORM](https://gorm.io/) - ORM library
- [JWT](https://github.com/golang-jwt/jwt) - Authentication
- [GoDotEnv](https://github.com/joho/godotenv) - Environment configuration
- [MySQL](https://www.mysql.com/) - Database
- [Air](https://github.com/cosmtrek/air) - Live reload for Go applications

## 📝 API Documentation

The API documentation will be available at `/swagger` when running the server (if Swagger is implemented).

## 🔒 Security

- JWT-based authentication
- Environment variable configuration
- Input validation
- Secure password handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Farizi Adam - Initial work

## 🙏 Acknowledgments

- Gin Web Framework
- GORM
- All other open-source contributors 