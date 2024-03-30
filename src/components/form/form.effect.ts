import { ChangeEvent, FormEvent, useState } from "react";
import { FormData } from "./form.types";

export const useFormEffect = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    age: 0,
    photo: null,
    date: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeDate = (date: Date) => {
    setFormData({ ...formData, date: date as unknown as string });
  };

  const handleAgeChange = (value: number) => {
    setFormData({ ...formData, age: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, photo: file });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleRemoveFile = () => {
    setFormData({ ...formData, photo: null });
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please use correct formatting. Example: address@email.com";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);

      setFormData({
        firstName: "",
        lastName: "",
        emailAddress: "",
        age: 0,
        photo: null,
        date: "",
      });
      setErrors({});
    }
  };

  const isFormValid = () => {
    return (
      Object.keys(errors).length === 0 &&
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.emailAddress.trim() !== "" &&
      formData.age > 0 &&
      formData.photo &&
      formData.date
    );
  };

  return {
    errors,
    formData,
    handleChange,
    handleSubmit,
    handleChangeDate,
    handleFileChange,
    handleRemoveFile,
    handleAgeChange,
    handleDrop,
    handleDragOver,
    isFormValid,
  };
};
