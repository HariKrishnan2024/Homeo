import { RiUserSearchFill } from "react-icons/ri";
import { FaUserPlus, FaCalendarCheck, FaLightbulb } from "react-icons/fa";
import classNames from "../../styles/Home.module.css";

function Content2() {
  const steps = [
    {
      title: "Search doctor",
      description:
        "Choose a doctor who listens, and understands, to provide the best possible care for you.",
      icon: <RiUserSearchFill style={{ fontSize: 35 }} />,
    },
    {
      title: "Check doctor Profile",
      description:
        "Our doctor takes a compassionate and patient-centred approach to medicine",
      icon: <FaUserPlus style={{ fontSize: 35 }} />,
    },
    {
      title: "Schedule Appointment",
      description:
        "Find your personalized solution for optimal wellness and vibrant skin with homoeopathy.",
      icon: <FaCalendarCheck style={{ fontSize: 35 }} />,
    },
    {
      title: "Get your Solution",
      description:
        "We can help you find available vaccine appointments near you or notify you when availability.",
      icon: <FaLightbulb style={{ fontSize: 35 }} />,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 50,
        minHeight: "100vh",
        marginTop: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
        className={classNames.content2Container}
      >
        <div
          style={{
            color: "rgb(105,120,231)",
            fontSize: 13,
            fontFamily: "poppins",
          }}
        >
          FASTEST SOLUTION
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            textAlign: "center",
            padding: "0px 30px",
            fontFamily: "volkhov",
          }}
        >
          4 easy steps to get your Solution
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 50,
            gap: 40,
            justifyContent: "center",
          }}
        >
          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                style={{
                  width: 200,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",

                  // padding: 10,
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E6F5FC",
                    borderRadius: "50%",
                    color: "#0360D9",
                  }}
                >
                  {step.icon}
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    padding: "5px",
                    textAlign: "center",
                    color: "gray",
                    wordSpacing: 3,
                  }}
                >
                  {step.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section id="About">
        <div
          style={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
          className={classNames.content2About}
        >
          <div className={classNames.aboutImgContainer}>
            <div className={classNames.aboutImg}>
              <img
                src="/assets/imgs/jdk.jpeg"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 10,
                }}
                alt="jdk"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: 20,
              paddingLeft: 30,
            }}
            className={classNames.Content2Desc}
          >
            <div style={{ fontSize: 34, color: "#0360D9" }}>
              <span style={{ fontSize: 28, color: "#000" }}>I&apos;m</span>{" "}
              Dr.JEYAMURUGAN, <span style={{ fontSize: 16 }}>BHMS </span>
            </div>
            <div
              style={{
                fontSize: 20,
                marginBottom: 20,
                marginTop: 8,
                fontWeight: 500,
              }}
            >
              Reg No : 8317
            </div>
            <div
              style={{ fontSize: 15, color: "#0009" }}
              className={classNames.desc}
            >
              A competent homoeopathic practitioner has great skill in treating
              patients with all types of cases including limitations of
              homoeopathy. Listens to and addresses all of the patient&apos;s
              concerns and clearly explains the course of treatment.
            </div>
          </div>
        </div>

        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={classNames.profileContainer}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              marginBottom: 20,
              color: "#0360D9",
            }}
          >
            About Us
          </div>
          <div className={classNames.profileCard}>
            <div
              className={classNames.img}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "0.6s",
                zIndex: 99,
              }}
            >
              <img src="/assets/imgs/jdk.jpeg" alt="team-img" />
            </div>
            <div className={classNames.caption}>
              <div className={classNames.profileNameIns}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: 22,
                    textAlign: "center",
                    fontWeight: 700,
                    marginBottom: 10,
                  }}
                >
                  Dr.JEYAMURUGAN
                </div>
                <p
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    color: "#0360D9",
                    opacity: 0.9,
                    marginTop: -5,
                    fontWeight: "bold",
                  }}
                >
                  BHMS
                </p>
              </div>
              <div
                className={classNames.content}
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  color: "#000",
                  fontFamily: "poppins",
                }}
              >
                A competent homoeopathic practitioner having a great skill in
                treating patients with all types of cases includes limitations
                of homoeopathy. Listens to and addresses all of the patients
                concerns and clearly explains the course of treatment.
              </div>
            </div>
          </div>
          <div
            className={classNames.profileName}
            style={{ textAlign: "center", marginTop: 10, marginBottom: 40 }}
          >
            <div
              style={{
                fontSize: 21,
                textAlign: "center",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Dr.JEYAMURUGAN
            </div>
            <p
              style={{
                fontSize: 16,
                color: "#0360D9",
                opacity: 0.9,
                margin: "2px 0px 6px 0px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              BHMS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content2;
