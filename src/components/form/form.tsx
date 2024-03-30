import Button from "../form-controls/button/button";
import DatePicker from "../form-controls/datepicker/datepicker";
import File from "../form-controls/file/file";
import Input from "../form-controls/input/input";
import RangeSlider from "../form-controls/range-slider/range-slider";
import { useFormEffect } from "./form.effect";
import FileRemove from "../form-controls/file/file-remove/file-remove";

const Form = () => {
  const {
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
  } = useFormEffect();

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={formData.firstName}
        name="firstName"
        label="First Name"
        className="my-3"
        onChange={handleChange}
        error={errors.firstName}
      />

      <Input
        value={formData.lastName}
        name="lastName"
        label="Last Name"
        className="my-3"
        onChange={handleChange}
        error={errors.lastName}
      />
      <Input
        value={formData.emailAddress}
        name="emailAddress"
        label="Email Address"
        type="email"
        className="my-3"
        onChange={handleChange}
        error={errors.emailAddress}
      />
      <RangeSlider
        value={formData.age}
        name="age"
        onChange={handleAgeChange}
        min={8}
        max={100}
        tickMarks
      />
      <>
        <p className="label">Photo</p>
        {formData.photo ? (
          <FileRemove photoName={formData.photo.name} handleRemoveFile={handleRemoveFile} />
        ) : (
          <File
            name="file"
            className="form-control p-9 text-center"
            onChange={handleFileChange}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          />
        )}
      </>
      <DatePicker onChange={handleChangeDate} />
      <Button disabled={!isFormValid()} className="w-full mt-8" />
    </form>
  );
};

export default Form;
