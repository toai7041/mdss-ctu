import React from "react";
import "./popup.css";

export default function Popup({ open, children, onClose }) {
  if (!open) return null;
  return (
    <div key="OVERLAY" className="OVERLAY">
      <div key="POPUP" className="POPUP_STYLE">
        <button className="close-btn" onClick={onClose}>
          CLOSE
        </button>
        {children}
      </div>
    </div>
  );
}
