import React, { useState, useRef, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "../UI";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactFormData {
  user_name: string;
  user_email: string;
  message: string;
}

interface FormStatus {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<ContactFormData>({
    mode: "onChange",
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const watchedFields = watch();

  // Focus management
  useEffect(() => {
    const nameInput = document.getElementById("user_name");
    if (nameInput) {
      nameInput.focus();
    }
  }, []);

  // Clear success state after delay
  useEffect(() => {
    if (formStatus.isSuccess) {
      const timer = setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, isSuccess: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.isSuccess]);



  const validateEmailJSConfig = useCallback(() => {
    // FIXED: Use proper Vite env variable access
    const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

    // DEBUG: Log the values to console
    console.log("EmailJS Config Check:", {
      serviceId,
      templateId,
      publicKey,
      serviceIdExists: !!serviceId,
      templateIdExists: !!templateId,
      publicKeyExists: !!publicKey,
      isConfigured: !!(
        serviceId &&
        templateId &&
        publicKey &&
        serviceId !== "your_service_id" &&
        templateId !== "your_template_id" &&
        publicKey !== "your_public_key"
      ),
    });



    return {
      isConfigured: !!(
        serviceId &&
        templateId &&
        publicKey &&
        serviceId !== "your_service_id" &&
        templateId !== "your_template_id" &&
        publicKey !== "your_public_key"
      ),
      serviceId,
      templateId,
      publicKey,
    };
  }, []);


  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      setFormStatus({ isSubmitting: true, isSuccess: false, error: null });

      const config = validateEmailJSConfig();
 // const onSubmit = useCallback(
      // DEBUG: Log the config
      console.log("Form Submission Config:", config);

      if (!config.isConfigured) {
        const fallbackMessage =
          "EmailJS not configured. Please contact me directly at fikreddu@gmail.com or call +1 332-235-2825";
        console.log("EmailJS not configured:", config);

        // For development, let's see what we got
        if (
          config.serviceId === "your_service_id" ||
          config.templateId === "your_template_id" ||
          config.publicKey === "your_public_key"
        ) {
          console.error("EmailJS variables still have placeholder values!");
        }

        setFormStatus({
          isSubmitting: false,
          isSuccess: false,
          error: fallbackMessage,
        });
        toast.error("Please use direct contact methods");
        return;
      }

      try {
        console.log("Attempting to send email with:", {
          serviceId: config.serviceId,
          templateId: config.templateId,
          data: {
            user_name: data.user_name,
            user_email: data.user_email,
            message: data.message,
            to_name: "Fikremariam Kassa",
          },
        });

        const result = await emailjs.send(
          config.serviceId!,
          config.templateId!,
          {
            user_name: data.user_name,
            user_email: data.user_email,
            message: data.message,
            to_name: "Fikremariam Kassa",
          },
          config.publicKey!
        );

        console.log("EmailJS Success:", result);

        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          error: null,
        });

        toast.success("Message sent successfully!");
        reset();
      } catch (error) {
        console.error("EmailJS Error Details:", error);
        const errorMessage =
          error instanceof Error
            ? `Failed to send message: ${error.message}`
            : "Failed to send message. Please contact me directly at fikreddu@gmail.com";

        setFormStatus({
          isSubmitting: false,
          isSuccess: false,
          error: errorMessage,
        });

        toast.error("Failed to send message");
      }
    },
    [validateEmailJSConfig, reset]
  );
  
  const handleRetry = useCallback(() => {
    setFormStatus({ isSubmitting: false, isSuccess: false, error: null });
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "fikreddu@gmail.com",
      href: "mailto:fikreddu@gmail.com",
      ariaLabel: "Send email to fikreddu@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 332-235-2825",
      href: "tel:+13322352825",
      ariaLabel: "Call +1 332-235-2825",
    },
  ];

  // FIXED: Unified social links with proper structure
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Fikre-M",
      icon: FaGithub,
      ariaLabel: "Visit GitHub profile",
      color:
        "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fikremariam-kassa-28916062/",
      icon: FaLinkedin,
      ariaLabel: "Visit LinkedIn profile",
      color:
        "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
    },
    {
      name: "Email",
      url: "mailto:fikreddu@gmail.com",
      icon: FaEnvelope,
      ariaLabel: "Send email to fikreddu@gmail.com",
      color:
        "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
    },
  ];

  return (
    <section className="w-full py-6" aria-labelledby="contact-heading">
      {/* Header */}
      <header className="text-center mb-6">
        <h2 id="contact-heading" className="text-3xl font-bold text-white mb-2">
          Contact
        </h2>
        <div
          className="mx-auto h-1 w-20 bg-blue-500 rounded"
          aria-hidden="true"
        />
      </header>

      {/* Main Container */}
      <div
        ref={containerRef}
        className="
          bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg 
          hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
          border border-gray-600 hover:shadow-blue-500/25 p-6 w-full max-w-5xl mx-auto 
          flex flex-col lg:flex-row gap-6
        "
      >
        {/* Contact Information */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-white mb-4 text-center lg:text-left">
            Get In Touch
          </h3>

          <p className="text-gray-300 text-sm mb-4 text-center lg:text-left">
            I'm open to discussing opportunities, projects, or tech discussions.
          </p>

          {/* Contact Methods */}
          <div className="space-y-4 mb-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  className="
                    flex items-center gap-2 p-2 rounded-lg bg-gray-800/50 
                    hover:bg-gray-800 transition-colors duration-200 text-sm
                    focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1
                    focus:ring-offset-gray-700
                  "
                  aria-label={contact.ariaLabel}
                >
                  <Icon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  <div>
                    <div className="text-sm text-gray-400">{contact.label}</div>
                    <div className="text-white font-medium">
                      {contact.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center lg:justify-start mt-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-full bg-gray-800/50 hover:bg-blue-600 
                    text-white transition-all duration-200 transform hover:scale-110
                    focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1
                    focus:ring-offset-gray-700 ${social.color}
                  `}
                  aria-label={social.ariaLabel}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-lg font-semibold text-white text-center mb-4">
            Send a Message
          </h3>

          {/* Success State */}
          {formStatus.isSuccess && (
            <div
              className="mb-4 p-3 text-sm bg-green-600/20 border border-green-500 rounded-lg flex items-center gap-2"
              role="alert"
              aria-live="polite"
            >
              <CheckCircle
                className="w-5 h-5 text-green-400"
                aria-hidden="true"
              />
              <div>
                <div className="text-green-400 font-medium">
                  Message sent successfully!
                </div>
                <div className="text-green-300 text-sm">
                  I'll get back to you as soon as possible.
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {formStatus.error && (
            <div className="mb-4">
              <div
                className="p-3 text-sm bg-red-600/20 border border-red-500 rounded-lg"
                role="alert"
                aria-live="polite"
              >
                <div className="text-red-400 font-medium">
                  Failed to send message
                </div>
                <div className="text-red-300 text-sm">{formStatus.error}</div>
                {!formStatus.error.includes("not configured") && (
                  <button
                    onClick={handleRetry}
                    className="mt-2 text-sm text-red-300 hover:text-red-200 underline"
                  >
                    Try again
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3"
            noValidate
          >
            {/* Name Field - FIXED: Added missing padding */}
            <div>
              <label
                htmlFor="user_name"
                className="block text-xs font-medium text-gray-300 mb-1"
              >
                Name *
              </label>
              <input
                id="user_name"
                type="text"
                className={`
                  w-full p-3 text-sm rounded-lg bg-gray-800 text-white border transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${
                    errors.user_name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-600 hover:border-gray-500"
                  }
                `}
                placeholder="Your full name"
                disabled={formStatus.isSubmitting}
                aria-invalid={errors.user_name ? "true" : "false"}
                aria-describedby={errors.user_name ? "name-error" : undefined}
                {...register("user_name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name must be less than 50 characters",
                  },
                })}
              />
              {errors.user_name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-red-400"
                  role="alert"
                >
                  {errors.user_name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="user_email"
                className="block text-xs font-medium text-gray-300 mb-1"
              >
                Email *
              </label>
              <input
                id="user_email"
                type="email"
                className={`
                  w-full p-3 rounded-lg bg-gray-800 text-white border transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${
                    errors.user_email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-600 hover:border-gray-500"
                  }
                `}
                placeholder="your.email@example.com"
                disabled={formStatus.isSubmitting}
                aria-invalid={errors.user_email ? "true" : "false"}
                aria-describedby={errors.user_email ? "email-error" : undefined}
                {...register("user_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.user_email && (
                <p
                  id="email-error"
                  className="mt-1 text-sm text-red-400"
                  role="alert"
                >
                  {errors.user_email.message}
                </p>
              )}
            </div>

            {/* Message Field - FIXED: Changed resize class */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-gray-300 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={4} // Changed from 3 to 4 for better UX
                className={`
                  w-full p-3 rounded-lg bg-gray-800 text-white border transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed resize-y
                  ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-600 hover:border-gray-500"
                  }
                `}
                placeholder="Tell me about your project or just say hello..."
                disabled={formStatus.isSubmitting}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={
                  errors.message ? "message-error" : "message-help"
                }
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Message must be less than 1000 characters",
                  },
                })}
              />
              {errors.message ? (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-red-400"
                  role="alert"
                >
                  {errors.message.message}
                </p>
              ) : (
                <p id="message-help" className="mt-1 text-sm text-gray-400">
                  {watchedFields.message?.length || 0}/1000 characters
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={formStatus.isSubmitting}
              loadingText="Sending message..."
              disabled={!isValid || formStatus.isSubmitting}
              leftIcon={<Send className="w-4 h-4" />}
              className="mt-4 py-2 text-sm"
            >
              Send Message
            </Button>
          </form>

          {/* Form Help Text */}
          <p className="mt-3 text-xs text-gray-400 text-center">
            Your information is secure and will only be used to respond to your
            message.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
