"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import Image from "next/image";
import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="xl:mt-8 xl:-mb-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Salen a la luz <br /> los testimonios
      </motion.h1>
      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-end lg:max-w-none mt-20 -mb-24">
        {/* 1st testimonial */}
        <div
          className="flex flex-col h-full p-6 bg-gray-800"
          data-aos="fade-up"
        >
          <div>
            <div className="relative inline-flex flex-col mb-4">
              <Image
                className="rounded-full"
                src={TestimonialImage01}
                width={48}
                height={48}
                alt="Testimonial 01"
              />
              <svg
                className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
              </svg>
            </div>
          </div>
          <blockquote className="text-lg text-gray-400 grow">
            — El coaching fitness no solo es sobre el físico, sino también sobre
            el empoderamiento. Descubrí mi fuerza interior y construí confianza
            en cada sesión. Ahora me siento poderosa y fuerte, gracias a este
            increíble viaje de transformación.".
          </blockquote>
          <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
            <cite className="text-gray-200 not-italic">Sofía Márquez</cite> -{" "}
            <a
              className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
              href="#0"
            ></a>
          </div>
        </div>
        {/* 2nd testimonial */}
        <div
          className="flex flex-col h-full p-6 bg-gray-800"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <div className="relative inline-flex flex-col mb-4">
              <Image
                className="rounded-full"
                src={TestimonialImage02}
                width={48}
                height={48}
                alt="Testimonial 02"
              />
              <svg
                className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
              </svg>
            </div>
          </div>
          <blockquote className="text-lg text-gray-400 grow">
            — Nunca pensé que podría superar mis límites, pero con la ayuda de
            mi coach fitness, no solo rompí barreras, sino que también alcancé
            metas que parecían inalcanzables. Este viaje no solo cambió mi
            cuerpo, sino mi perspectiva de la vida.
          </blockquote>
          <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
            <cite className="text-gray-200 not-italic">Martín Manserance</cite>{" "}
            -{" "}
            <a
              className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
              href="#0"
            ></a>
          </div>
        </div>
        {/* 3rd testimonial */}
        <div
          className="flex flex-col h-full p-6 bg-gray-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div>
            <div className="relative inline-flex flex-col mb-4">
              <Image
                className="rounded-full"
                src={TestimonialImage03}
                width={48}
                height={48}
                alt="Testimonial 03"
              />
              <svg
                className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
              </svg>
            </div>
          </div>
          <blockquote className="text-lg text-gray-400 grow">
            — Al principio, tenía dudas sobre mi capacidad para cambiar. Pero
            con la guía personalizada de mi coach fitness, descubrí una fuerza
            interior que ni siquiera sabía que tenía. Ahora estoy más
            determinado que nunca, tanto mental como físicamente."
          </blockquote>
          <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
            <cite className="text-gray-200 not-italic">Carlos Fernandez</cite> -{" "}
            <a
              className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
              href="#0"
            ></a>
          </div>
        </div>
      </div>
    </LampContainer>
  );
}
