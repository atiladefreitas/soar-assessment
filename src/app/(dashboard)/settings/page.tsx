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
    "w-full rounded-xl border border-card-border px-3 py-2 text-input-icon focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:border-gray-400";

  return (
    <section className="w-full rounded-[25px] bg-white md:p-6">
      <div className="flex w-full gap-4 border-b">
        <span className="flex flex-col gap-2">
          <p className="mx-4 font-semibold text-text-primary">Edit Profile</p>
          <div className="h-1 w-full rounded-t-xl bg-black" />
        </span>

        <span className="flex cursor-pointer flex-col gap-2 transition-opacity hover:opacity-80">
          <p className="mx-4 text-text-secondary">Preferences</p>
          <div className="h-1 w-full rounded-t-xl bg-transparent" />
        </span>

        <span className="flex cursor-pointer flex-col gap-2 transition-opacity hover:opacity-80">
          <p className="mx-4 text-text-secondary">Security</p>
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
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <label
                  htmlFor={key}
                  className="block text-sm font-medium text-text-primary"
                >
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <input
                  type={
                    key === "email"
                      ? "email"
                      : key === "password"
                        ? "password"
                        : key === "dateOfBirth"
                          ? "date"
                          : "text"
                  }
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  placeholder={`Enter ${key.toLowerCase().replace(/([A-Z])/g, " $1")}`}
                  className={inputstyle}
                />
              </div>
            ))}
          </div>

          <div className="flex w-full items-end justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`transform rounded-xl bg-black px-12 py-2 font-semibold text-white transition-all duration-200 hover:bg-gray-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 ${isSubmitting ? "animate-pulse" : ""}`}
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
