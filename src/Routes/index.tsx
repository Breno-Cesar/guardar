import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { ContactUsPage } from '../pages/ContactUs';
import { BlogPage } from '../pages/Blog';
import { CasePage } from '../pages/Case';


const RoutesSystem: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ContactUs" element={<ContactUsPage />} />
      <Route path="/Blog" element={<BlogPage />} />
      <Route path="/Case" element={<CasePage />} />
    </Routes>
  );
}

export default RoutesSystem;
