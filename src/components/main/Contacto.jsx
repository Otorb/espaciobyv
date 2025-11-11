import React from 'react';
//import emailjs from "@emailjs/browser";
import { useRouter } from 'next/navigation';

function Contact() {
  const router = useRouter();

  function sendEmail(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validaciones
    if (!name || !email || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validación de formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Si todo está correcto, enviar correo
  //  emailjs
    //  .sendForm(
      //  "service_4guxsbi",
       // "template_rqgx2ad",
    //    form,
      //  "p1yPa2i3HUcwi_CxS"
   //   )
   //   .then((res) => {
   //     alert("Su mensaje ha sido enviado, pronto te responderemos");
  //      console.log(res);
   //     router.push("/"); // redirigir al home
   //   })
   //   .catch((err) => {
   //     console.log(err);
   //     alert("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.");
//});
  }

  return (
    <section id="contacto" className="container mx-auto px-4 py-16" data-aos="fade-right">
      <h3 className="text-3xl font-semibold mb-6 text-center">Contacto</h3>
      <form className="max-w-xl mx-auto space-y-4" onSubmit={sendEmail}>
        <input type="text" placeholder="Nombre" name="name" className="w-full px-4 py-2 border rounded" />
        <input type="email" placeholder="Correo electrónico" name="email" className="w-full px-4 py-2 border rounded" />
        <textarea placeholder="Mensaje" name="message" rows={5} className="w-full px-4 py-2 border rounded"></textarea>
        <button type="submit" className="bg-primary w-full text-white px-6 py-3 cursor-pointer rounded hover:bg-blue-700 transition">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
