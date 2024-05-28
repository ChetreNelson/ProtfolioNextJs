"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactPage = () => {
  const [sucess, setSuccess] = useState(false);
  const [validationErr, setValidationErr] = useState("");
  const [err, setErr] = useState(false);
  const text = "Say Hello";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setErr(false);
    setSuccess(false);
    setValidationErr("");
    const email = form.current.user_email.value;
    const message = form.current.user_message.value;

    if (!message) {
      setValidationErr("Please enter a message.");
      return;
    }
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setValidationErr("Please enter a valid email address.");
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setErr(true);
        }
      );
  };
  return (
    <motion.div
      className="h-full overflow-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[90%] mt-6 flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* text-Containter  */}
        <div className="h-[20%] lg:h-full lg:w-1/2 flex justify-center items-center text-6xl">
          <div className="flex">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <div className="animate-bounce">😊</div>
          </div>
        </div>
        {/* form-containter */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-2/3 overflow-auto  lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 "
        >
          <span className="">Dear Nelson,</span>
          <textarea
            rows={6}
            className="bg-transparent overflow-auto  border-b-2 h-auto border-b-black outline-none resize-none"
            name="user_message"
            style={{ minHeight: "10rem" }}
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {validationErr && (
            <span className="text-red-600 font-semibold">{validationErr}</span>
          )}
          {sucess && (
            <span className="text-green-600 font-semibold">
              Your message has been sent sucessfully!
            </span>
          )}
          {err && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
