"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Textarea } from "../ui/textarea";
import { Title } from "./services";
import Image from "next/image";

import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    captcha: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Reset individual error
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    setErrors((prev) => ({ ...prev, captcha: "" })); // Reset CAPTCHA error
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      description: "",
      captcha: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
      isValid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "A valid email is required.";
      isValid = false;
    }
    if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "A valid phone number is required.";
      isValid = false;
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
      isValid = false;
    }
    if (!captchaToken) {
      newErrors.captcha = "Please verify the CAPTCHA.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }
    const formData = new FormData(e.target);

    const { data, error } = await sendEmail(formData);
    console.log(error, data);
    // Simulate backend response
    if (data?.error) {
      const errorMessage =
        "There was a problem sending the email. Please try again!";
      toast.error(errorMessage);
      return;
    } else {
      toast.success("Message sent successfully");
      setFormData({
        email: "",
        description: "",
        name: "",
        phone: "",
      });
    }
    setCaptchaToken(null); // Reset CAPTCHA
  };

  return (
    <>
      <Toaster />
      <div className="py-10 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 md:space-y-8">
            <Title title=" We're Here to Help" />
            <p className="text-sm md:text-base">
              Tell us about your needs, and we&apos;ll get back to you with a
              personalized quote. It&apos;s quick, simple, and hassle-free —just
              fill out the form to get started!
            </p>
            <Image
              src={"/contacthome.svg"}
              alt="contact.png"
              width={314}
              height={264}
            />
          </div>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input
                className="py-6"
                placeholder="Full Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                className="py-6"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <Input
                className="py-6"
                placeholder="Phone Number*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <Textarea
                className="p-4"
                placeholder="Description*"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>

            <div>
              <ReCAPTCHA
                sitekey="6Lf54psqAAAAAGMuVpfy6jLezafXo69EqnfmUHuS"
                onChange={handleCaptchaChange}
              />
              {errors.captcha && (
                <p className="text-red-500 text-sm">{errors.captcha}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white rounded-md"
            >
              <div className="flex p-4 justify-between text-base items-center gap-4 w-full">
                Get Free Quote
                <IoArrowForwardCircleOutline className="h-6 w-6" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
