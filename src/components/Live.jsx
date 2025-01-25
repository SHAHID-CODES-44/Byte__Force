import React, { useState, useEffect } from "react";
import "./Style.css";

const Live = () => {

  return (
    <div id="live-container">
      <h1 id="live-title">Live Statistics</h1>
      <div id="stats-container">
        <div id="manufactured-cups" className="stat">
          <h2>Manufactured Cups</h2>
          <p>1294832</p>
        </div>
        <div id="dumped-cups" className="stat">
          <h2>Dumped Cups</h2>
          <p>38392</p>
        </div>
        <div id="paper-cups" className="stat">
          <h2>Paper Cups Used</h2>
          <p>1233233</p>
        </div>
        <div id="other-cups" className="stat">
          <h2>Other Cups Used</h2>
          <p>2321</p>
        </div>
      </div>
    </div>
  );
};

export default Live;
