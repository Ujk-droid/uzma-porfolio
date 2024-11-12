'use client';

import React, { useState } from "react";
import { Meteors } from "../components/ui/meteors";
import Swal from 'sweetalert2';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);

    form.append("access_key", "9bda5b9c-29c1-402e-b099-2de22660da48");

    const object = Object.fromEntries(form);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Good job!",
        text: "Form submitted successfully!",
        icon: "success"
      });
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="w-full max-w-lg lg:max-w-3xl relative mx-4">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-8 py-12 overflow-hidden rounded-2xl">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-white">Contact Us</h1>
              </div>
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="flex flex-wrap -mx-2">
                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/2">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button type="submit" className="flex mx-auto text-black bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}