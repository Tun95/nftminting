import "./styles.scss";
import { Formik, ErrorMessage, Form, Field, FormikHelpers } from "formik";
import logo from "../../../assets/home/logo.png";
import { MintFormValues } from "../../../types/Index";
import { mintnftSchema } from "../../../schema/Index";

// Initial values
const initialValues = {
  nftName: "",
  nftDescription: "",
  nftImageUrl: "",
};

function MintForm() {
  // SUBMIT HANDLE
  const handleSubmit = async (
    values: MintFormValues,
    { setSubmitting }: FormikHelpers<MintFormValues>
  ) => {
    console.log("Form Submitted", values);
    setSubmitting(false);
  };

  return (
    <div className="container">
      <div className="mint_form_box l_flex">
        <div className="mint_content_box">
          <div className="menu_header">
            <div className="left">
              <h2>Mint Your NFT</h2>
            </div>
          </div>
          <div className="form_box">
            <Formik
              initialValues={initialValues}
              validationSchema={mintnftSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      {/* NFT Name Field */}
                      <div
                        className={`form_group ${
                          touched.nftName && errors.nftName ? "error" : ""
                        }`}
                      >
                        <label htmlFor="nftName">NFT Name</label>
                        <Field
                          type="text"
                          id="nftName"
                          name="nftName"
                          placeholder="Enter NFT name"
                          className={`input_box ${
                            touched.nftName && errors.nftName
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="nftName"
                          component="div"
                          className="error"
                        />
                      </div>

                      {/* NFT Description Field (TEXTAREA) */}
                      <div
                        className={`form_group ${
                          touched.nftDescription && errors.nftDescription
                            ? "error"
                            : ""
                        }`}
                      >
                        <label htmlFor="nftDescription">Description</label>
                        <Field
                          as="textarea"
                          id="nftDescription"
                          name="nftDescription"
                          placeholder="Describe your NFT"
                          className={`input_box ${
                            touched.nftDescription && errors.nftDescription
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="nftDescription"
                          component="div"
                          className="error"
                        />
                      </div>

                      {/* NFT Image URL Field */}
                      <div
                        className={`form_group ${
                          touched.nftImageUrl && errors.nftImageUrl
                            ? "error"
                            : ""
                        }`}
                      >
                        <label htmlFor="nftImageUrl">Image URL</label>
                        <Field
                          type="text"
                          id="nftImageUrl"
                          name="nftImageUrl"
                          placeholder="Enter image URL"
                          className={`input_box ${
                            touched.nftImageUrl && errors.nftImageUrl
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="nftImageUrl"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form_group">
                      <div className="btn l_flex">
                        <button
                          type="submit"
                          className="main_btn l_flex"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="a_flex">
                              <i className="fa fa-spinner fa-spin"></i>
                              Submitting...
                            </span>
                          ) : (
                            <span className="logo_text a_flex">
                              <img
                                src={logo}
                                alt="logo_icon"
                                className="logo_icon"
                              />
                              <p>Mint NFT</p>
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintForm;
