"use client";
import React, { useState, useEffect } from "react";

import type { ChangeEvent, FormEvent, KeyboardEvent } from "react";

import { Pencil } from "lucide-react";
import Image from "next/image";
import Swal from "sweetalert2";

interface FormData {
  yourName: string;
  userName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

function Settings() {
  const initialData = {
    yourName: "Charlene Reed",
    userName: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "*********",
    dateOfBirth: "1990-01-25",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  };

  const [formData, setFormData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(formData));
    }
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      localStorage.setItem("userData", JSON.stringify(formData));

      await Swal.fire({
        title: "Success!",
        text: "Your profile has been updated successfully",
        icon: "success",
        confirmButtonText: "Great!",
        confirmButtonColor: "#000",
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
    } catch (error) {
      await Swal.fire({
        title: "Error!",
        text: "Failed to update profile. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#000",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageEdit = () => {
    Swal.fire({
      title: "Upload Profile Picture",
      text: "Choose a new profile picture to upload",
      showCancelButton: true,
      confirmButtonText: "Upload",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#000",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleImageEdit();
    }
  };

  const inputstyle =
    "w-full rounded-xl border border-[#DFEAF2] px-3 py-2 text-[#718EBF] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:border-gray-400";

  return (
    <section className="w-full rounded-[25px] bg-white md:p-6">
      <div className="flex w-full gap-4 border-b">
        <span className="flex flex-col gap-2">
          <p className="mx-4 font-semibold text-[#232323]">Edit Profile</p>
          <div className="h-1 w-full rounded-t-xl bg-black" />
        </span>

        <span className="flex cursor-pointer flex-col gap-2 transition-opacity hover:opacity-80">
          <p className="mx-4 text-[#718EBF]">Preferences</p>
          <div className="h-1 w-full rounded-t-xl bg-transparent" />
        </span>

        <span className="flex cursor-pointer flex-col gap-2 transition-opacity hover:opacity-80">
          <p className="mx-4 text-[#718EBF]">Security</p>
          <div className="h-1 w-full rounded-t-xl bg-transparent" />
        </span>
      </div>

      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className="mt-8 flex h-full w-[10rem] items-center justify-center">
          <div className="group relative h-fit w-fit">
            <Image
              width={80}
              height={50}
              alt="Main User"
              src="/users/main-user.png"
              className="rounded-full"
            />
            <div
              className="absolute -bottom-2 -right-2 flex h-[2rem] w-[2rem] transform cursor-pointer items-center justify-center rounded-full bg-black transition-colors duration-150 hover:bg-gray-800 active:scale-95"
              onClick={handleImageEdit}
              onKeyDown={handleKeyDown}
            >
              <Pencil className="text-white" size={16} />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 w-full space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="yourName"
                className="block text-sm font-medium text-[#232323]"
              >
                Your Name
              </label>
              <input
                type="text"
                id="yourName"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                placeholder="Enter your name"
                className={inputstyle}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-[#232323]"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter username"
                className={inputstyle}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#232323]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className={inputstyle}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#232323]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className={inputstyle}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-[#232323]"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={inputstyle}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="presentAddress"
                className="block text-sm font-medium text-[#232323]"
              >
                Present Address
              </label>
              <input
                type="text"
                id="presentAddress"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                placeholder="Enter present address"
                className={inputstyle}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-[#232323]"
              >
                Permanent Address
              </label>
              <input
                type="text"
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                placeholder="Enter permanent address"
                className={inputstyle}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-[#232323]"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className={inputstyle}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-[#232323]"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Enter postal code"
                className={inputstyle}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-[#232323]"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
                className={inputstyle}
              />
            </div>
          </div>

          <div className="flex w-full items-end justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`transform rounded-xl bg-black px-12 py-2 font-semibold text-white transition-all duration-200 hover:bg-gray-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 ${isSubmitting ? "animate-pulse" : ""} `}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Settings;
