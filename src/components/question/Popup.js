import React from "react";
import "./popup.css";

export default function Popup({ open, children, onClose, id }) {
  if (!open) return null;
  return (
    <div key="OVERLAY" className="OVERLAY">
      <div key="POPUP" className="POPUP_STYLE">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}
