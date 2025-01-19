"use client";

import { useState, useEffect } from "react";

function Home() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [activePage, setActivePage] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const opacity = Math.max(1 - currentScrollY / 500, 0.5);
      setHeaderOpacity(opacity);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  const getNavItemStyle = (page) => {
    return activePage === page
      ? {
          color: "#8367c7",
          fontSize: "1rem",
          fontWeight: "bold",
          position: "relative",
          textDecoration: "none",
        }
      : {
          color: "#ffffff",
          fontSize: "1rem",
          fontWeight: "normal",
          transition: "color 0.3s",
          textDecoration: "none",
        };
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setActivePage(`#${sectionId}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: "#121212",
        color: "black",
        lineHeight: "1.6",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#121212",
          color: "#ffffff",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "opacity 0.3s ease-in-out",
          opacity: headerOpacity,
        }}
        onMouseEnter={() => setHeaderOpacity(1)}
        onMouseLeave={() => setHeaderOpacity(1 - lastScrollY / 500)}
      >
        {/* Logo */}
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#ffffff",
            }}
          >
            MyWebsite
          </a>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ margin: "0 1rem" }}>
              <a
                href="#home"
                onClick={() => handleNavClick("#home")}
                style={getNavItemStyle("#home")}
              >
                Home
                {activePage === "#home" && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "50%",
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#8367c7",
                      borderRadius: "50%",
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                )}
              </a>
            </li>

            <li style={{ margin: "0 1rem" }}>
              <a
                href="#about"
                onClick={() => handleNavClick("#about")}
                style={getNavItemStyle("#about")}
              >
                About
                {activePage === "#about" && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#8367c7",
                    }}
                  />
                )}
              </a>
            </li>

            <li style={{ margin: "0 1rem" }}>
              <a
                href="#features"
                onClick={() => handleNavClick("#features")}
                style={getNavItemStyle("#features")}
              >
                Features
                {activePage === "#features" && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#8367c7",
                    }}
                  />
                )}
              </a>
            </li>
            <li style={{ margin: "0 1rem" }}>
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                style={getNavItemStyle("#contact")}
              >
                Contact
                {activePage === "#contact" && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#8367c7",
                    }}
                  />
                )}
              </a>
            </li>
          </ul>
        </nav>

        <div style={{ display: "flex", gap: "1rem" }}>
          {/* Login Button */}
          <button
            style={{
              padding: "0.5rem 1.5rem",
              backgroundColor: "#6a11cb",
              color: "#ffffff",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#46237a")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#6a11cb")}
          >
            Log In
          </button>

          {/* Sign Up Button */}
          <button
            style={{
              padding: "0.5rem 1.5rem",
              backgroundColor: "#6a11cb",
              color: "#ffffff",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#46237a")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#6a11cb")}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          padding: "12.3rem 2rem",
          textAlign: "center",
          backgroundImage:
            "url('https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black",
          borderRadius: "10px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            zIndex: -1,
          }}
        ></div>

        <h1
          style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "bold" }}
        >
          Welcome to MyWebsite
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          imperdiet quam at arcu venenatis, vel interdum ipsum efficitur.
        </p>
        <button
          style={{
            padding: "0.8rem 2rem",
            backgroundColor: "#8367c7",
            color: "#121212",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "1.1rem",
            transition:
              "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
            marginTop: "1rem",
            clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
            position: "relative",
            zIndex: 0,
          }}
          onMouseEnter={(e) => (
            (e.target.style.backgroundColor = "#6a11cb"),
            (e.target.style.color = "#ffffff")
          )}
          onMouseLeave={(e) => (
            (e.target.style.backgroundColor = "#8367c7"),
            (e.target.style.color = "black")
          )}
        >
          Get Started <i className="bi bi-arrow-bar-right"></i>
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-6 bg-white flex justify-center items-center"
      >
        <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center text-left">
          {/* About Text */}
          <div className="flex-1 lg:pr-10 mb-8 lg:mb-0">
            <h2 className="text-4xl font-extrabold text-black mb-4 transition-all duration-300 ease-in-out">
              About Us
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              pretium justo ut felis tincidunt, et dignissim arcu feugiat. Donec
              aliquet, libero a condimentum placerat, orci nisl vehicula ligula,
              ac volutpat ante augue ac lectus. Nulla facilisi. Suspendisse
              potenti.
            </p>
          </div>

          {/* About Image */}
          <div className="flex-1 text-center transition-transform duration-500 transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1735208531295-85a081558f33?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Image"
              className="max-w-full h-auto rounded-xl shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
<section
  id="features"
  style={{
    padding: "6rem 2rem",
    textAlign: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1732391271020-75df21ae860b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Ensures full height for vertical centering
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    {/* Features Title */}
    <h2
      style={{
        fontSize: "3rem",
        marginBottom: "2rem",
        color: "#333",
        fontWeight: "bold",
      }}
    >
      Features
    </h2>

    {/* Features List */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2rem",
        textAlign: "center",
      }}
    >
      {/* Feature 1 */}
      <div
        style={{
          flex: "1",
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem",
          backgroundColor: "#f9f9f9",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            color: "#333",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Feature 1
        </h3>

        <div className="flex-1 text-center">
          <img
            src="https://images.unsplash.com/photo-1711869090270-02af29df0597?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Image"
            className="max-w-full h-auto rounded-xl shadow-2xl"
          />
        </div>

        <p style={{ fontSize: "1rem", color: "#555", marginTop: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pretium justo ut felis tincidunt.
        </p>
      </div>

      {/* Feature 2 */}
      <div
        style={{
          flex: "1",
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem",
          backgroundColor: "#f9f9f9",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            color: "#333",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Feature 2
        </h3>

        <div className="flex-1 text-center">
          <img
            src="https://images.unsplash.com/photo-1733855803980-eeed78f64836?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Image"
            className="max-w-full h-auto rounded-xl shadow-2xl"
          />
        </div>

        <p style={{ fontSize: "1rem", color: "#555", marginTop: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pretium justo ut felis tincidunt.
        </p>

        <p style={{ fontSize: "1rem", color: "#555" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pretium justo ut felis tincidunt.
        </p>
      </div>

      {/* Feature 3 */}
      <div
        style={{
          flex: "1",
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem",
          backgroundColor: "#f9f9f9",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            color: "#333",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Feature 3
        </h3>

        <div className="flex-1 text-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1690522330763-7cdc0f1eecc4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Image"
            className="max-w-full h-auto rounded-xl shadow-2xl"
          />
        </div>

        <p style={{ fontSize: "1rem", color: "#555", marginTop: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pretium justo ut felis tincidunt.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "5rem 2rem",
          backgroundColor: "#f9f9f9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Contact Title */}
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "2rem",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </h2>

          {/* Contact Description */}
          <p
            style={{
              fontSize: "1.2rem",
              color: "#555",
              marginBottom: "2rem",
              maxWidth: "800px",
              lineHeight: "1.6",
            }}
          >
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hi, feel free to drop us a message and we’ll get
            back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
              }}
            >
              {/* Name Input */}
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  padding: "1rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  outline: "none",
                  transition: "border-color 0.3s ease-in-out",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6a11cb")}
                onBlur={(e) => (e.target.style.borderColor = "#ddd")}
              />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  padding: "1rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  outline: "none",
                  transition: "border-color 0.3s ease-in-out",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6a11cb")}
                onBlur={(e) => (e.target.style.borderColor = "#ddd")}
              />

              {/* Message Textarea */}
              <textarea
                placeholder="Your Message"
                style={{
                  padding: "1.2rem",
                  fontSize: "1.1rem",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  outline: "none",
                  minHeight: "180px",
                  width: "100%",
                  resize: "vertical",
                  boxSizing: "border-box",
                  transition: "all 0.3s ease-in-out",
                  backgroundColor: "#f9f9f9",
                  color: "#333",
                  fontFamily: "Arial, sans-serif",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#6a11cb";
                  e.target.style.boxShadow = "0 0 8px rgba(106, 17, 203, 0.3)";
                  e.target.style.backgroundColor = "#fff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#ddd";
                  e.target.style.boxShadow = "none";
                  e.target.style.backgroundColor = "#f9f9f9";
                }}
              />

              {/* Submit Button */}
              <button
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: "#6a11cb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition:
                    "background-color 0.3s ease, transform 0.3s ease-in-out",
                  alignSelf: "center",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a09a3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#6a11cb")}
                onClick={(e) => e.preventDefault()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#121212",
          color: "#888888",
        }}
      >
        <p>&copy; {new Date().getFullYear()} Website. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Home;
