import React, { useState } from "react";
import styled from "styled-components";

const RegisterFormTemplate = ({ children }: any) => {
  return (
    <main className="registerForm-Template">
      <div className="title">Sign Up</div>
      <section className="registerForm-wrapper">{children}</section>
    </main>
  );
};

export default RegisterFormTemplate;
