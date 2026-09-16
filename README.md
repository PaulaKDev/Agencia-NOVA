# 🎨 Agencia NÕVA — Landing Page de Estudio Creativo

Una landing page moderna y minimalista diseñada para un estudio creativo especializado en **diseño web, branding y SEO**. El proyecto destaca por su estética cuidada, tipografía editorial, diseño responsive e interactividad mediante JavaScript Vanilla.

![Agencia NÕVA Preview](assets/img/hero-visual.png)

## 🚀 Demo En Vivo

- **Sitio web:** [VERCEL](https://agencia-nova-pi.vercel.app)
- **Repositorio:** [Agencia NOVA](https://github.com/PaulaKDev/Agencia-NOVA)

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Navegación por anclas, contenedores estructurales (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) y optimización A11y.
- **CSS3 (Modular y Adaptable):**
  - **Design System Tokens:** Variables CSS para control global de paleta de color (modo claro/beige y oscuro), tipografías y espaciados.
  - **Flexbox & CSS Grid:** Layouts fluidos y tarjetas adaptables.
  - **Scroll Suave:** Navegación interna mediante `scroll-behavior: smooth`.
  - **Media Queries:** Maquetación 100% responsive para teléfonos, tablets y monitores.
- **JavaScript Vanilla:**
  - Desplegable interactivo para la sección de Preguntas Frecuentes (FAQ).
  - Menú hamburguesa dinámico para navegación móvil.

---

## ✨ Secciones del Sitio

* **Header Sticky:** Navegación superior fija con efecto *glassmorphic* y accesos directos por anclaje a las secciones.
* **Hero Section:** Presentación de impacto con llamada a la acción (CTA) y mockup visual del estudio.
* **Servicios:** Tarjetas interactivas con cambio de estado al hacer hover (*Diseño Web, Branding, SEO*).
* **Metodología / Proceso:** Flujo estructurado en 4 pasos del trabajo artesanal de la agencia.
* **Manifiesto:** Bloque visual de contraste en tono azul marino profundo con la filosofía de trabajo.
* **Portafolio:** Muestra de case studies (*Refugio Rainbow, Tercera Juventud, BIO Barf*).
* **FAQ (Acordeón):** Módulo interactivo desplegable para la resolución de dudas frecuentes.
* **Footer Corporativo:** Enlaces de contacto, ubicación y navegación legal.

---

## 📂 Estructura del Proyecto

```text
landing-agencia-nova/
├── index.html
├── script.js            # Lógica JS (Acordeón FAQ y menú móvil)
├── assets/
│   └── img/             # Logotipos e imágenes (.png, .jpg, .svg)
├── css/
│   └── styles.css       # Estilos globales, variables y responsive
└── README.md
