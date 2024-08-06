import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { addContact } from "../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const formikInitialValue = { id: "", name: "", number: "" };
  const id = useId();
  const nameFieldId = id + "-name";
  const phoneNumberFieldId = id + "-phoneNumber";
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={formikInitialValue}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isValid, dirty }) => (
        <Form className={css.contactForm}>
          <label htmlFor={nameFieldId} className={css.label}>
            Username
          </label>
          <Field
            id={nameFieldId}
            className={css.inputField}
            type="text"
            name="name"
          />

          <label htmlFor={phoneNumberFieldId} className={css.label}>
            Phone Number
          </label>
          <Field
            id={phoneNumberFieldId}
            className={css.inputField}
            type="text"
            name="number"
          />

          <button
            type="submit"
            className={isValid && dirty ? css.activeButton : css.isDisabled}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
