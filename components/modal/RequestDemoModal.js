import { useState, useRef } from "react";
import SelectInput from "components/inputs/SelectInput";
import { useNotification } from "react-hook-notification";
import Input from "components/inputs/Input";
import styles from "../../styles/Home.module.css";

const RequestDemoModal = ({ open, closeModal }) => {
  const [formData, setFormData] = useState({});

  //Ref input
  const emailInput = useRef(null);
  //notificcation
  const notification = useNotification();

  const handleInputChange = e => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //Handle Demo Request
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    fetch("https://api.smartcomplyapp.com/api/landing_page/demo/", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.status) {
          closeModal();
          setFormData({});
          notification.success({
            text: "Successful request, you will be contacted shortly"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div
      id="requestDemo-modal"
      className={`${
        open ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } fixed z-50 inset-0  h-full w-full px-4 modal transition-all duration-100 flex justify-center items-center`}
    >
      <div
        className="absolute bg-gray-900/60 top-0 left-0 w-full h-full"
        onClick={closeModal}
      />
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-lg">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={closeModal}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="py-6 px-6 lg:px-8">
          <h3
            className={`primary-text mb-4 text-xl font-medium text-gray-900 uppercase dark:text-white`}
          >
            Book a Demo
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              name="full_name"
              label="Full Name"
              type="text"
              handleInputChange={handleInputChange}
            />
            <Input
              name="work_email"
              label="Work Email"
              type="email"
              handleInputChange={handleInputChange}
              reference={emailInput}
            />
            <Input
              name="company"
              label="Company"
              type="text"
              handleInputChange={handleInputChange}
            />
            <Input
              name="position"
              label="Position"
              type="text"
              handleInputChange={handleInputChange}
            />
            <SelectInput
              name="country"
              label="Country"
              handleInputChange={handleInputChange}
            />
            <Input
              name="phone"
              label="Phone"
              type="text"
              handleInputChange={handleInputChange}
            />
            <button
              type="submit"
              className={`${styles.infrastructureButton} w-full uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Request a Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoModal;
