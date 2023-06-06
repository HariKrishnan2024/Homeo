import { message } from "antd";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiRescuetime } from "react-icons/si";
import { CgPhone } from "react-icons/cg";
import classNames from "../../styles/Home.module.css";
import emailjs from "emailjs-com";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/utils/config";
import { useRef, useState } from "react";

function Content4() {
  const form = useRef();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [values, setValues] = useState({});

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const details = [
    {
      title: "Location",
      icon: <FaMapMarkedAlt style={{ color: "#0360D9" }} />,
      description:
        "No.I8A/90, Bharani Street, Bharathi Nagar Tharamani, Chennai - 600 113.",
    },
    {
      title: "Consulting Hours",
      icon: <SiRescuetime style={{ color: "#0360D9" }} />,
      description:
        "Monday to Saturday Morning: 10.00 am to 1.00 pm Evening: 6.00 pm to 9.00 pm (Sunday For Appointments Only)",
    },
    {
      title: "Phone Number",
      icon: <CgPhone style={{ color: "#0360D9" }} />,
      description: "+91 79047 37815",
    },
  ];

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    console.log(valid);
    return valid;
  };

  const handleFinish = (e) => {
    e.preventDefault();
    if (validateForm(errors)) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          message.success("Successfully Sent");
        },
        (error) => {
          message.success("Something went wrong");
        }
      );
    } else {
      message.error("Validate errors");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    let error = { ...errors };

    switch (name) {
      case "name":
        error.name = value.length === 0 ? "Name is Required" : "";
        break;
      case "email":
        error.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "phone_number":
        error.phone_number =
          value.length === 0
            ? "Mobile number is Required"
            : value.length > 10 || value.length < 10
            ? "Mobile Number must be 10 numbers"
            : "";
        break;
      default:
        break;
    }
    setErrors({ ...error });
  };

  return (
    <section id="Contact Us">
      <div
        style={{
          minHeight: "100vh",
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 50,
          marginBottom: 50,
        }}
      >
        <div
          style={{ display: "flex", width: "100%" }}
          className={classNames.content}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
            className={classNames.content4Left}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              Contact Us
              <div
                style={{ borderBottom: "3.5px solid #0360D9", width: 60 }}
              ></div>
            </div>
            <div style={{ fontSize: 14, color: "#0009", marginBottom: 20 }}>
              Reach out to us for any inquiry
            </div>
            <form
              ref={form}
              onSubmit={handleFinish}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 25,
                marginTop: 15,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  className={classNames.input}
                />
                {errors["name"] && (
                  <span style={{ color: "red", fontSize: 14 }}>
                    {errors["name"]}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={classNames.input}
                  onChange={handleChange}
                />
                {errors["email"] && (
                  <span style={{ color: "red", fontSize: 14 }}>
                    {errors["email"]}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="number"
                  maxLength={"10"}
                  placeholder="Mobile Number"
                  name="phone_number"
                  className={classNames.input}
                  onChange={handleChange}
                />
                {errors["phone_number"] && (
                  <span style={{ color: "red", fontSize: 14 }}>
                    {errors["phone_number"]}
                  </span>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  cols="50"
                  className={classNames.input}
                  onChange={handleChange}
                />
              </div>

              <input
                type="submit"
                value="Send"
                disabled={
                  values["name"] &&
                  !errors["name"] &&
                  values["phone_number"] &&
                  !errors["phone_number"] &&
                  values["email"] &&
                  !errors["email"]
                    ? false
                    : true
                }
                style={{
                  padding: "8px 11px",
                  color: "#fff",
                  border: "none",
                  backgroundColor:
                    values["name"] &&
                    !errors["name"] &&
                    values["phone_number"] &&
                    !errors["phone_number"] &&
                    values["email"] &&
                    !errors["email"]
                      ? "#4096FF"
                      : "lightgray",
                  cursor:
                    values["name"] &&
                    !errors["name"] &&
                    values["phone_number"] &&
                    !errors["phone_number"] &&
                    values["email"] &&
                    !errors["email"]
                      ? "pointer"
                      : "not-allowed",
                }}
              />
            </form>
          </div>
          <div style={{}} className={classNames.content4Right}>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="400px"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=No.18A/90, Bharani Street, Bharathi Nagar, Tharamani, Chennai - 600 113.&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 30,
          }}
          className={classNames.content4detailContainer}
        >
          {details.map((detail, idx) => {
            return (
              <div
                style={{ display: "flex", gap: 15 }}
                className={classNames.content4detail}
                key={idx}
              >
                <div style={{ fontSize: 50 }}>{detail.icon}</div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <div style={{ fontSize: 15 }}>{detail.title}</div>
                  <div style={{ fontSize: 14, color: "#0007" }}>
                    {" "}
                    {detail.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Content4;
