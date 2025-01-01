"use client";

import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverChange = (isHovered: boolean) => {
    setIsHovered(isHovered);
  };

  return (
    <>
      <PageHeader isHovered={isHovered} />
      <SearchBar onHoverChange={handleHoverChange} />
    </>
  );
};

export default Home;
