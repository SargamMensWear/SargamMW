/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
}

a:hover {
    color: #e67e22;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}

.btn {
    display: inline-block;
    background-color: #e67e22;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
}

.btn:hover {
    background-color: #d35400;
    color: #fff;
}

section {
    padding: 60px 0;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
    color: #333;
}

/* Header Styles */
header {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
}

.logo h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #e67e22;
}

nav ul {
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 4px;
}

nav ul li a.active,
nav ul li a:hover {
    color: #e67e22;
}

/* Hero Section */
.hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    color: #fff;
    text-align: center;
    padding: 100px 0;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #fff;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

/* Services Preview Section */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.service-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-card i {
    font-size: 3rem;
    color: #e67e22;
    margin-bottom: 20px;
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.services-preview .btn {
    display: block;
    width: 200px;
    margin: 0 auto;
}

/* About Section */
.about {
    background-color: #f5f5f5;
}

.about p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 20px;
    font-size: 1.1rem;
}

/* Portfolio Preview Section */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.portfolio-item {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.portfolio-image {
    height: 250px;
    overflow: hidden;
}

.portfolio-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-image img {
    transform: scale(1.05);
}

.portfolio-info {
    padding: 20px;
}

.portfolio-info h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.portfolio-preview .btn {
    display: block;
    width: 200px;
    margin: 0 auto;
}

/* Footer Styles */
footer {
    background-color: #333;
    color: #fff;
    padding: 60px 0 20px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

footer h3 {
    color: #e67e22;
    margin-bottom: 20px;
    font-size: 1.3rem;
}

footer p {
    margin-bottom: 10px;
}

footer a {
    color: #ccc;
}

footer a:hover {
    color: #e67e22;
}

footer i {
    margin-right: 10px;
    color: #e67e22;
}

.social-icons {
    display: flex;
    gap: 15px;
}

.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #444;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.social-icons a:hover {
    background-color: #e67e22;
}

.social-icons i {
    margin-right: 0;
    color: #fff;
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #444;
}

/* Page Header */
.page-header {
    background-color: #f5f5f5;
    padding: 40px 0;
    text-align: center;
}

.page-header h2 {
    margin-bottom: 0;
}

/* Services Full Page */
.service-item {
    display: flex;
    margin-bottom: 40px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.service-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    background-color: #e67e22;
    color: #fff;
    padding: 20px;
}

.service-icon i {
    font-size: 4rem;
}

.service-content {
    padding: 30px;
    flex: 1;
}

.service-content h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #333;
}

.service-content p {
    margin-bottom: 15px;
}

/* CTA Section */
.cta {
    background-color: #e67e22;
    color: #fff;
    text-align: center;
}

.cta h2 {
    color: #fff;
}

.cta .btn {
    background-color: #fff;
    color: #e67e22;
}

.cta .btn:hover {
    background-color: #f5f5f5;
}

/* Portfolio Filters */
.portfolio-filters {
    padding-bottom: 0;
}

.filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
}

.filter-btn {
    padding: 8px 15px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
    background-color: #e67e22;
    color: #fff;
}

/* Contact Page */
.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.contact-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.contact-card i {
    font-size: 3rem;
    color: #e67e22;
    margin-bottom: 20px;
}

.contact-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.contact-form form {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
}

.form-group textarea {
    resize: vertical;
}

.map-container {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive Styles */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
    }
    
    nav ul {
        margin-top: 20px;
    }
    
    .service-item {
        flex-direction: column;
    }
    
    .service-icon {
        width: 100%;
        padding: 30px;
    }
    
    .hero h2 {
        font-size: 2.5rem;
    }
}

@media (max-width: 576px) {
    nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    nav ul li {
        margin: 5px;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .filters {
        flex-direction: column;
        align-items: center;
    }
}
